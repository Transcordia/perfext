document.addEventListener( 'DOMContentLoaded', function () {
    const chartLoaded = () => {
        const mimetypes = {
            "application/font": [ 'ttf', 'woff', 'woff2', 'otf' ],
            "application/andrew-inset": [ "ez" ],
            "application/applixware": [ "aw" ],
            "application/atom+xml": [ "atom" ],
            "application/atomcat+xml": [ "atomcat" ],
            "application/atomsvc+xml": [ "atomsvc" ],
            "application/bdoc": [ "bdoc" ],
            "application/ccxml+xml": [ "ccxml" ],
            "application/cdmi-capability": [ "cdmia" ],
            "application/cdmi-container": [ "cdmic" ],
            "application/cdmi-domain": [ "cdmid" ],
            "application/cdmi-object": [ "cdmio" ],
            "application/cdmi-queue": [ "cdmiq" ],
            "application/cu-seeme": [ "cu" ],
            "application/dash+xml": [ "mpd" ],
            "application/davmount+xml": [ "davmount" ],
            "application/docbook+xml": [ "dbk" ],
            "application/dssc+der": [ "dssc" ],
            "application/dssc+xml": [ "xdssc" ],
            "application/ecmascript": [ "ecma" ],
            "application/emma+xml": [ "emma" ],
            "application/epub+zip": [ "epub" ],
            "application/exi": [ "exi" ],
            "application/geo+json": [ "geojson" ],
            "application/gml+xml": [ "gml" ],
            "application/gpx+xml": [ "gpx" ],
            "application/gxf": [ "gxf" ],
            "application/gzip": [ "gz" ],
            "application/hyperstudio": [ "stk" ],
            "application/inkml+xml": [ "ink", "inkml" ],
            "application/ipfix": [ "ipfix" ],
            "application/java-archive": [ "jar", "war", "ear" ],
            "application/java-serialized-object": [ "ser" ],
            "application/java-vm": [ "class" ],
            "application/javascript": [ "js", "mjs" ],
            "application/json": [ "json", "map" ],
            "application/json5": [ "json5" ],
            "application/jsonml+json": [ "jsonml" ],
            "application/ld+json": [ "jsonld" ],
            "application/lost+xml": [ "lostxml" ],
            "application/mac-binhex40": [ "hqx" ],
            "application/mac-compactpro": [ "cpt" ],
            "application/mads+xml": [ "mads" ],
            "application/manifest+json": [ "webmanifest" ],
            "application/marc": [ "mrc" ],
            "application/marcxml+xml": [ "mrcx" ],
            "application/mathematica": [ "ma", "nb", "mb" ],
            "application/mathml+xml": [ "mathml" ],
            "application/mbox": [ "mbox" ],
            "application/mediaservercontrol+xml": [ "mscml" ],
            "application/metalink+xml": [ "metalink" ],
            "application/metalink4+xml": [ "meta4" ],
            "application/mets+xml": [ "mets" ],
            "application/mods+xml": [ "mods" ],
            "application/mp21": [ "m21", "mp21" ],
            "application/mp4": [ "mp4s", "m4p" ],
            "application/msword": [ "doc", "dot" ],
            "application/mxf": [ "mxf" ],
            "application/octet-stream": [ "bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer" ],
            "application/oda": [ "oda" ],
            "application/oebps-package+xml": [ "opf" ],
            "application/ogg": [ "ogx" ],
            "application/omdoc+xml": [ "omdoc" ],
            "application/onenote": [ "onetoc", "onetoc2", "onetmp", "onepkg" ],
            "application/oxps": [ "oxps" ],
            "application/patch-ops-error+xml": [ "xer" ],
            "application/pdf": [ "pdf" ],
            "application/pgp-encrypted": [ "pgp" ],
            "application/pgp-signature": [ "asc", "sig" ],
            "application/pics-rules": [ "prf" ],
            "application/pkcs10": [ "p10" ],
            "application/pkcs7-mime": [ "p7m", "p7c" ],
            "application/pkcs7-signature": [ "p7s" ],
            "application/pkcs8": [ "p8" ],
            "application/pkix-attr-cert": [ "ac" ],
            "application/pkix-cert": [ "cer" ],
            "application/pkix-crl": [ "crl" ],
            "application/pkix-pkipath": [ "pkipath" ],
            "application/pkixcmp": [ "pki" ],
            "application/pls+xml": [ "pls" ],
            "application/postscript": [ "ai", "eps", "ps" ],
            "application/pskc+xml": [ "pskcxml" ],
            "application/rdf+xml": [ "rdf" ],
            "application/reginfo+xml": [ "rif" ],
            "application/relax-ng-compact-syntax": [ "rnc" ],
            "application/resource-lists+xml": [ "rl" ],
            "application/resource-lists-diff+xml": [ "rld" ],
            "application/rls-services+xml": [ "rs" ],
            "application/rpki-ghostbusters": [ "gbr" ],
            "application/rpki-manifest": [ "mft" ],
            "application/rpki-roa": [ "roa" ],
            "application/rsd+xml": [ "rsd" ],
            "application/rss+xml": [ "rss" ],
            "application/rtf": [ "rtf" ],
            "application/sbml+xml": [ "sbml" ],
            "application/scvp-cv-request": [ "scq" ],
            "application/scvp-cv-response": [ "scs" ],
            "application/scvp-vp-request": [ "spq" ],
            "application/scvp-vp-response": [ "spp" ],
            "application/sdp": [ "sdp" ],
            "application/set-payment-initiation": [ "setpay" ],
            "application/set-registration-initiation": [ "setreg" ],
            "application/shf+xml": [ "shf" ],
            "application/smil+xml": [ "smi", "smil" ],
            "application/sparql-query": [ "rq" ],
            "application/sparql-results+xml": [ "srx" ],
            "application/srgs": [ "gram" ],
            "application/srgs+xml": [ "grxml" ],
            "application/sru+xml": [ "sru" ],
            "application/ssdl+xml": [ "ssdl" ],
            "application/ssml+xml": [ "ssml" ],
            "application/tei+xml": [ "tei", "teicorpus" ],
            "application/thraud+xml": [ "tfi" ],
            "application/timestamped-data": [ "tsd" ],
            "application/voicexml+xml": [ "vxml" ],
            "application/widget": [ "wgt" ],
            "application/winhlp": [ "hlp" ],
            "application/wsdl+xml": [ "wsdl" ],
            "application/wspolicy+xml": [ "wspolicy" ],
            "application/xaml+xml": [ "xaml" ],
            "application/xcap-diff+xml": [ "xdf" ],
            "application/xenc+xml": [ "xenc" ],
            "application/xhtml+xml": [ "xhtml", "xht" ],
            "application/xml": [ "xml", "xsl", "xsd", "rng" ],
            "application/xml-dtd": [ "dtd" ],
            "application/xop+xml": [ "xop" ],
            "application/xproc+xml": [ "xpl" ],
            "application/xslt+xml": [ "xslt" ],
            "application/xspf+xml": [ "xspf" ],
            "application/xv+xml": [ "mxml", "xhvml", "xvml", "xvm" ],
            "application/yang": [ "yang" ],
            "application/yin+xml": [ "yin" ],
            "application/zip": [ "zip" ],
            "audio/3gpp": [],
            "audio/adpcm": [ "adp" ],
            "audio/basic": [ "au", "snd" ],
            "audio/midi": [ "mid", "midi", "kar", "rmi" ],
            "audio/mp3": [],
            "audio/mp4": [ "m4a", "mp4a" ],
            "audio/mpeg": [ "mpga", "mp2", "mp2a", "mp3", "m2a", "m3a" ],
            "audio/ogg": [ "oga", "ogg", "spx" ],
            "audio/s3m": [ "s3m" ],
            "audio/silk": [ "sil" ],
            "audio/wav": [ "wav" ],
            "audio/wave": [],
            "audio/webm": [ "weba" ],
            "audio/xm": [ "xm" ],
            "image/apng": [ "apng" ],
            "image/bmp": [ "bmp" ],
            "image/cgm": [ "cgm" ],
            "image/g3fax": [ "g3" ],
            "image/gif": [ "gif" ],
            "image/ief": [ "ief" ],
            "image/jpeg": [ "jpeg", "jpg", "jpe" ],
            "image/ktx": [ "ktx" ],
            "image/png": [ "png" ],
            "image/sgi": [ "sgi" ],
            "image/svg+xml": [ "svg", "svgz" ],
            "image/tiff": [ "tiff", "tif" ],
            "image/webp": [ "webp" ],
            "message/rfc822": [ "eml", "mime" ],
            "model/gltf+json": [ "gltf" ],
            "model/gltf-binary": [ "glb" ],
            "model/iges": [ "igs", "iges" ],
            "model/mesh": [ "msh", "mesh", "silo" ],
            "model/vrml": [ "wrl", "vrml" ],
            "model/x3d+binary": [ "x3db", "x3dbz" ],
            "model/x3d+vrml": [ "x3dv", "x3dvz" ],
            "model/x3d+xml": [ "x3d", "x3dz" ],
            "text/cache-manifest": [ "appcache", "manifest" ],
            "text/calendar": [ "ics", "ifb" ],
            "text/coffeescript": [ "coffee", "litcoffee" ],
            "text/css": [ "css" ],
            "text/csv": [ "csv" ],
            "text/hjson": [ "hjson" ],
            "text/html": [ "html", "htm", "shtml" ],
            "text/jade": [ "jade" ],
            "text/jsx": [ "jsx" ],
            "text/less": [ "less" ],
            "text/markdown": [ "markdown", "md" ],
            "text/mathml": [ "mml" ],
            "text/n3": [ "n3" ],
            "text/plain": [ "txt", "text", "conf", "def", "list", "log", "in", "ini" ],
            "text/richtext": [ "rtx" ],
            "text/rtf": [],
            "text/sgml": [ "sgml", "sgm" ],
            "text/slim": [ "slim", "slm" ],
            "text/stylus": [ "stylus", "styl" ],
            "text/tab-separated-values": [ "tsv" ],
            "text/troff": [ "t", "tr", "roff", "man", "me", "ms" ],
            "text/turtle": [ "ttl" ],
            "text/uri-list": [ "uri", "uris", "urls" ],
            "text/vcard": [ "vcard" ],
            "text/vtt": [ "vtt" ],
            "text/xml": [],
            "text/yaml": [ "yaml", "yml" ],
            "video/3gpp": [ "3gp", "3gpp" ],
            "video/3gpp2": [ "3g2" ],
            "video/h261": [ "h261" ],
            "video/h263": [ "h263" ],
            "video/h264": [ "h264" ],
            "video/jpeg": [ "jpgv" ],
            "video/jpm": [ "jpm", "jpgm" ],
            "video/mj2": [ "mj2", "mjp2" ],
            "video/mp2t": [ "ts" ],
            "video/mp4": [ "mp4", "mp4v", "mpg4" ],
            "video/mpeg": [ "mpeg", "mpg", "mpe", "m1v", "m2v" ],
            "video/ogg": [ "ogv" ],
            "video/quicktime": [ "qt", "mov" ],
            "video/webm": [ "webm" ]
        };

        const getMimeType = url => {
            const regex = /\.([^.\/#?]+)([#?][^\/]*)?$/g;
            try {
                const u = new URL( url );
                const match = regex.exec( u.pathname );
                if ( !match || match.length < 2 ) return 'unknown';
                const ext = match[ 1 ];

                const iterator = Object.entries( mimetypes );
                for ( let e of iterator ) {
                    if ( e[ 1 ].indexOf( ext ) >= 0 ) return e[ 0 ];
                }
            } catch ( e ) {
                // do nothing
            }

            return 'unknown';
        };

        function dynReport( harEntries ) {

            const byProp = prop => function ( accum, entry ) {
                const props = prop.split( '.' );
                let value = entry;
                while ( props.length > 0 ) {
                    value = value[ props.shift() ]
                }
                return accum + (value || 0);
            };

            const byPropPositive = prop => function ( accum, entry ) {
                const props = prop.split( '.' );
                let value = entry;
                while ( props.length > 0 ) {
                    value = value[ props.shift() ]
                }
                if ( value < 0 ) value = 0;
                return accum + (value || 0);
            };

            const sizeByMimeType = function ( sub, entry ) {
                const mimetype = entry.response.content.mimeType;
                const category = sub[ mimetype ] || {};

                // category.entry = category.entry || [];
                // category.entry.push( entry );

                category.count = category.count ? category.count + 1 : 1;
                category.transferSize = category.transferSize
                        ? category.transferSize + entry.response._transferSize : entry.response._transferSize;
                category.time = (category.time || 0) + entry.time;
                const blockedTime = entry.timings.blocked > 0 ? entry.timings.blocked : 0;
                category.blockedTime = (category.blockedTime || 0) + blockedTime;
                sub[ mimetype ] = category;
                return sub;
            };

            const sizeByInitiatorType = function ( sub, entry ) {
                if ( entry.initiatorType ) {
                    const category = sub[ entry.initiatorType ] || {};
                    category.count = category.count ? category.count + 1 : 1;
                    if ( entry.encodedBodySize )
                        category.sizeEncoded = category.sizeEncoded ? category.sizeEncoded + entry.encodedBodySize : entry.encodedBodySize;
                    if ( entry.decodedBodySize )
                        category.sizeDecoded = category.sizeDecoded ? category.sizeDecoded + entry.decodedBodySize : entry.decodedBodySize;
                    if ( entry.transferSize )
                        category.sizeTransfer = category.sizeTransfer ? category.sizeTransfer + entry.transferSize : entry.transferSize;
                    sub[ entry.initiatorType ] = category;
                }
                return sub;
            };

            // Identifies the cumulative time for entries and finds the dead space between service calls
            const gapTime = function ( entries, threshold ) {
                const gapmap = entries
                        .filter( entry => 'startTime' in entry && 'duration' in entry )
                        .map( entry => {
                            // had to resort to hack; object.assign not working with 'entry'
                            const entryCopy = JSON.parse( JSON.stringify( entry ) );
                            return Object.assign( {}, entryCopy, { endTime: entry.startTime + entry.duration } );
                        } );

                gapmap.sort( entrySort );

                const flat = gapmap.reduce( collapse, [] );

                const justgaps = flat.filter( entry => entry.type === 'gap' );

                return justgaps.length
                        ? justgaps.reduce( thresholdTime( threshold ), 0 )
                        : flat.pop().endTime;
            };

            const thresholdTime = threshold => ( accum, gap ) => {
                return !accum && gap.duration > threshold ? gap.startTime : accum;
            };

            const entrySort = function ( a, b ) {
                return a.startTime - b.startTime;
            };

            const addAdditionalContext = entry => {
                const copy = JSON.parse( JSON.stringify( entry ) );
                const startTime = new Date( entry.startedDateTime ).getTime();
                const endTime = startTime + entry.time;
                return Object.assign( {}, copy, { startTime, endTime } )
            };

            const stripNonEvents = entry => !/paint/.test( entry.type );

            const collapse = function ( accum, entry ) {
                // console.log( 'accum', JSON.stringify( accum, null, 4 ) );

                const last = accum.pop() || {
                            type: 'span',
                            startTime: entry.startTime,
                            responseEnd: entry.responseEnd,
                            duration: entry.duration
                        };
                // console.log( 'last', JSON.stringify( last, null, 4 ) );
                // console.log( 'entry', JSON.stringify( entry, null, 4 ) );

                // Is a gap identified? Is it a gap or first entry?
                if ( entry.startTime > last.responseEnd ) {
                    accum.push( last );
                    accum.push( {
                        type: 'gap',
                        startTime: last.responseEnd,
                        responseEnd: entry.startTime,
                        duration: entry.startTime - last.responseEnd
                    } )
                }
                if ( entry.responseEnd > last.responseEnd ) {
                    accum.push( Object.assign( last, {
                        responseEnd: entry.responseEnd,
                        duration: entry.responseEnd - last.startTime
                    } ) );
                } else {
                    accum.push( last );
                }

                return accum
            };

            const iframeEntries = function () {
                const iframeCollection = document.getElementsByTagName( 'iframe' );
                const iframes = Array.from( iframeCollection )
                        .filter( iframe => {
                            // Filter out iframes from a different host
                            // DOMException: Blocked a frame from accessing a cross-origin frame.
                            try {
                                iframe.contentWindow.performance;
                                return true;
                            } catch ( e ) {
                                console.log( e );
                                return false;
                            }
                        } );

                console.log( 'Number of iframes inuse', iframes.length );

                return iframes
                        .map( iframe => iframe.contentWindow.performance.getEntries() )
                        .reduce( ( a, b ) => {
                            return a.concat( b )
                        }, [] )
            };

            const report = function () {
                const entries = perf.getEntries().concat( iframeEntries() );
                const timing = perf.timing.toJSON();
                const summary = {};

                summary.entryPage = 'Unknown';
                const entryPages = entries.filter( entry => entry.entryType === 'navigation' );
                if ( entryPages.length ) {
                    summary.entryPage = entryPages[ 0 ].name;
                }

                const paintEntry = entries.filter( entry => entry.name === 'first-paint' );
                if ( paintEntry.length ) {
                    summary.firstPaint = paintEntry[ 0 ].startTime;
                }

                const events = entries
                        .filter( stripNonEvents )
                        .map( addAdditionalContext );

                const start = timing.navigationStart;
                summary.pageLoad = timing.loadEventEnd - start;
                summary.domContentLoaded = timing.domContentLoadedEventEnd - start;
                summary.resourceType = events.reduce( sizeByResourceType, {} );
                // summary.initiatorType = events.reduce( sizeByInitiatorType, {} );

                summary.entryCount = events.length;
                summary.encodedBodySize = events.reduce( byProp( 'encodedBodySize' ), 0 );
                summary.decodedBodySize = events.reduce( byProp( 'decodedBodySize' ), 0 );
                summary.transferSize = events.reduce( byProp( 'transferSize' ), 0 );
                summary.blockingTime = events.reduce( byProp( 'blockingTime' ), 0 );

                summary.timeToFirstInteraction = gapTime( events, 5000 );

                // console.log( 'Perf Entries\n', JSON.stringify( entries ) );
                // console.log( 'Perf Timings\n', JSON.stringify( timing ) );
                // console.log( 'Summary', JSON.stringify( summary, null, 4 ) );
                return summary;
            };

            const harReport = harEntries => {
                // Prep har entries by normalizing startTime and endTime properties
                const entries = harEntries.map( addAdditionalContext );

                const summary = {};
                summary.count = entries.length;
                summary.transferSize = entries.reduce( byProp( 'response._transferSize' ), 0 );
                summary.blockedTime = entries.reduce( byPropPositive( 'timings.blocked' ), 0 );
                summary.mime = entries.reduce( sizeByMimeType, {} );
                return summary;
            };

            return new Promise( ( resolve, reject ) => {
                const summary = {};
                summary.har = harReport( harEntries );
                chrome.devtools.inspectedWindow.eval(
                        "window.performance.timing.toJSON()",
                        function ( result, isException ) {
                            if ( isException ) reject( 'Failed to call Performance API' );
                            summary.timings = Object.assign( {}, result );
                            resolve( summary );
                        }
                );
            } );
        }

        const pieData = ( mimedata, prop ) => {
            var data = new google.visualization.DataTable();
            data.addColumn( 'string', 'Task' );
            data.addColumn( 'number', 'Hours per Day' );
            const iterator = Object.entries( mimedata );
            for ( let e of iterator ) {
                const [mimetype, data] = e;
                data.addRow( [ mimetype, data[ prop ] ] );
            }
            return data;
        };


        const requests = [];

        const summarize = gap => event => {
            dynReport( requests )
                    .then( result => {
                        main.innerHTML = `<pre>${JSON.stringify( result )}</pre>`;
                        mimeTransfer.draw( pieData( result.har.mime, 'transferSize' ), null );
                        mimeTime.draw( pieData( result.har.mime, 'time' ), null );
                    } )
                    .catch( message => {
                        main.innerHTML = `<h3>${message}</h3>`;
                    } );
        };

        chrome.devtools.network.onRequestFinished.addListener( request => {
            // console.log( 'Request', request );
            requests.push( request );
        } );

        var data = new google.visualization.DataTable();
        data.addColumn( 'string', 'Task' );
        data.addColumn( 'number', 'Hours per Day' );
        data.addRow( [ 'Work', 11 ] );
        data.addRow( [ 'Eat', 11 ] );
        data.addRow( [ 'Commute', 11 ] );
        data.addRow( [ 'Watch TV', 11 ] );
        data.addRow( [ 'Sleep', 11 ] );

        var options = {
            "title": "My Daily Activities"
        };

        var chart = new google.visualization.PieChart( document.getElementById( 'mimetransfer' ) );
        chart.draw( data );

        const mimeTransfer = new google.visualization.PieChart( document.getElementById( 'mimetransfer' ) );
        const mimeTime = new google.visualization.PieChart( document.getElementById( 'mimetime' ) );

        const main = document.getElementById( 'main' );
        const inpGap = document.getElementById( 'gap' );
        const btnSummary = document.getElementById( 'summary' );
        btnSummary.addEventListener( 'click', summarize( parseInt( inpGap.value ) ) )
    };

    google.charts.load( 'current', { packages: [ 'corechart' ] } );
    google.charts.setOnLoadCallback( chartLoaded );
} );

