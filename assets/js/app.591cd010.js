(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"assets/js/"+({file:"file",markdown:"markdown",main:"main",prismjs:"prismjs"}[e]||e)+"."+{file:"b27da4c1",markdown:"96d1afb4",main:"3b029caf",prismjs:"80f98e6f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={prismjs:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="assets/css/"+({file:"file",markdown:"markdown",main:"main",prismjs:"prismjs"}[e]||e)+"."+{file:"31d6cfe0",markdown:"31d6cfe0",main:"31d6cfe0",prismjs:"5f1b88a4"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],f=s.getAttribute("data-href");if(f===r||f===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],l.parentNode.removeChild(l),n(o)},l.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1227:function(e,t,n){},1889:function(e,t,n){"use strict";n.r(t),n.d(t,"snippetMark",(function(){return a})),n.d(t,"destructors",(function(){return c})),n.d(t,"inputBinds",(function(){return o})),n.d(t,"addInputBinds",(function(){return i})),n.d(t,"chopStr",(function(){return u}));n("4160"),n("c975"),n("b64b"),n("1e25"),n("eee7"),n("159b");var r=n("eb5f");n.d(t,"getHeadingPattern",(function(){return r["b"]})),n.d(t,"getLinkPathPattern",(function(){return r["c"]})),n.d(t,"getSnippetRegExp",(function(){return r["e"]})),n.d(t,"getAnchorRegExp",(function(){return r["a"]})),n.d(t,"getMarkRegExp",(function(){return r["d"]}));var a="--8<--",c=[],o={};function i(e){Object.keys(e).forEach((function(t){o[t]=e[t]}))}function u(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e.indexOf(t);if(r<0)return[e,null];var a=e.substring(0,r),c=e.substring(r+t.length);return n&&(a=a.trimEnd(),c=c.trimStart()),[a,c]}},"35f0":function(e,t,n){"use strict";n.r(t),n.d(t,"checkLinkPath",(function(){return c})),n.d(t,"shortenPath",(function(){return o})),n.d(t,"baseUrl",(function(){return i})),n.d(t,"publicPath",(function(){return u})),n.d(t,"indexPath",(function(){return s})),n.d(t,"cdnUrl",(function(){return f})),n.d(t,"homePath",(function(){return d})),n.d(t,"disableCDN",(function(){return h})),n.d(t,"enableCDN",(function(){return p})),n.d(t,"addBaseUrl",(function(){return m})),n.d(t,"cleanBaseUrl",(function(){return v})),n.d(t,"buildHash",(function(){return b})),n.d(t,"buildQueryContent",(function(){return g})),n.d(t,"buildQueryFlagUrl",(function(){return y})),n.d(t,"parseHash",(function(){return j})),n.d(t,"changeAnchor",(function(){return O})),n.d(t,"changeQueryContent",(function(){return k})),n.d(t,"parseRoute",(function(){return w})),n.d(t,"parseQuery",(function(){return C})),n.d(t,"formatQuery",(function(){return x})),n.d(t,"returnHome",(function(){return E}));n("99af"),n("4160"),n("a15b"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("8a79"),n("5319"),n("841c"),n("1276"),n("2ca0"),n("498a"),n("18a5"),n("159b");var r=n("bb76"),a=n("1889");function c(e){return e.endsWith(".md")?e:e.endsWith("/")?e+"index.md":""}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"md",n="index.".concat(t);return e===n?"":e.endsWith("/".concat(n))?e.replace(new RegExp("index\\.".concat(t,"$")),""):e}var i="/",u="/",s="index.html",f="",d=u+o(s,"html"),l=!!localStorage.getItem("noCDN");function h(){l=!0,localStorage.setItem("noCDN",String(!0))}function p(){l=!1,localStorage.removeItem("noCDN")}function m(e){return e.startsWith("/")?"/"===e?d:l?"/"!==u?u+e.substr(1):e:!f&&r["config"].cdn?r["config"].cdn+e.substr(1):"/"!==i?i+e.substr(1):e:e}function v(e){return"/"!==i&&e.startsWith(i)?e.substr(i.length-1):r["config"].cdn&&e.startsWith(r["config"].cdn)?e.substr(r["config"].cdn.length-1):"/"!==u&&e.startsWith(u)?e.substr(u.length-1):e===d?"/":e}function b(e){var t=e.path,n=e.anchor,r=e.query,a="#".concat(t);return n&&(a+="#".concat(n)),r&&(a+="?".concat(r)),a}function g(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="content=".concat(encodeURIComponent(e));return t?b({path:r["shortBaseFiles"].search,anchor:"",query:n}):n}function y(e,t){return g("@".concat(e,": ").concat(t),!0)}function j(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r["config"].paths.index,c="",i="";if(!e.startsWith("#/"))return{path:t?o(n):n,anchor:c,query:i};n=e.substr(1);var u=Object(a["chopStr"])(n,"?",!1);return null!==u[1]&&(n=u[0],i=u[1]),u=Object(a["chopStr"])(n,"#",!1),null!==u[1]&&(n=u[0],c=u[1]),n.endsWith("/")?t||(n+="index.md"):t&&(n=o(n)),{path:n,anchor:c,query:i}}function O(e){var t=j(location.hash,!0),n=t.path,r=t.query;location.hash=b({path:n,anchor:e,query:r})}function k(e){var t=e?g(e):"",n=j(location.hash,!0),r=n.path,a=n.anchor;location.hash=b({path:r,anchor:a,query:t})}function w(e){var t=e.path;return t.endsWith("/")&&(t+="index.html"),t==="/".concat(s)?j(e.hash):(t.endsWith(".html")&&(t=t.replace(/\.html$/,".md")),{path:t,anchor:"",query:""})}function C(e){var t={};return e.split("&").forEach((function(e){var n=Object(a["chopStr"])(e,"=",!1);if(null!==n[1]){var r=decodeURIComponent(n[0]).trim();r&&(t[r]=decodeURIComponent(n[1]).trim())}else e=decodeURIComponent(e).trim(),e&&(t[e]=null)})),t}function x(e){for(var t=[],n=0,r=Object.keys(e);n<r.length;n++){var a=r[n],c=a.trim();if(c){c=encodeURIComponent(c);var o=e[a];null!==o?t.push("".concat(c,"=").concat(encodeURIComponent(o.trim()))):t.push(c)}}return t.join("&")}function E(){location.hash&&(location.hash=r["homeHash"])}},"4c55":function(e,t,n){"use strict";n.r(t),n.d(t,"EFlag",(function(){return r})),n.d(t,"definedFlags",(function(){return i})),n.d(t,"EMark",(function(){return a})),n.d(t,"EIcon",(function(){return c})),n.d(t,"EEvent",(function(){return o}));var r;n("07ac"),n("9911");(function(e){e["title"]="title",e["tags"]="tags",e["updated"]="updated",e["cover"]="cover",e["times"]="times",e["startDate"]="startDate",e["endDate"]="endDate",e["creator"]="creator",e["updater"]="updater"})(r||(r={}));var a,c,o,i=Object.values(r);(function(e){e["redirect"]="redirect",e["toc"]="toc",e["list"]="list",e["input"]="input",e["result"]="result",e["number"]="number",e["count"]="count",e["time"]="time"})(a||(a={})),function(e){e["link"]="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z",e["backlink"]="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",e["external"]="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z",e["sync"]="M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z"}(c||(c={})),function(e){e["appCreated"]="appCreated",e["mainCreated"]="mainCreated",e["mainShown"]="mainShown",e["articleCreated"]="articleCreated",e["htmlChanged"]="htmlChanged",e["rendered"]="rendered",e["searchCompleted"]="searchCompleted",e["toggleDark"]="toggleDark",e["toggleZen"]="toggleZen",e["toTop"]="toTop"}(o||(o={}))},"525d":function(e,t,n){"use strict";n("1227")},"72db":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));n("b64b");var r=n("ade3"),a=n("53ca");function c(e){return window[e]}function o(e,t){window[e]=t}function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=c("vno");n||(n={},o("vno",n));for(var i=0,u=Object.keys(e);i<u.length;i++){var s=u[i],f=e[s];if(t){var d=n[s];void 0===d?(d={},n[s]=d):"object"!==Object(a["a"])(d)&&(d=Object(r["a"])({},s,d),n[s]=d),Object.assign(d,f)}else n[s]=f}}},8964:function(e,t,n){"use strict";n.r(t),n.d(t,"cleanEventListenerDict",(function(){return i})),n.d(t,"addEventListener",(function(){return u})),n.d(t,"dispatchEvent",(function(){return s})),n.d(t,"removeClass",(function(){return d})),n.d(t,"scroll",(function(){return h})),n.d(t,"getIcon",(function(){return p})),n.d(t,"getSyncSpan",(function(){return m})),n.d(t,"getQueryTagLinks",(function(){return v})),n.d(t,"createList",(function(){return g}));n("99af"),n("4160"),n("c975"),n("a434"),n("d3b7"),n("5377"),n("159b"),n("96cf");var r=n("1da1"),a=n("4c55"),c=n("35f0"),o={};function i(){o={}}function u(e,t,n){var r=o[t];if(void 0===r)return r=[[e],[n]],o[t]=r,void e.addEventListener(t,n);var a=r[0].indexOf(e);a>=0?(e.removeEventListener(t,r[1][a]),r[1].splice(a,1,n)):(r[0].push(e),r[1].push(n)),e.addEventListener(t,n)}function s(e,t,n){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=3;break}return e.next=3,new Promise((function(e){return setTimeout(e,r)}));case 3:return e.abrupt("return",document.dispatchEvent(new CustomEvent(t,{detail:n})));case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function d(e,t){t&&e.classList.remove(t),0===e.classList.length&&e.removeAttribute("class")}var l=document.documentElement;function h(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.style.scrollBehavior=t?"smooth":"auto",setTimeout((function(){return scrollTo(0,e)}),0)}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="'.concat(t,'" height="').concat(n,'"><path fill-rule="evenodd" d="').concat(e,'"></path></svg>')}function m(e){return"<span".concat(e?' id="'.concat(e,'"'):"",' class="sync">').concat(p(a["EIcon"].sync),"</span>")}function v(e){var t=[],n=0,r=e.indexOf("/");while(r>=0)r+=n,t.push([Object(c["buildQueryFlagUrl"])(a["EFlag"].tags,e.substring(0,r)),e.substring(n,r)]),n=r+1,r=e.substring(n).indexOf("/");return t.push([Object(c["buildQueryFlagUrl"])(a["EFlag"].tags,e),n>0?e.substring(n):e]),t}function b(e){var t=document.createElement("div");if(t.classList.add("bar"),e.tags&&e.tags.forEach((function(e){var n=document.createElement("code");n.classList.add("item-tag"),v(e).forEach((function(e){var t=document.createElement("a");t.href=e[0],t.innerText=e[1],n.append(t)})),t.append(n)})),e.startDate){var n=document.createElement("code");n.classList.add("item-date"),n.innerText=e.startDate,t.append(n)}if(t.childElementCount>0){var r=document.createElement("span");return r.classList.add("filler"),[r,t]}return null}function g(e,t){var n=e.path,r=e.flags,a=e.isError;if(!t){t=document.createElement("li");var o=document.createElement("a");o.href="#".concat(Object(c["shortenPath"])(n)),o.innerText=r.title,t.append(o)}if(t.classList.add("article"),a)return t;var i=b(r);return i&&(t.append(i[0]),t.append(i[1])),t}l.style.scrollBehavior="smooth"},"8ef8":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return p}));n("d3b7"),n("96cf");var r,a,c,o,i=n("1da1");function u(){return s.apply(this,arguments)}function s(){return s=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=4;break}return e.next=3,n.e("file").then(n.bind(null,"b269"));case 3:r=e.sent;case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return d.apply(this,arguments)}function d(){return d=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=4;break}return e.next=3,Promise.all([n.e("file"),n.e("markdown")]).then(n.bind(null,"ed6f"));case 3:a=e.sent;case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function l(){return h.apply(this,arguments)}function h(){return h=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c){e.next=4;break}return e.next=3,n.e("file").then(n.bind(null,"0663"));case 3:c=e.sent;case 4:return e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function p(){return m.apply(this,arguments)}function m(){return m=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o){e.next=4;break}return e.next=3,n.e("prismjs").then(n.bind(null,"92f4"));case 3:o=e.sent;case 4:return e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}},b00f:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return c}));var r=n("35f0"),a=n("2b0e"),c=a["a"].observable({filePath:"",anchor:"",queryStr:"",homePath:r["homePath"]})},bb76:function(e,t,n){"use strict";n.r(t),n.d(t,"getSelectConf",(function(){return i})),n.d(t,"config",(function(){return u})),n.d(t,"confList",(function(){return s})),n.d(t,"enableMultiConf",(function(){return f})),n.d(t,"baseFiles",(function(){return d})),n.d(t,"shortBaseFiles",(function(){return l})),n.d(t,"homeHash",(function(){return h}));n("d81d"),n("b64b"),n("ac1f"),n("841c");var r=n("35f0"),a=n("72db");function c(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var a=r[n];t[a]instanceof Object&&Object.assign(t[a],c(e[a],t[a]))}return Object.assign(e||{},t),e}var o="";function i(){return o}var u=function(){var e=JSON.parse(JSON.stringify(Object(a["b"])("vnoConfig")));if(!e.defaultConf||!e.multiConf)return e;var t=localStorage.getItem("conf");if(t){var n=e.multiConf[t];if(n)return o=t,c(e,JSON.parse(JSON.stringify(n))),e;localStorage.removeItem("conf")}var r=e.multiConf[e.defaultConf];return r?(o=e.defaultConf,c(e,JSON.parse(JSON.stringify(r))),e):e}(),s=function(){var e=u.multiConf;if(!e)return null;var t=Object.keys(e).sort(),n=t.map((function(t){return e[t].alias||t}));return[t,n]}(),f=!!(o&&s&&s[0].length>1),d=[u.paths.index,u.paths.readme,u.paths.archive,u.paths.category,u.paths.search];u.paths.common&&d.push(u.paths.common);var l={index:Object(r["shortenPath"])(u.paths.index),readme:Object(r["shortenPath"])(u.paths.readme),archive:Object(r["shortenPath"])(u.paths.archive),category:Object(r["shortenPath"])(u.paths.category),search:Object(r["shortenPath"])(u.paths.search)},h=Object(r["buildHash"])({path:l.index,anchor:"",query:""})},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7");var r=n("2b0e"),a=n("8c4f");r["a"].use(a["a"]);var c=function(){return n.e("main").then(n.bind(null,"615d"))},o=new a["a"]({mode:"history",base:"/",routes:[{path:"*",name:"main",component:c}]}),i=o,u=function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"top"}},[r("div",[t.favicon?r("img",{attrs:{src:t.favicon,alt:"favicon"}}):t._e(),r("a",{attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v(t._s(t.config.siteName||t.config.messages.home))]),r("span",{staticClass:"filler"}),r("a",{attrs:{href:"#"+t.shortBaseFiles.readme}}),r("a",{attrs:{href:"#"+t.shortBaseFiles.archive}}),r("a",{attrs:{href:"#"+t.shortBaseFiles.category}}),r("a",{attrs:{href:"#"+t.shortBaseFiles.search}}),t.enableMultiConf?r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectConf,expression:"selectConf"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));t.selectConf=e.target.multiple?n:n[0]}}},t._l(t.confList[0],(function(e,n){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(t.confList[1][n]))])})),0):t._e()])]),r("router-view"),r("Gadget",{attrs:{addToKeyInput:function(t){return e.keyInput+=t}}})],1)},s=[],f=(n("caad"),n("b64b"),n("ac1f"),n("8a79"),n("5319"),n("d4ec")),d=n("bee2"),l=n("262e"),h=n("2caf"),p=n("9ab4"),m=(n("498a"),n("96cf"),n("1da1")),v=n("bb76"),b=n("8964"),g=n("4c55"),y=n("35f0"),j=n("b00f"),O=n("1889"),k=n("72db"),w=n("8ef8");function C(){Object(k["a"])({Vue:r["a"],version:"1.2.1",destructors:O["destructors"],addInputBinds:O["addInputBinds"],config:v,element:b,enums:g,path:y,store:j,utils:O}),Object(w["a"])().then((function(e){return Object(k["a"])({file:e})})),Object(w["b"])().then((function(e){Object(k["a"])({markdown:e,markdownIt:e.markdownIt,renderMD:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(n,r,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=r.trim(),r){t.next=3;break}return t.abrupt("return","");case 3:if(r=e.replaceInlineScript(n,r,a),r){t.next=6;break}return t.abrupt("return","");case 6:return t.next=8,e.updateSnippet(r,[n],a);case 8:if(r=t.sent,r){t.next=11;break}return t.abrupt("return","");case 11:return t.next=13,e.updateList(r);case 13:return r=t.sent,t.abrupt("return",r?e.renderMD(r):"");case 15:case"end":return t.stop()}}),t)})));function n(e,n,r){return t.apply(this,arguments)}return n}(),updateDom:e.updateDom})})),Object(w["d"])().then((function(e){Object(k["a"])({utils:e},!0),Object(k["a"])({axios:e.axios,dayjs:e.dayjs,parseDate:e.parseDate,formatDate:e.formatDate,waitFor:e.waitFor,addEventListener:e.addEventListener,callAndListen:e.callAndListen})}))}var x=n("1b40"),E=function(){return n.e("main").then(n.bind(null,"fead"))},S=function(e){Object(l["a"])(n,e);var t=Object(h["a"])(n);function n(){var e;return Object(f["a"])(this,n),e=t.apply(this,arguments),e.keyInput="",e.selectConf=Object(v["getSelectConf"])(),e}return Object(d["a"])(n,[{key:"created",value:function(){var e=this;C(),Object(k["a"])({appSelf:this});var t=document.querySelector('link[rel="icon"]');this.favicon?t.href=this.favicon:t&&t.remove(),Object(O["addInputBinds"])({home:this.returnHome,Backspace:function(){e.keyInput=e.keyInput.replace(/.?Backspace$/,"")}}),Object(b["dispatchEvent"])(g["EEvent"].appCreated,(new Date).getTime())}},{key:"mounted",value:function(){var e=this;document.addEventListener("keydown",(function(t){if(!document.activeElement||!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){var n=e.keyInput+t.key;n.length>20&&(n=n.substr(10)),e.keyInput=n}}))}},{key:"onKeyInputChanged",value:function(){for(var e=0,t=Object.keys(O["inputBinds"]);e<t.length;e++){var n=t[e];if(this.keyInput.endsWith(n)){O["inputBinds"][n]();break}}}},{key:"onSelectConfChanged",value:function(){localStorage.setItem("conf",this.selectConf),location.href=this.homePath}},{key:"returnHome",value:function(){Object(y["returnHome"])()}},{key:"homePath",get:function(){return j["state"].homePath}},{key:"config",get:function(){return v["config"]}},{key:"confList",get:function(){return v["confList"]}},{key:"enableMultiConf",get:function(){return v["enableMultiConf"]}},{key:"favicon",get:function(){return this.config.paths.favicon?Object(y["addBaseUrl"])(this.config.paths.favicon):""}},{key:"shortBaseFiles",get:function(){return v["shortBaseFiles"]}}]),n}(x["c"]);Object(p["a"])([Object(x["d"])("keyInput")],S.prototype,"onKeyInputChanged",null),Object(p["a"])([Object(x["d"])("selectConf")],S.prototype,"onSelectConfChanged",null),S=Object(p["a"])([Object(x["a"])({components:{Gadget:E}})],S);var I=S,P=I,L=(n("525d"),n("2877")),R=Object(L["a"])(P,u,s,!1,null,null,null),B=R.exports;r["a"].config.productionTip=!1,new r["a"]({router:i,render:function(e){return e(B)}}).$mount("#app")},eb5f:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i}));n("99af"),n("4d63"),n("ac1f"),n("25f0");function r(e,t){return" {0,3}(#{".concat(e,",").concat(t,"})")}function a(e){return"\\(\\s*(".concat(e?"/":"",".*?)(?:\\s+[\"'].*?[\"'])?\\s*\\)")}function c(e){return new RegExp("^(?:".concat(r(2,6)," )?\\s*\\[\\+(#.+)?]").concat(a(!0),"$"),e)}function o(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,r=arguments.length>3?arguments[3]:void 0,a="h[".concat(t,"-").concat(n,"]-\\d+");return e&&(a="^".concat(a,"$")),new RegExp(a,r)}function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"im",r="\\[".concat(e,"(?:#\\s*(.*?)\\s*)?]");return t&&(r="^".concat(r,"$")),new RegExp(r,n)}}});