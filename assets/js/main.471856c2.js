(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{"027e":function(e,t,n){"use strict";n("eab5")},"06c5":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var a=n("6b75");function r(e,t){if(e){if("string"===typeof e)return Object(a["a"])(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a["a"])(e,t):void 0}}},"1ffc":function(e,t,n){},2532:function(e,t,n){"use strict";var a=n("23e7"),r=n("5a34"),i=n("1d80"),s=n("577e"),c=n("ab13");a({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~s(i(this)).indexOf(s(r(e)),arguments.length>1?arguments[1]:void 0)}})},2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("6b75");function r(e){if(Array.isArray(e))return Object(a["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=n("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return r(e)||i(e)||Object(s["a"])(e)||c()}},3835:function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],s=!0,c=!1;try{for(n=n.call(e);!(s=(a=n.next()).done);s=!0)if(i.push(a.value),t&&i.length===t)break}catch(o){c=!0,r=o}finally{try{s||null==n["return"]||n["return"]()}finally{if(c)throw r}}return i}}var i=n("06c5");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){return a(e)||r(e,t)||Object(i["a"])(e,t)||s()}},3908:function(e,t,n){},"466d":function(e,t,n){"use strict";var a=n("d784"),r=n("825a"),i=n("50c4"),s=n("577e"),c=n("1d80"),o=n("8aa5"),l=n("14c3");a("match",(function(e,t,n){return[function(t){var n=c(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n):new RegExp(t)[e](s(n))},function(e){var a=r(this),c=s(e),u=n(t,a,c);if(u.done)return u.value;if(!a.global)return l(a,c);var h=a.unicode;a.lastIndex=0;var d,f=[],b=0;while(null!==(d=l(a,c))){var g=s(d[0]);f[b]=g,""===g&&(a.lastIndex=o(c,i(a.lastIndex),h)),b++}return 0===b?null:f}]}))},"615d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide-fade"}},[e.isShow?n("main",{class:e.isError?"error":null},[e.cover?n("div",{staticClass:"center",attrs:{id:"cover"}},[n("img",{attrs:{src:e.cover,alt:"cover"}})]):e._e(),e.isError?e._e():n("div",{staticClass:"bar",attrs:{id:"bar"}},[e.isIndexFile?e._e():n("code",{staticClass:"item-home"},[n("a",{attrs:{href:e.homePath},on:{click:function(t){return t.preventDefault(),e.returnHome.apply(null,arguments)}}},[e._v("«")])]),e.startDate?n("code",{staticClass:"item-date"},[e._v(e._s(e.isIndexFile?e.endDate:e.startDate))]):e._e(),e.creator?n("code",{staticClass:"item-creator"},[e._v(e._s(e.creator))]):e._e(),e._l(e.tags,(function(t,a){return n("code",{key:a,staticClass:"item-tag"},[e._l(e.getQueryTagLinks(t),(function(t,a){return[n("a",{key:a,attrs:{href:t.href}},[e._v(e._s(t.text))])]}))],2)})),e._l(e.otherFlags,(function(t,a){return n("code",{key:a,class:"item-"+t.key},[e._v(e._s(t.value))])})),n("code",{staticClass:"item-raw"},[n("a",{attrs:{href:e.rawFilePath,target:"_blank"}},[e._v(e._s(e.config.messages.raw))])])],2),!e.isRedirectPage&&e.redirectFrom[0].length>0?n("div",{attrs:{id:"redirect-from"}},[n("span",[e._v(e._s(e.config.messages.redirectFrom))]),e._l(e.redirectFrom[0],(function(t,a){return n("a",{key:a,attrs:{href:"#"+t}},[e._v(e._s(e.redirectFrom[1][a]))])}))],2):e._e(),n("header",[e._v(e._s(e.title))]),n("Article",{attrs:{fileData:e.fileData,query:e.query,redirectTo:e.redirectTo,showTime:e.showTime,title:e.title}}),e.isError?e._e():n("div",{attrs:{id:"backlinks"}},[e.hasLoadedBacklinks?e._e():n("span",{class:["icon",{sync:e.isLoadingBacklinks}],domProps:{innerHTML:e._s(e.isLoadingBacklinks?e.iconSync:e.iconBacklink)}}),e.isLoadingBacklinks?n("span",[e._v(e._s(e.config.messages.loading))]):e.hasLoadedBacklinks?[e.backlinkFiles.length>0?n("ul",e._l(e.backlinkFiles,(function(t,a){return n("li",{key:a,staticClass:"article",domProps:{innerHTML:e._s(e.getListHtml(t))}})})),0):n("span",[e._v(e._s(e.config.messages.noBacklinks))])]:n("a",{on:{click:e.loadBacklinks}},[e._v(e._s(e.config.messages.showBacklinks))])],2),e.isIndexFile?e._e():n("footer",[n("a",{staticClass:"home",attrs:{href:e.homePath},on:{click:function(t){return t.preventDefault(),e.returnHome.apply(null,arguments)}}},[e._v(e._s(e.config.messages.returnHome))]),!e.isError&&e.startDate?[n("span",{staticClass:"filler"}),n("span",{staticClass:"date"},[e._v(e._s(e.endDate!==e.startDate?e.endDate+e.lastUpdatedMessage:e.startDate))])]:e._e()],2)],1):e.initing?n("div",{staticClass:"lds-ellipsis initing"},e._l(4,(function(e){return n("div",{key:e})})),0):e._e()])},r=[],i=n("2909"),s=n("3835"),c=n("1da1"),o=n("d4ec"),l=n("bee2"),u=n("257e"),h=n("262e"),d=n("2caf"),f=n("ade3"),b=(n("96cf"),n("99af"),n("18a5"),n("ac1f"),n("841c"),n("caad"),n("2532"),n("159b"),n("8a79"),n("5377"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("4de4"),n("07ac"),n("5319"),n("4e82"),n("b64b"),n("a434"),n("9ab4")),g=n("bb76"),k=n("8964"),p=n("4c55"),m=n("35f0"),v=n("eb5f"),j=n("4397"),O=n("b00f"),y=n("1889"),T=n("72db"),w=n("8ef8"),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{class:e.isRendering?"rendering":null,domProps:{innerHTML:e._s(e.html)}})},E=[],_=(n("466d"),n("a15b"),n("1b40")),S=function(e){Object(h["a"])(n,e);var t=Object(d["a"])(n);function n(){var e;Object(o["a"])(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(f["a"])(Object(u["a"])(e),"fileData",void 0),Object(f["a"])(Object(u["a"])(e),"title",void 0),Object(f["a"])(Object(u["a"])(e),"query",void 0),Object(f["a"])(Object(u["a"])(e),"showTime",void 0),Object(f["a"])(Object(u["a"])(e),"redirectTo",void 0),Object(f["a"])(Object(u["a"])(e),"markdownTs",void 0),Object(f["a"])(Object(u["a"])(e),"startTime",0),Object(f["a"])(Object(u["a"])(e),"isRendering",!0),Object(f["a"])(Object(u["a"])(e),"renderData",""),Object(f["a"])(Object(u["a"])(e),"asyncResults",[]),Object(f["a"])(Object(u["a"])(e),"resultsBeforeRendered",[]),e}return Object(l["a"])(n,[{key:"filePath",get:function(){return O["state"].filePath}},{key:"anchor",get:function(){return O["state"].anchor}},{key:"queryContent",get:function(){return this.query.content||""}},{key:"isSearchFile",get:function(){return this.filePath===g["config"].paths.search}},{key:"html",get:function(){return this.renderData?this.markdownTs.renderMD(this.renderData)+"\x3c!-- "+this.showTime+" --\x3e":""}},{key:"created",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(T["a"])({articleSelf:this,isSearchFile:this.isSearchFile}),e.next=3,Object(w["b"])();case 3:this.markdownTs=e.sent,this.$watch((function(){return[t.fileData,t.showTime]}),(function(){return t.renderMD()})),this.$watch("html",(function(){t.$nextTick((function(){return Object(k["dispatchEvent"])(p["EEvent"].htmlChanged,(new Date).getTime())}))})),this.$watch("asyncResults",(function(){if(0!==t.asyncResults.length){var e=t.asyncResults[t.asyncResults.length-1];t.isRendering&&t.resultsBeforeRendered.push(e),t.markdownTs.updateAsyncScript(e)&&t.markdownTs.updateDom()}})),this.$watch("anchor",(function(){return t.scrollToAnchor()})),this.$watch("queryContent",(function(){return Object(m["changeQueryContent"])(t.queryContent)})),Object(k["dispatchEvent"])(p["EEvent"].articleCreated,(new Date).getTime()).then(),this.renderMD();case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"renderMD",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.fileData;if(this.isRendering=!0,this.startTime=(new Date).getTime(),t&&(t=this.markdownTs.updateInlineScript(this.filePath,this.title,t,!1,this.asyncResults)),t){var n=t.match(Object(v["getMarkRegExp"])(p["EMark"].redirect));if(n&&(n=n[1].match(/^(\/\S+\.md)(?:#(\S+))?(?:\?(\S+))?$/),n)){var a=n,r=Object(s["a"])(a,4),i=r[1],c=r[2],o=r[3];if(this.redirectTo(i,c,o))return}(this.isSearchFile&&this.queryContent||Object(v["getMarkRegExp"])(p["EMark"].list).test(t))&&Object(w["a"])().then((function(e){return e.getFiles()}));var l=Object(k["getSyncSpan"])(),u=t.replace(Object(v["getSnippetRegExp"])("gm"),l).replace(Object(v["getMarkRegExp"])("(".concat([p["EMark"].list,p["EMark"].input,p["EMark"].result].join("|"),")"),!0,"img"),l).replace(Object(v["getMarkRegExp"])("(".concat([p["EMark"].number,p["EMark"].count,p["EMark"].time].join("|"),")"),!1,"ig"),l);this.updateRenderData(u).then((function(){e.markdownTs.updateDom(),e.markdownTs.updateSnippet(t,[e.filePath],e.asyncResults).then((function(t){t?e.markdownTs.updateList(t).then((function(t){t&&e.isSearchFile?e.updateRenderData(e.markdownTs.preprocessSearchPage(t)).then((function(){e.renderComplete(),e.markdownTs.updateSearchPage(e.queryContent).then((function(){return e.markdownTs.updateDom()}))})):e.updateRenderData(t).then((function(){return e.renderComplete()}))})):e.updateRenderData().then((function(){return e.renderComplete()}))}))}))}else this.updateRenderData().then((function(){return e.renderComplete()}))}},{key:"updateRenderData",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",this.renderData=t,e.next=4,this.$nextTick();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"renderComplete",value:function(){var e=this;this.markdownTs.updateDom().then((function(){if(e.isRendering=!1,e.$nextTick((function(){Object(k["removeClass"])(e.$el),Object(k["dispatchEvent"])(p["EEvent"].rendered,(new Date).getTime()-e.startTime,100),e.scrollToAnchor()})),0!==e.resultsBeforeRendered.length){var t=!1,n=e.resultsBeforeRendered.shift();while(n)e.markdownTs.updateAsyncScript(n)&&!t&&(t=!0),n=e.resultsBeforeRendered.shift();t&&e.markdownTs.updateDom()}}))}},{key:"scrollToAnchor",value:function(){if(Object(v["getAnchorRegExp"])().test(this.anchor)){var e=document.querySelector('article > *[id="'.concat(this.anchor,'"]'));e&&e.offsetTop>0&&(Object(k["scroll"])(e.offsetTop-6),Object(m["changeAnchor"])(this.anchor))}}}]),n}(_["Vue"]);Object(b["a"])([Object(_["Prop"])()],S.prototype,"fileData",void 0),Object(b["a"])([Object(_["Prop"])()],S.prototype,"title",void 0),Object(b["a"])([Object(_["Prop"])()],S.prototype,"query",void 0),Object(b["a"])([Object(_["Prop"])()],S.prototype,"showTime",void 0),Object(b["a"])([Object(_["Prop"])()],S.prototype,"redirectTo",void 0),S=Object(b["a"])([_["Component"]],S);var x=S,F=x,R=(n("027e"),n("2877")),P=Object(R["a"])(F,D,E,!1,null,null,null),C=P.exports;_["Component"].registerHooks(["beforeRouteUpdate"]);var M=function(e){Object(h["a"])(n,e);var t=Object(d["a"])(n);function n(){var e;Object(o["a"])(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(f["a"])(Object(u["a"])(e),"fileTs",null),Object(f["a"])(Object(u["a"])(e),"fileData",""),Object(f["a"])(Object(u["a"])(e),"title",""),Object(f["a"])(Object(u["a"])(e),"tags",[]),Object(f["a"])(Object(u["a"])(e),"startDate",""),Object(f["a"])(Object(u["a"])(e),"endDate",""),Object(f["a"])(Object(u["a"])(e),"cover",""),Object(f["a"])(Object(u["a"])(e),"creator",""),Object(f["a"])(Object(u["a"])(e),"updater",""),Object(f["a"])(Object(u["a"])(e),"otherFlags",[]),Object(f["a"])(Object(u["a"])(e),"links",[]),Object(f["a"])(Object(u["a"])(e),"backlinks",[]),Object(f["a"])(Object(u["a"])(e),"backlinkFiles",[]),Object(f["a"])(Object(u["a"])(e),"isLoadingBacklinks",!1),Object(f["a"])(Object(u["a"])(e),"hasLoadedBacklinks",!1),Object(f["a"])(Object(u["a"])(e),"showTime",0),Object(f["a"])(Object(u["a"])(e),"isShow",!1),Object(f["a"])(Object(u["a"])(e),"isError",!1),Object(f["a"])(Object(u["a"])(e),"isRedirectPage",!1),Object(f["a"])(Object(u["a"])(e),"redirectFrom",[[],[]]),Object(f["a"])(Object(u["a"])(e),"initing",!0),e}return Object(l["a"])(n,[{key:"homePath",get:function(){return O["state"].homePath}},{key:"filePath",get:function(){var e=Object(m["parseRoute"])(this.$route),t=e.path,n=e.anchor,a=e.query;return O["state"].filePath=t,O["state"].anchor=n,O["state"].queryStr=a,O["state"].filePath}},{key:"anchor",get:function(){return O["state"].anchor}},{key:"queryStr",get:function(){return O["state"].queryStr}},{key:"shortFilePath",get:function(){return Object(m["shortenPath"])(this.filePath)}},{key:"rawFilePath",get:function(){return Object(m["addBaseUrl"])(this.filePath)}},{key:"query",get:function(){return Object(m["parseQuery"])(this.queryStr)}},{key:"config",get:function(){return g["config"]}},{key:"isIndexFile",get:function(){return this.filePath===this.config.paths.index}},{key:"lastUpdatedMessage",get:function(){return" | ".concat(this.config.messages.lastUpdated).concat(this.updater?" (".concat(this.updater,")"):"")}},{key:"iconSync",get:function(){return Object(k["getIcon"])(p["EIcon"].sync)}},{key:"iconBacklink",get:function(){return Object(k["getIcon"])(p["EIcon"].backlink,18)}},{key:"created",value:function(){var e=this,t=this.homePath,n=this.shortFilePath;if("prerender"===document.body.id){var a=t;return this.isIndexFile||(a+="#".concat(n)),void(location.href=a+location.search)}if(location.search){var r=location.search.substr(1)+(this.queryStr?"&".concat(this.queryStr):"");location.href=t+Object(m["buildHash"])({path:n,anchor:this.anchor,query:Object(m["formatQuery"])(Object(m["parseQuery"])(r))})}else{if(g["enableMultiConf"]){var i=this.query.conf;if(i&&g["confList"][0].includes(i)&&Object(g["getSelectConf"])()!==i)return j["setItem"]("conf",i),void location.reload()}Object(T["a"])({mainSelf:this,isIndexFile:this.isIndexFile,reload:this.reload}),this.$watch("title",(function(){var t=e.title,n=e.config.siteName;n&&n!==e.title&&(t+=" - ".concat(n)),document.title=t})),this.$watch("cover",(function(){if(!e.cover){var t=e.$el.firstElementChild;t&&t.classList.contains("lds-ellipsis")&&t.remove()}})),Object(k["dispatchEvent"])(p["EEvent"].mainCreated,(new Date).getTime()),this.getData().then((function(t){e.setData(t),e.initing=!1}))}}},{key:"beforeRouteUpdate",value:function(e,t,n){var a=Object(m["parseRoute"])(e),r=Object(m["parseRoute"])(t);a.path!==r.path||a.query!==r.query?(this.isShow=!1,n(),this.isRedirectPage?this.isRedirectPage=!1:this.redirectFrom=[[],[]],this.reload(!0)):a.anchor!==r.anchor&&(O["state"].anchor=a.anchor)}},{key:"reload",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(k["cleanEventListenerDict"])(),this.getData().then((function(n){document.querySelectorAll(".custom").forEach((function(e){return e.remove()}));var a=y["destructors"].shift();while(a)"function"===typeof a&&a(),a=y["destructors"].shift();e.setData(n),t&&Object(k["scroll"])(0,!1)}))}},{key:"getData",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,i,c,o,l,u,h,d,f,b,g,k,m,j,O;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.fileTs){e.next=4;break}return e.next=3,Object(w["a"])();case 3:this.fileTs=e.sent;case 4:if(t=this.filePath,t.endsWith(".md")){e.next=9;break}return this.isError=!0,n=this.fileTs.createErrorFile(t),a=n.data,r=n.flags,e.abrupt("return",{data:a,flags:r,links:[]});case 9:return i=[],i.push(this.fileTs.getFile(t)),c=this.config.paths.common,c&&t!==c&&i.push(this.fileTs.getFile(c)),e.next=15,Promise.all(i);case 15:if(o=e.sent,l=o[0],u=l.data,h=l.flags,d=Object.values(l.links).filter((function(e){return e.isMarkdown})).map((function(e){return e.href})),!l.isError){e.next=23;break}return this.isError=!0,e.abrupt("return",{data:u,flags:h,links:d});case 23:if(this.isError=!1,this.hasLoadedBacklinks&&this.loadBacklinks().then(),!Object(v["getMarkRegExp"])(p["EMark"].noCommon).test(u)){e.next=28;break}return u=u.replace(Object(v["getMarkRegExp"])(p["EMark"].noCommon,!0,"img"),""),e.abrupt("return",{data:u,flags:h,links:d});case 28:if(!(o.length<2||o[1].isError)){e.next=30;break}return e.abrupt("return",{data:u,flags:h,links:d});case 30:return f=o[1].data,b="",g=f,k=Object(y["chopStr"])(f,"--8<--"),m=Object(s["a"])(k,2),j=m[0],O=m[1],null!==O&&(b=j,g=O),b&&(u=b+"\n\n\n"+u),g&&(u+="\n\n\n"+g),e.abrupt("return",{data:u,flags:h,links:d});case 38:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setData",value:function(e){var t=this;e&&(this.setFlags(e.flags),this.fileData=e.data,this.links=e.links,this.isShow=!0,this.showTime=(new Date).getTime(),this.$nextTick((function(){return Object(k["dispatchEvent"])(p["EEvent"].mainShown,t.showTime)})))}},{key:"setFlags",value:function(e){var t=this;this.title=e.title,this.tags=e.tags?Object(i["a"])(e.tags):[],this.startDate=e.startDate||"",this.endDate=e.endDate||"",this.cover=e.cover||"",this.creator=e.creator||"",this.updater=e.updater||"",this.otherFlags=[],Object.keys(e).sort().forEach((function(n){y["definedFlags"].includes(n)||t.addFlag(n,e[n])})),Object(T["a"])({title:this.title,filePath:this.filePath})}},{key:"addFlag",value:function(e,t){var n={key:e,value:t};return this.otherFlags.push(n),n}},{key:"removeFlag",value:function(e){for(var t=0;t<this.otherFlags.length;t++)if(this.otherFlags[t].key===e)return this.otherFlags.splice(t,1),t;return-1}},{key:"redirectTo",value:function(e,t,n){return!this.redirectFrom[0].includes(this.filePath)&&(this.isRedirectPage=!0,this.redirectFrom[0].push(this.filePath),this.redirectFrom[1].push(this.title),location.hash=Object(m["buildHash"])({path:Object(m["shortenPath"])(e),anchor:t||this.anchor,query:n||this.queryStr}),!0)}},{key:"loadBacklinks",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.isLoadingBacklinks=!0,this.fileTs){e.next=5;break}return e.next=4,Object(w["a"])();case 4:this.fileTs=e.sent;case 5:return e.next=7,this.fileTs.getFiles();case 7:t=e.sent,n=t.files,a=t.backlinks,r=a[this.filePath],r&&r.length>0?(this.backlinks=Object(i["a"])(r),this.backlinkFiles=r.map((function(e){var t=n[e];return{path:t.path,flags:JSON.parse(JSON.stringify(t.flags))}})).sort(this.fileTs.sortFiles)):(this.backlinks=[],this.backlinkFiles=[]),this.isLoadingBacklinks=!1,this.hasLoadedBacklinks||(this.hasLoadedBacklinks=!0);case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getListHtml",value:function(e){return Object(k["createList"])(e).innerHTML}},{key:"getQueryTagLinks",value:function(e){return Object(k["getQueryTagLinks"])(e)}},{key:"returnHome",value:function(){Object(m["returnHome"])()}}]),n}(_["Vue"]);M=Object(b["a"])([Object(_["Component"])({components:{Article:C}})],M);var I=M,B=I,$=(n("d5f5"),Object(R["a"])(B,a,r,!1,null,null,null));t["default"]=$.exports},"6b75":function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},"7b30":function(e,t,n){"use strict";n("1ffc")},a630:function(e,t,n){var a=n("23e7"),r=n("4df4"),i=n("1c7e"),s=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:s},{from:r})},b0c0:function(e,t,n){var a=n("83ab"),r=n("9bf2").f,i=Function.prototype,s=i.toString,c=/^\s*function ([^ (]*)/,o="name";a&&!(o in i)&&r(i,o,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(e){return""}}})},d5f5:function(e,t,n){"use strict";n("3908")},eab5:function(e,t,n){},fead:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{attrs:{id:"toggle-dark"},on:{click:e.toggleDark}},[e._v(e._s(e.darkMarks[e.isDark?1:0]))]),n("span",{ref:"toggleZen",class:e.isZen?"spin":null,attrs:{id:"toggle-zen"},on:{click:e.toggleZen}},[e._v(e._s(e.zenMark))]),n("span",{ref:"toTop",class:e.isScrolling?"spin":null,attrs:{id:"to-top"},on:{click:e.toTop}},[e._v(e._s(e.toTopMark))])])},r=[],i=n("d4ec"),s=n("bee2"),c=n("257e"),o=n("262e"),l=n("2caf"),u=n("ade3"),h=(n("99af"),n("9ab4")),d=n("8964"),f=n("4c55"),b=n("4397"),g=n("1889"),k=n("72db"),p=n("1b40"),m=function(e){Object(o["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;Object(i["a"])(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),Object(u["a"])(Object(c["a"])(e),"addToKeyInput",void 0),Object(u["a"])(Object(c["a"])(e),"$refs",void 0),Object(u["a"])(Object(c["a"])(e),"metaTheme",void 0),Object(u["a"])(Object(c["a"])(e),"isDark",!1),Object(u["a"])(Object(c["a"])(e),"isZen",!1),Object(u["a"])(Object(c["a"])(e),"isScrolling",!1),Object(u["a"])(Object(c["a"])(e),"darkMarks",["★","☆"]),Object(u["a"])(Object(c["a"])(e),"zenMark","▣"),Object(u["a"])(Object(c["a"])(e),"toTopMark","と"),e}return Object(s["a"])(n,[{key:"metaThemeColor",get:function(){return this.isDark?this.isZen?"#2b2b2b":"#3b3b3b":this.isZen?"#efefef":"#ffffff"}},{key:"created",value:function(){var e=this;Object(k["a"])({gadgetSelf:this,toggleDark:this.toggleDark,toggleZen:this.toggleZen,toTop:this.toTop,toBottom:this.toBottom}),this.metaTheme=document.querySelector('meta[name="theme-color"]'),this.isDark=!!b["getItem"]("dark"),this.isZen=!!b["getItem"]("zen"),Object(g["addInputBinds"])({dark:this.toggleDark,zen:this.toggleZen,G:this.toTop,gg:function(){e.toBottom(),e.addToKeyInput("_")}}),this.$watch("isDark",(function(){e.metaTheme.setAttribute("content",e.metaThemeColor),e.isDark?(document.body.classList.add("dark"),b["setItem"]("dark",String(!0))):(Object(d["removeClass"])(document.body,"dark"),b["removeItem"]("dark")),e.$nextTick((function(){return Object(d["dispatchEvent"])(f["EEvent"].toggleDark,e.isDark)}))})),this.$watch("isZen",(function(){e.metaTheme.setAttribute("content",e.metaThemeColor),e.isZen?(document.body.classList.add("zen"),b["setItem"]("zen",String(!0))):(e.$nextTick((function(){return Object(d["removeClass"])(e.$refs.toggleZen)})),Object(d["removeClass"])(document.body,"zen"),b["removeItem"]("zen")),e.$nextTick((function(){return Object(d["dispatchEvent"])(f["EEvent"].toggleZen,e.isZen)}))}))}},{key:"toggleDark",value:function(){this.isDark=!this.isDark}},{key:"toggleZen",value:function(){this.isZen=!this.isZen}},{key:"toTop",value:function(){this.isScrolling||this.scroll()}},{key:"toBottom",value:function(){this.isScrolling||this.scroll(!0)}},{key:"scroll",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isScrolling=!0,Object(d["scroll"])(t?document.body.offsetHeight:0),setTimeout((function(){e.isScrolling=!1,e.$nextTick((function(){return Object(d["removeClass"])(e.$refs.toTop)}))}),500),this.$nextTick((function(){return Object(d["dispatchEvent"])(f["EEvent"].toTop,!t)}))}}]),n}(p["Vue"]);Object(h["a"])([Object(p["Prop"])()],m.prototype,"addToKeyInput",void 0),m=Object(h["a"])([p["Component"]],m);var v=m,j=v,O=(n("7b30"),n("2877")),y=Object(O["a"])(j,a,r,!1,null,null,null);t["default"]=y.exports}}]);