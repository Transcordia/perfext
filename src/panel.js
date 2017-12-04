const CHK_ENABLED = 'chkEnabled';
const CHART_SIZE  = 'chartSize';
const CHART_TIME  = 'chartTime';

const stringToColor = ( str ) => {
  let hash = 0;
  for ( let i = 0; i < str.length; i++ ) {
    hash = str.charCodeAt( i ) + ((hash << 3) - hash);
  }
  const color = Math.abs( hash ).toString( 16 ).substring( 0, 6 );

  return "#" + '000000'.substring( 0, 6 - color.length ) + color;
}

const context = {
  // Indicates whether we are actively capturing HAR entries or not (defaults to not)
  enabled : false,

  // We use this array to track all har entries. This array is updated frequently with additional content as
  // requests are detected.
  harEntries$ : new Rx.ReplaySubject()
};

const setupHARListeners = () => {
  chrome.devtools.network.onRequestFinished.addListener( request => {
    if ( context.enabled ) {
      // console.log( 'Request', request );
      context.harEntries$.next( request );
    }
  } );
}

const sizeByMimeType = prop => {
  const propValue = entry => {
    const props = prop.split( '.' );
    let value   = entry;
    while ( props.length > 0 )
      value = value[ props.shift() ]

    return value;
  }

  return ( accum, entry ) => {
    const value = propValue( entry );

    const mimetype    = entry.response.content.mimeType;
    accum[ mimetype ] = (accum[ mimetype ] || 0) + value;

    return accum;
  };
}


const byProp = prop => function ( accum, entry ) {
  const props = prop.split( '.' );
  let value   = entry;
  while ( props.length > 0 ) {
    value = value[ props.shift() ]
  }
  return accum + (value || 0);
};

const byPropPositive = prop => function ( accum, entry ) {
  const props = prop.split( '.' );
  let value   = entry;
  while ( props.length > 0 ) {
    value = value[ props.shift() ]
  }
  if ( value < 0 ) value = 0;
  return accum + (value || 0);
};

class BarChart {
  constructor( element, entries$, prop, func ) {
    this.chart = new google.charts.Bar( element );

    this.entries = [];
    this.func    = func;
    this.prop    = prop;

    // This will get called with empty arrays from time to time
    entries$.subscribe(
        x => {
          if ( x.length ) {
            this.entries = this.entries.concat( x );
            this.update()
          }
        }
    );
  }

  // Need to return data (and labels) in this order
  // prop, mime1, mime2, mime3, mime4
  // prop, val1, val2, val3, val4
  data( label ) {
    const dataObj = this.entries.reduce( this.func, {} )

    // This data in [ [mime1, val1], [mime2, val2], ... ]
    const data = [ [ label ], [ label ] ];
    for ( const [ key, value ] of Object.entries( dataObj ) ) {
      if ( value > 0 ) {
        data[ 0 ].push( key );
        data[ 1 ].push( value );
      }
    }

    return data;
  }

  getColors( mimes ) {
    const result = {}
    mimes.forEach( (mime, index) => {
      result[index] = {color: stringToColor(mime)};
    })
    return result;
  }

  update() {
    if ( this.entries.length ) {
      const chartData = this.data( this.prop );
      console.log( 'Data\n', JSON.stringify( chartData, null, 4 ) );
      const data = google.visualization.arrayToDataTable( chartData );

      const options = {
        stacked : true,
        chart : { title : this.prop + ' by Mime-Type' },
        bars : 'horizontal',
        isStacked : 'percent',
        legend : { position : 'top' },
        height : 300,
        series : this.getColors(chartData[0].slice(1)),
        hAxis : {
          minValue : 0,
          format : 'decimal',
          ticks : [ 0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1 ]
        }
      };

      this.chart.draw( data, google.charts.Bar.convertOptions( options ) );
    }
  }
}

const initPanel = () => {
  // React to a checkbox that determines if we are listening to the HAR in realtime (extension enabled flag)
  const chkEnabled = document.getElementById( CHK_ENABLED );
  context.enabled  = chkEnabled.checked;
  chkEnabled.addEventListener( 'change', e => context.enabled = chkEnabled.checked );

  setupHARListeners();

  // Initialize the two 100% bar graphs that will react to changes in the harEntries
  const timeBar = new BarChart( document.getElementById( CHART_TIME ),
      context.harEntries$.bufferTime( 1000 ), 'Time to Load', sizeByMimeType( 'time' ) );
  const sizeBar = new BarChart( document.getElementById( CHART_SIZE ),
      context.harEntries$.bufferTime( 2000 ), 'Transfer Size', sizeByMimeType( 'response._transferSize' ) );
};

document.addEventListener( 'DOMContentLoaded', () => {
  google.charts.load( 'current', { packages : [ 'bar' ] } );
  google.charts.setOnLoadCallback( initPanel );
} );

