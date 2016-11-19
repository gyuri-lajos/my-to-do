function negotiate(e,t,n){var r=Object.keys(t),i=e.headers[n||"accept"]||"*",a=MimeParse.bestMatch(r,i);return t[a]}var Q=require("q"),MimeParse=require("mimeparse"),Status=require("./status");exports.negotiate=negotiate,exports.Method=function(e,t){var n=Object.keys(e);return t||(t=Status.methodNotAllowed),function(r){var i=r.method;return Object.has(n,i)?Object.get(e,i)(r):t(r)}};var Negotiator=function(e,t,n){return function(r,i){var a=Object.keys(r);return i||(i=Status.notAcceptable),function(s){var o=s.headers[e]||"*",l=MimeParse.bestMatch(a,o);return s.terms=s.terms||{},s.terms[t]=l,Object.has(a,l)?Q.when(r[l](s),function(e){return null!==n&&e&&200===e.status&&e.headers&&(e.headers[t]=l),e}):i(s)}}};exports.ContentType=Negotiator("accept","content-type"),exports.Language=Negotiator("accept-language","language"),exports.Charset=Negotiator("accept-charset","charset"),exports.Encoding=Negotiator("accept-encoding","encoding"),exports.Host=function(e,t){var n=Object.keys(e).map(function(t){var n=t.split(":");return[t,n[0]||"*",n[1]||"*",e[t]]});return t||(t=Status.notAcceptable),function(e){for(var r=0;n.length>r;r++){var i=n[r],a=i[0],s=i[1],o=i[2],l=i[3];if(!("*"!==s&&s!==e.hostname||"*"!==o&&o!==""+e.port))return e.terms=e.terms||{},e.terms.host=a,l(e)}return t(e)}},exports.Select=function(e){return function(t){return Q.when(e(t),function(e){return e(t)})}};