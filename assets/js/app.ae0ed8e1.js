(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"assets/js/"+({file:"file",markdown:"markdown",main:"main",prismjs:"prismjs"}[e]||e)+"."+{file:"6346b010",markdown:"bd2c0773",main:"195329e5",prismjs:"547e78c2"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={main:1,prismjs:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="assets/css/"+({file:"file",markdown:"markdown",main:"main",prismjs:"prismjs"}[e]||e)+"."+{file:"31d6cfe0",markdown:"31d6cfe0",main:"30f75e6c",prismjs:"fb887072"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],f=s.getAttribute("data-href");if(f===r||f===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],l.parentNode.removeChild(l),n(o)},l.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1227:function(e,t,n){},1889:function(e,t,n){"use strict";n.r(t),n.d(t,"definedFlags",(function(){return c})),n.d(t,"destructors",(function(){return o})),n.d(t,"inputBinds",(function(){return i})),n.d(t,"addInputBinds",(function(){return u})),n.d(t,"chopStr",(function(){return s})),n.d(t,"sleep",(function(){return f}));n("4160"),n("c975"),n("baa5"),n("b64b"),n("d3b7"),n("07ac"),n("1e25"),n("eee7"),n("159b"),n("96cf");var r=n("1da1"),a=n("4c55"),c=Object.values(a["EFlag"]),o=[],i={};function u(e){Object.keys(e).forEach((function(t){i[t]=e[t]}))}function s(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=r?e.lastIndexOf(t):e.indexOf(t);if(a<0)return[e,null];var c=e.substring(0,a),o=e.substring(a+t.length);return n&&(c=c.trimEnd(),o=o.trimStart()),[c,o]}function f(e){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}},"35f0":function(e,t,n){"use strict";n.r(t),n.d(t,"isExternalLink",(function(){return o})),n.d(t,"checkLinkPath",(function(){return i})),n.d(t,"shortenPath",(function(){return u})),n.d(t,"baseUrl",(function(){return s})),n.d(t,"publicPath",(function(){return f})),n.d(t,"indexPath",(function(){return d})),n.d(t,"cdnUrl",(function(){return l})),n.d(t,"homePath",(function(){return h})),n.d(t,"disableCDN",(function(){return m})),n.d(t,"enableCDN",(function(){return v})),n.d(t,"addBaseUrl",(function(){return g})),n.d(t,"cleanBaseUrl",(function(){return b})),n.d(t,"buildHash",(function(){return y})),n.d(t,"buildQueryContent",(function(){return w})),n.d(t,"buildQueryFlagUrl",(function(){return j})),n.d(t,"parseHash",(function(){return O})),n.d(t,"changeAnchor",(function(){return k})),n.d(t,"changeQueryContent",(function(){return x})),n.d(t,"parseRoute",(function(){return E})),n.d(t,"parseQuery",(function(){return C})),n.d(t,"formatQuery",(function(){return I})),n.d(t,"returnHome",(function(){return S}));n("99af"),n("4160"),n("a15b"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("8a79"),n("3ca3"),n("5319"),n("841c"),n("1276"),n("2ca0"),n("498a"),n("18a5"),n("159b"),n("ddb0"),n("2b3d");var r=n("bb76"),a=n("4397"),c=n("1889");function o(e){try{return!!new URL(e).host}catch(t){return!1}}function i(e){return e.endsWith(".md")?e:e.endsWith("/")?e+"index.md":""}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"md",n="index.".concat(t);return e===n?"":e.endsWith("/".concat(n))?e.replace(new RegExp("index\\.".concat(t,"$")),""):e}var s="/",f="/",d="index.html",l="",h=f+u(d,"html"),p=!!a["getItem"]("noCDN");function m(){p=!0,a["setItem"]("noCDN",String(!0))}function v(){p=!1,a["removeItem"]("noCDN")}function g(e){return e.startsWith("/")?"/"===e?h:p?"/"!==f?f+e.substr(1):e:!l&&r["config"].cdn?r["config"].cdn+e.substr(1):"/"!==s?s+e.substr(1):e:e}function b(e){return"/"!==s&&e.startsWith(s)?e.substr(s.length-1):r["config"].cdn&&e.startsWith(r["config"].cdn)?e.substr(r["config"].cdn.length-1):"/"!==f&&e.startsWith(f)?e.substr(f.length-1):e===h?"/":e}function y(e){var t=e.path,n=e.anchor,r=e.query,a="#".concat(t);return n&&(a+="#".concat(n)),r&&(a+="?".concat(r)),a}function w(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="content=".concat(encodeURIComponent(e));return t?y({path:r["shortBaseFiles"].search,anchor:"",query:n}):n}function j(e,t){return w("@".concat(e,": ").concat(t),!0)}function O(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r["config"].paths.index,a="",o="";if(!e.startsWith("#/"))return{path:t?u(n):n,anchor:a,query:o};n=e.substr(1);var i=Object(c["chopStr"])(n,"?",!1);return null!==i[1]&&(n=i[0],o=i[1]),i=Object(c["chopStr"])(n,"#",!1),null!==i[1]&&(n=i[0],a=i[1]),n.endsWith("/")?t||(n+="index.md"):t&&(n=u(n)),{path:n,anchor:a,query:o}}function k(e){var t=O(location.hash,!0),n=t.path,r=t.query;location.hash=y({path:n,anchor:e,query:r})}function x(e){var t=e?w(e):"",n=O(location.hash,!0),r=n.path,a=n.anchor;location.hash=y({path:r,anchor:a,query:t})}function E(e){var t=e.path;return t.endsWith("/")&&(t+="index.html"),t==="/".concat(d)?O(e.hash):(t.endsWith(".html")&&(t=t.replace(/\.html$/,".md")),{path:t,anchor:"",query:""})}function C(e){var t={};return e.split("&").forEach((function(e){var n=Object(c["chopStr"])(e,"=",!1);if(null!==n[1]){var r=decodeURIComponent(n[0]).trim();r&&(t[r]=decodeURIComponent(n[1]).trim())}else e=decodeURIComponent(e).trim(),e&&(t[e]=null)})),t}function I(e){for(var t=[],n=0,r=Object.keys(e);n<r.length;n++){var a=r[n],c=a.trim();if(c){c=encodeURIComponent(c);var o=e[a];null!==o?t.push("".concat(c,"=").concat(encodeURIComponent(o.trim()))):t.push(c)}}return t.join("&")}function S(){location.hash&&(location.hash=r["homeHash"])}},4397:function(e,t,n){"use strict";n.r(t),n.d(t,"getItem",(function(){return a})),n.d(t,"setItem",(function(){return c})),n.d(t,"removeItem",(function(){return o}));var r="v-no".concat("/");function a(e){return localStorage.getItem(r+e)}function c(e,t){localStorage.setItem(r+e,t)}function o(e){localStorage.removeItem(r+e)}},"4c55":function(e,t,n){"use strict";n.r(t),n.d(t,"EFlag",(function(){return r})),n.d(t,"EMark",(function(){return a})),n.d(t,"EEvent",(function(){return c})),n.d(t,"EIcon",(function(){return o}));var r,a,c,o;n("fb6a"),n("9911");(function(e){e["title"]="title",e["tags"]="tags",e["updated"]="updated",e["cover"]="cover",e["times"]="times",e["startDate"]="startDate",e["endDate"]="endDate",e["creator"]="creator",e["updater"]="updater"})(r||(r={})),function(e){e["redirect"]="redirect",e["noCommon"]="noCommon",e["toc"]="toc",e["list"]="list",e["slice"]="slice",e["input"]="input",e["result"]="result",e["number"]="number",e["count"]="count",e["time"]="time"}(a||(a={})),function(e){e["appCreated"]="appCreated",e["mainCreated"]="mainCreated",e["mainShown"]="mainShown",e["articleCreated"]="articleCreated",e["htmlChanged"]="htmlChanged",e["rendered"]="rendered",e["searchCompleted"]="searchCompleted",e["toggleDark"]="toggleDark",e["toggleZen"]="toggleZen",e["toTop"]="toTop"}(c||(c={})),function(e){e["link"]="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z",e["backlink"]="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",e["external"]="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z",e["sync"]="M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z"}(o||(o={}))},"525d":function(e,t,n){"use strict";n("1227")},"72db":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("b64b");var r=n("ade3"),a=n("53ca");function c(e){return window[e]}function o(e,t){window[e]=t}function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=c("vno");n||(n={},o("vno",n));for(var i=0,u=Object.keys(e);i<u.length;i++){var s=u[i],f=e[s];if(t){var d=n[s];void 0===d?(d={},n[s]=d):"object"!==Object(a["a"])(d)&&(d=Object(r["a"])({},s,d),n[s]=d),Object.assign(d,f)}else n[s]=f}}},8964:function(e,t,n){"use strict";n.r(t),n.d(t,"cleanEventListenerDict",(function(){return u})),n.d(t,"addEventListener",(function(){return s})),n.d(t,"dispatchEvent",(function(){return f})),n.d(t,"removeClass",(function(){return l})),n.d(t,"scroll",(function(){return p})),n.d(t,"getIcon",(function(){return m})),n.d(t,"getSyncSpan",(function(){return v})),n.d(t,"getQueryTagLinks",(function(){return g})),n.d(t,"createList",(function(){return y}));n("99af"),n("4160"),n("c975"),n("a434"),n("5377"),n("159b"),n("96cf");var r=n("1da1"),a=n("4c55"),c=n("35f0"),o=n("1889"),i={};function u(){i={}}function s(e,t,n){var r=i[t];if(void 0===r)return r=[[e],[n]],i[t]=r,void e.addEventListener(t,n);var a=r[0].indexOf(e);a>=0?(e.removeEventListener(t,r[1][a]),r[1].splice(a,1,n)):(r[0].push(e),r[1].push(n)),e.addEventListener(t,n)}function f(e,t,n){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=3;break}return e.next=3,Object(o["sleep"])(r);case 3:return e.abrupt("return",document.dispatchEvent(new CustomEvent(t,{detail:n})));case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function l(e,t){t&&e.classList.remove(t),0===e.classList.length&&e.removeAttribute("class")}var h=document.documentElement;function p(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];h.style.scrollBehavior=t?"smooth":"auto",setTimeout((function(){return scrollTo(0,e)}),0)}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="'.concat(t,'" height="').concat(n,'"><path fill-rule="evenodd" d="').concat(e,'"></path></svg>')}function v(e){return"<span".concat(e?' id="'.concat(e,'"'):"",' class="sync">').concat(m(a["EIcon"].sync),"</span>")}function g(e){var t=[],n=0,r=e.indexOf("/");while(r>=0)r+=n,t.push([Object(c["buildQueryFlagUrl"])(a["EFlag"].tags,e.substring(0,r)),e.substring(n,r)]),n=r+1,r=e.substring(n).indexOf("/");return t.push([Object(c["buildQueryFlagUrl"])(a["EFlag"].tags,e),n>0?e.substring(n):e]),t}function b(e){var t=document.createElement("div");if(t.classList.add("bar"),e.tags&&e.tags.forEach((function(e){var n=document.createElement("code");n.classList.add("item-tag"),g(e).forEach((function(e){var t=document.createElement("a");t.href=e[0],t.innerText=e[1],n.append(t)})),t.append(n)})),e.startDate){var n=document.createElement("code");n.classList.add("item-date"),n.innerText=e.startDate,t.append(n)}if(t.childElementCount>0){var r=document.createElement("span");return r.classList.add("filler"),[r,t]}return null}function y(e,t){if(!t){t=document.createElement("li");var n=document.createElement("a");n.href="#".concat(Object(c["shortenPath"])(e.path)),n.innerText=e.flags.title,t.append(n)}if(t.classList.add("article"),e.isError)return t;var r=b(e.flags);return r&&(t.append(r[0]),t.append(r[1])),t}h.style.scrollBehavior="smooth"},"8ef8":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return p}));n("d3b7"),n("96cf");var r,a,c,o,i=n("1da1");function u(){return s.apply(this,arguments)}function s(){return s=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=4;break}return e.next=3,n.e("file").then(n.bind(null,"b269"));case 3:r=e.sent;case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return d.apply(this,arguments)}function d(){return d=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=4;break}return e.next=3,Promise.all([n.e("file"),n.e("markdown")]).then(n.bind(null,"ed6f"));case 3:a=e.sent;case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function l(){return h.apply(this,arguments)}function h(){return h=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c){e.next=4;break}return e.next=3,n.e("file").then(n.bind(null,"0663"));case 3:c=e.sent;case 4:return e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function p(){return m.apply(this,arguments)}function m(){return m=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o){e.next=4;break}return e.next=3,n.e("prismjs").then(n.bind(null,"92f4"));case 3:o=e.sent;case 4:return e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}},b00f:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return c}));var r=n("35f0"),a=n("2b0e"),c=a["a"].observable({initing:!0,filePath:"",anchor:"",queryStr:"",homePath:r["homePath"]})},bb76:function(e,t,n){"use strict";n.r(t),n.d(t,"getSelectConf",(function(){return i})),n.d(t,"config",(function(){return u})),n.d(t,"confList",(function(){return s})),n.d(t,"enableMultiConf",(function(){return f})),n.d(t,"baseFiles",(function(){return d})),n.d(t,"shortBaseFiles",(function(){return l})),n.d(t,"homeHash",(function(){return h}));n("d81d"),n("b64b"),n("ac1f"),n("841c");var r=n("35f0"),a=n("4397");function c(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var a=r[n];t[a]instanceof Object&&Object.assign(t[a],c(e[a]||{},t[a]))}return Object.assign(e||{},t),e}var o="";function i(){return o}var u=function(){var e=JSON.parse(JSON.stringify(vnoConfig));if(!e.defaultConf||!e.multiConf)return e;var t=a["getItem"]("conf");if(t){var n=e.multiConf[t];if(n)return o=t,c(e,JSON.parse(JSON.stringify(n))),e;a["removeItem"]("conf")}var r=e.multiConf[e.defaultConf];return r?(o=e.defaultConf,c(e,JSON.parse(JSON.stringify(r))),e):e}(),s=function(){var e=u.multiConf;if(!e)return null;var t=Object.keys(e).sort(),n=t.map((function(t){return e[t].alias||t}));return[t,n]}(),f=!!(o&&s&&s[0].length>1),d=[u.paths.index,u.paths.readme,u.paths.archive,u.paths.category,u.paths.search];u.paths.common&&d.push(u.paths.common);var l={index:Object(r["shortenPath"])(u.paths.index),readme:Object(r["shortenPath"])(u.paths.readme),archive:Object(r["shortenPath"])(u.paths.archive),category:Object(r["shortenPath"])(u.paths.category),search:Object(r["shortenPath"])(u.paths.search)},h=Object(r["buildHash"])({path:l.index,anchor:"",query:""})},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7");var r=n("b00f"),a=n("2b0e"),c=n("8c4f");a["a"].use(c["a"]);var o=function(){return n.e("main").then(n.bind(null,"615d")).then((function(e){return r["state"].initing=!1,e}))},i=new c["a"]({mode:"history",base:"/",routes:[{path:"*",name:"main",component:o}]}),u=i,s=function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"top"}},[r("div",[t.favicon?r("img",{attrs:{src:t.favicon,alt:"favicon"}}):t._e(),r("a",{attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v(t._s(t.config.siteName||t.config.messages.home))]),r("span",{staticClass:"filler"}),r("a",{attrs:{href:"#"+t.shortBaseFiles.readme}}),r("a",{attrs:{href:"#"+t.shortBaseFiles.archive}}),r("a",{attrs:{href:"#"+t.shortBaseFiles.category}}),r("a",{attrs:{href:"#"+t.shortBaseFiles.search}}),t.enableMultiConf?r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectConf,expression:"selectConf"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));t.selectConf=e.target.multiple?n:n[0]}}},t._l(t.confList[0],(function(e,n){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(t.confList[1][n]))])})),0):t._e()])]),t.initing?r("div",{staticClass:"lds-ellipsis initing"},t._l(4,(function(e){return r("div",{key:e})})),0):r("router-view"),r("Gadget",{attrs:{addToKeyInput:function(t){return e.keyInput+=t}}})],1)},f=[],d=(n("caad"),n("b64b"),n("ac1f"),n("8a79"),n("5319"),n("d4ec")),l=n("bee2"),h=n("262e"),p=n("2caf"),m=n("9ab4"),v=(n("498a"),n("96cf"),n("1da1")),g=n("5530"),b=n("bb76"),y=n("8964"),w=n("4c55"),j=n("35f0"),O=n("eb5f"),k=n("4397"),x=n("1889"),E=n("72db"),C=n("8ef8"),I=n("1b40");function S(){Object(E["a"])(Object(g["a"])(Object(g["a"])({VPD:I,Vue:I["Vue"],version:"1.2.8",destructors:x["destructors"],addInputBinds:x["addInputBinds"],sleep:x["sleep"]},w),{},{config:b,element:y,enums:w,path:j,regexp:O,storage:k,store:r,utils:x})),Object(C["a"])().then((function(e){return Object(E["a"])({file:e})})),Object(C["b"])().then((function(e){Object(E["a"])({markdown:e,markdownIt:e.markdownIt,renderMD:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(n,r,a){var c,o,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(c=i.length>3&&void 0!==i[3]&&i[3],o=i.length>4?i[4]:void 0,a=a.trim(),a){t.next=5;break}return t.abrupt("return","");case 5:if(a=e.updateInlineScript(n,r,a,c,o),a){t.next=8;break}return t.abrupt("return","");case 8:return t.next=10,e.updateSnippet(a,[n],o);case 10:if(a=t.sent,a){t.next=13;break}return t.abrupt("return","");case 13:return t.next=15,e.updateList(a);case 15:return a=t.sent,t.abrupt("return",a?e.renderMD(a):"");case 17:case"end":return t.stop()}}),t)})));function n(e,n,r){return t.apply(this,arguments)}return n}(),updateDom:e.updateDom})})),Object(C["d"])().then((function(e){Object(E["a"])({utils:e},!0),Object(E["a"])({axios:e.axios,dayjs:e.dayjs,waitFor:e.waitFor,waitForEvent:e.waitForEvent,addEventListener:e.addEventListener,callAndListen:e.callAndListen,encodeParam:e.encodeParam,getMessage:e.getMessage,parseDate:e.parseDate,formatDate:e.formatDate})}))}var R=function(){return n.e("main").then(n.bind(null,"fead"))},P=function(e){Object(h["a"])(n,e);var t=Object(p["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.keyInput="",e.selectConf=Object(b["getSelectConf"])(),e}return Object(l["a"])(n,[{key:"initing",get:function(){return r["state"].initing}},{key:"homePath",get:function(){return r["state"].homePath}},{key:"config",get:function(){return b["config"]}},{key:"confList",get:function(){return b["confList"]}},{key:"enableMultiConf",get:function(){return b["enableMultiConf"]}},{key:"shortBaseFiles",get:function(){return b["shortBaseFiles"]}},{key:"favicon",get:function(){return this.config.paths.favicon?Object(j["addBaseUrl"])(this.config.paths.favicon):""}},{key:"created",value:function(){var e=this;S(),Object(E["a"])({appSelf:this,selectConf:this.selectConf});var t=document.querySelector('link[rel="icon"]');this.favicon?t.href=this.favicon:t&&t.remove(),Object(x["addInputBinds"])({home:this.returnHome,Backspace:function(){e.keyInput=e.keyInput.replace(/.?Backspace$/,"")}}),this.$watch("keyInput",(function(){for(var t=0,n=Object.keys(x["inputBinds"]);t<n.length;t++){var r=n[t];if(e.keyInput.endsWith(r)){x["inputBinds"][r]();break}}})),this.$watch("selectConf",(function(){k["setItem"]("conf",e.selectConf),location.href=e.homePath})),Object(y["dispatchEvent"])(w["EEvent"].appCreated,(new Date).getTime())}},{key:"mounted",value:function(){var e=this;document.addEventListener("keydown",(function(t){if(!document.activeElement||!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){var n=e.keyInput+t.key;n.length>20&&(n=n.substr(10)),e.keyInput=n}}))}},{key:"returnHome",value:function(){Object(j["returnHome"])()}}]),n}(I["Vue"]);P=Object(m["a"])([Object(I["Component"])({components:{Gadget:R}})],P);var L=P,D=L,B=(n("525d"),n("2877")),A=Object(B["a"])(D,s,f,!1,null,null,null),F=A.exports;a["a"].config.productionTip=!1,new a["a"]({router:u,render:function(e){return e(F)}}).$mount("#app")},eb5f:function(e,t,n){"use strict";n.r(t),n.d(t,"getHeadingRegExp",(function(){return a})),n.d(t,"getLinkRegExp",(function(){return o})),n.d(t,"getWrapRegExp",(function(){return i})),n.d(t,"getMarkRegExp",(function(){return u})),n.d(t,"getSnippetRegExp",(function(){return s})),n.d(t,"getAnchorRegExp",(function(){return f})),n.d(t,"getParamRegExp",(function(){return d}));n("99af"),n("4d63"),n("ac1f"),n("25f0");function r(e,t){return" {0,3}(#{".concat(e,",").concat(t,"})")}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=arguments.length>2?arguments[2]:void 0;return new RegExp("^".concat(r(e,t),"(?: \\s*(.+?))?$"),n)}function c(e){return"\\(\\s*(".concat(e?"/":"",".*?)(?:\\s+[\"'].*?[\"'])?\\s*\\)")}function o(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,a="\\[(.*?)]".concat(c(e));return t&&(a="!".concat(a)),n&&(a="^".concat(a,"$")),new RegExp(a,r)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2?arguments[2]:void 0;return new RegExp("".concat(e,"\\s*(.*?)\\s*").concat(t),n)}function u(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"im",r="\\[".concat(e).concat(i("(?:#",")?").source,"]");return t&&(r="^".concat(r,"$")),new RegExp(r,n)}function s(e){return new RegExp("^(?:".concat(r(2,6)," \\s*(\\+ )?)?\\s*").concat(u("\\+",!1).source).concat(c(!0),"$"),e)}function f(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,r=arguments.length>3?arguments[3]:void 0,a="h[".concat(t,"-").concat(n,"]-\\d+");return e&&(a="^".concat(a,"$")),new RegExp(a,r)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"g";return i("{{","}}",e)}}});