(()=>{"use strict";const e=(()=>{function e(){const e=document.querySelector("div#initial-form-box");document.querySelector("body").removeChild(e)}return{createFormLayout:function(t){const n=document.createElement("div");n.classList.add("header");const r=document.createElement("div");r.classList.add("side-bar");const o=document.createElement("div");o.classList.add("main-content");const a=((t,n,r)=>{function o(e="todo"){const t=document.createElement("div");t.classList.add("content-container");const n=document.createElement("div");let o;return n.classList.add("form"),"todo"===e?o=function(e){const t=[];function n(e,n){const r=document.createElement("input"),o=document.createElement("label");o.for=e,r.name=e,r.id=e,r.type=n,o.innerHTML=e.charAt(0).toUpperCase()+e.slice(1),"title"!==e&&"due-date"!==e||r.setAttribute("required",""),o.appendChild(r),t.push(o)}function r(e,n){for(let r=0;r<e.length;r+=1){const o=document.createElement("div"),a=document.createElement("label");a.for=e[r],a.innerHTML=e[r][0].toUpperCase()+e[r].slice(1);const i=document.createElement("input");i.id=e[r],i.value=e[r],i.name=n,i.type="radio",("status"===n&&"not completed"===e[r]||"priority"===n&&"low"===e[r])&&(i.checked="checked"),o.appendChild(i),o.appendChild(a),t.push(o)}}n("title","text"),n("description","textarea"),n("due-date","date");const o=document.createElement("div");o.innerHTML="Priority",t.push(o),r(["low","medium","high"],"priority");const a=document.createElement("div");a.innerHTML="Status",t.push(a),r(["completed","not completed"],"status"),n("project","text");const i=document.createElement("button");i.id="submit",i.innerHTML="Submit",t.push(i);for(let n=0;n<t.length;n+=1)e.appendChild(t[n]);const d=e;return d.id="todo",d}(n):"project"===e&&(o=function(e){const t=document.createElement("div"),n=document.createElement("label");n.for="project-name",n.innerHTML="Project name ";const r=document.createElement("input");r.type="text",r.id="project-name",t.appendChild(n),t.appendChild(r),e.appendChild(t);const o=document.createElement("button");o.id="submit",o.innerHTML="Submit",e.appendChild(o);const a=e;return a.id="project",a}(n)),t.appendChild(o),r.appendChild(t),r}return{populatedFormHeader:function(){const n=document.createElement("h1");n.innerHTML="Create a new...",t.appendChild(n);const r=document.createElement("button");return r.innerHTML="x",r.addEventListener("click",e),t.appendChild(r),t}(),populatedFormSideBar:function(){const e=document.createElement("ul"),t=["To-Do","Project","Note"];for(let n=0;n<t.length;n+=1){const r=document.createElement("li"),o=document.createElement("a");"To-Do"===t[n]&&o.classList.add("current"),o.innerHTML=t[n],o.href="#",r.appendChild(o),e.appendChild(r)}return e.addEventListener("click",(e=>{r.innerHTML="","To-Do"===e.target.innerHTML?o("todo"):"Project"===e.target.innerHTML?o("project"):alert("Something else was clicked")})),n.appendChild(e),n}(),populatedFormMainContent:o()}})(n,r,o);return t.appendChild(a.populatedFormHeader),t.appendChild(a.populatedFormSideBar),t.appendChild(a.populatedFormMainContent),t}}})();function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e){return t(1,arguments),e instanceof Date||"object"===n(e)&&"[object Date]"===Object.prototype.toString.call(e)}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===o(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(e){if(t(1,arguments),!r(e)&&"number"!=typeof e)return!1;var n=a(e);return!isNaN(Number(n))}function d(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function u(e,n){t(2,arguments);var r=a(e).getTime(),o=d(n);return new Date(r+o)}function c(e,n){t(2,arguments);var r=d(n);return u(e,-r)}var l=864e5;function s(e){t(1,arguments);var n=1,r=a(e),o=r.getUTCDay(),i=(o<n?7:0)+o-n;return r.setUTCDate(r.getUTCDate()-i),r.setUTCHours(0,0,0,0),r}function m(e){t(1,arguments);var n=a(e),r=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var i=s(o),d=new Date(0);d.setUTCFullYear(r,0,4),d.setUTCHours(0,0,0,0);var u=s(d);return n.getTime()>=i.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function h(e){t(1,arguments);var n=m(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var o=s(r);return o}var f=6048e5,p={};function g(){return p}function v(e,n){var r,o,i,u,c,l,s,m;t(1,arguments);var h=g(),f=d(null!==(r=null!==(o=null!==(i=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==i?i:h.weekStartsOn)&&void 0!==o?o:null===(s=h.locale)||void 0===s||null===(m=s.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==r?r:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=a(e),v=p.getUTCDay(),y=(v<f?7:0)+v-f;return p.setUTCDate(p.getUTCDate()-y),p.setUTCHours(0,0,0,0),p}function y(e,n){var r,o,i,u,c,l,s,m;t(1,arguments);var h=a(e),f=h.getUTCFullYear(),p=g(),y=d(null!==(r=null!==(o=null!==(i=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==i?i:p.firstWeekContainsDate)&&void 0!==o?o:null===(s=p.locale)||void 0===s||null===(m=s.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(f+1,0,y),b.setUTCHours(0,0,0,0);var w=v(b,n),C=new Date(0);C.setUTCFullYear(f,0,y),C.setUTCHours(0,0,0,0);var T=v(C,n);return h.getTime()>=w.getTime()?f+1:h.getTime()>=T.getTime()?f:f-1}function b(e,n){var r,o,a,i,u,c,l,s;t(1,arguments);var m=g(),h=d(null!==(r=null!==(o=null!==(a=null!==(i=null==n?void 0:n.firstWeekContainsDate)&&void 0!==i?i:null==n||null===(u=n.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==o?o:null===(l=m.locale)||void 0===l||null===(s=l.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==r?r:1),f=y(e,n),p=new Date(0);p.setUTCFullYear(f,0,h),p.setUTCHours(0,0,0,0);var b=v(p,n);return b}var w=6048e5;function C(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const T=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return C("yy"===t?r%100:r,t.length)},M=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):C(n+1,2)},L=function(e,t){return C(e.getUTCDate(),t.length)},S=function(e,t){return C(e.getUTCHours()%12||12,t.length)},E=function(e,t){return C(e.getUTCHours(),t.length)},D=function(e,t){return C(e.getUTCMinutes(),t.length)},k=function(e,t){return C(e.getUTCSeconds(),t.length)},x=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return C(Math.floor(r*Math.pow(10,n-3)),t.length)};function P(e,t){var n=e>0?"-":"+",r=Math.abs(e),o=Math.floor(r/60),a=r%60;if(0===a)return n+String(o);var i=t||"";return n+String(o)+i+C(a,2)}function j(e,t){return e%60==0?(e>0?"-":"+")+C(Math.abs(e)/60,2):U(e,t)}function U(e,t){var n=t||"",r=e>0?"-":"+",o=Math.abs(e);return r+C(Math.floor(o/60),2)+n+C(o%60,2)}const q={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return T(e,t)},Y:function(e,t,n,r){var o=y(e,r),a=o>0?o:1-o;return"YY"===t?C(a%100,2):"Yo"===t?n.ordinalNumber(a,{unit:"year"}):C(a,t.length)},R:function(e,t){return C(m(e),t.length)},u:function(e,t){return C(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return C(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return C(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return C(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,r,o){var i=function(e,n){t(1,arguments);var r=a(e),o=v(r,n).getTime()-b(r,n).getTime();return Math.round(o/w)+1}(e,o);return"wo"===n?r.ordinalNumber(i,{unit:"week"}):C(i,n.length)},I:function(e,n,r){var o=function(e){t(1,arguments);var n=a(e),r=s(n).getTime()-h(n).getTime();return Math.round(r/f)+1}(e);return"Io"===n?r.ordinalNumber(o,{unit:"week"}):C(o,n.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):L(e,t)},D:function(e,n,r){var o=function(e){t(1,arguments);var n=a(e),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=n.getTime(),i=r-o;return Math.floor(i/l)+1}(e);return"Do"===n?r.ordinalNumber(o,{unit:"dayOfYear"}):C(o,n.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return C(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return C(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),o=0===r?7:r;switch(t){case"i":return String(o);case"ii":return C(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,o=e.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,o=e.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return S(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):E(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):C(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):C(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):D(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):k(e,t)},S:function(e,t){return x(e,t)},X:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();if(0===o)return"Z";switch(t){case"X":return j(o);case"XXXX":case"XX":return U(o);default:return U(o,":")}},x:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return j(o);case"xxxx":case"xx":return U(o);default:return U(o,":")}},O:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+P(o,":");default:return"GMT"+U(o,":")}},z:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+P(o,":");default:return"GMT"+U(o,":")}},t:function(e,t,n,r){var o=r._originalDate||e;return C(Math.floor(o.getTime()/1e3),t.length)},T:function(e,t,n,r){return C((r._originalDate||e).getTime(),t.length)}};var H=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},N=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},W={p:N,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],o=r[1],a=r[2];if(!a)return H(e,t);switch(o){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",H(o,t)).replace("{{time}}",N(a,t))}};const Y=W;function F(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var O=["D","DD"],A=["YY","YYYY"];function z(e){return-1!==O.indexOf(e)}function $(e){return-1!==A.indexOf(e)}function Q(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var B={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function G(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var X,R={date:G({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:G({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:G({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},J={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function _(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,a=null!=n&&n.width?String(n.width):o;r=e.formattingValues[a]||e.formattingValues[o]}else{var i=e.defaultWidth,d=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[d]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function I(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;var i,d=a[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(u)?K(u,(function(e){return e.test(d)})):V(u,(function(e){return e.test(d)}));i=e.valueCallback?e.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var l=t.slice(d.length);return{value:i,rest:l}}}function V(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function K(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const Z={code:"en-US",formatDistance:function(e,t,n){var r,o=B[e];return r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:R,formatRelative:function(e,t,n,r){return J[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:_({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:_({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:_({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:_({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:_({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(X={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(X.matchPattern);if(!n)return null;var r=n[0],o=e.match(X.parsePattern);if(!o)return null;var a=X.valueCallback?X.valueCallback(o[0]):o[0];a=t.valueCallback?t.valueCallback(a):a;var i=e.slice(r.length);return{value:a,rest:i}}),era:I({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:I({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:I({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:I({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:I({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var ee=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,te=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ne=/^'([^]*?)'?$/,re=/''/g,oe=/[a-zA-Z]/;function ae(e,n,r){var o,u,l,s,m,h,f,p,v,y,b,w,C,T,M,L,S,E;t(2,arguments);var D=String(n),k=g(),x=null!==(o=null!==(u=null==r?void 0:r.locale)&&void 0!==u?u:k.locale)&&void 0!==o?o:Z,P=d(null!==(l=null!==(s=null!==(m=null!==(h=null==r?void 0:r.firstWeekContainsDate)&&void 0!==h?h:null==r||null===(f=r.locale)||void 0===f||null===(p=f.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==m?m:k.firstWeekContainsDate)&&void 0!==s?s:null===(v=k.locale)||void 0===v||null===(y=v.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==l?l:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var j=d(null!==(b=null!==(w=null!==(C=null!==(T=null==r?void 0:r.weekStartsOn)&&void 0!==T?T:null==r||null===(M=r.locale)||void 0===M||null===(L=M.options)||void 0===L?void 0:L.weekStartsOn)&&void 0!==C?C:k.weekStartsOn)&&void 0!==w?w:null===(S=k.locale)||void 0===S||null===(E=S.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==b?b:0);if(!(j>=0&&j<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!x.localize)throw new RangeError("locale must contain localize property");if(!x.formatLong)throw new RangeError("locale must contain formatLong property");var U=a(e);if(!i(U))throw new RangeError("Invalid time value");var H=F(U),N=c(U,H),W={firstWeekContainsDate:P,weekStartsOn:j,locale:x,_originalDate:U},O=D.match(te).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Y[t])(e,x.formatLong):e})).join("").match(ee).map((function(t){if("''"===t)return"'";var o=t[0];if("'"===o)return ie(t);var a=q[o];if(a)return null!=r&&r.useAdditionalWeekYearTokens||!$(t)||Q(t,n,String(e)),null!=r&&r.useAdditionalDayOfYearTokens||!z(t)||Q(t,n,String(e)),a(N,t,x.localize,W);if(o.match(oe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return t})).join("");return O}function ie(e){var t=e.match(ne);return t?t[1].replace(re,"'"):e}const de=(()=>{let e=[],t=[],n=[];const r=()=>e,o=()=>t,a=()=>n,i=t=>{e=t},d=e=>{t=e},u=e=>{n=e},c=(e,t,n)=>{let c,l;"todo"===e?c=r():"project"===e?c=o():"note"===e&&(c=a()),l=void 0===n?c.length-1:n,c.splice(l,0,t),"todo"===e?i(c):"project"===e?d(c):"note"===e&&u(c)},l=(e,t)=>{let n;"todo"===e?n=r():"project"===e?n=o():"note"===e&&(n=a());const c=n.indexOf(t);n.splice(c,1),"todo"===e?i(n):"project"===e?d(n):"note"===e&&u(n)};return{toDoMasterList:e,projectMasterList:t,noteMasterList:n,addToDo:e=>{(e=>{c("todo",e)})(e),(e=>{const t=e.projectName.toLowerCase(),n=o();for(let r=0;r<n.length;r+=1)if(t===n[r].projectName.toLowerCase()){n[r].addToDoList(e);break}})(e)},removeToDo:e=>{(e=>{l("todo",e)})(e),(e=>{const t=e.projectName.toLowerCase(),n=o();for(let r=0;r<n.length;r+=1)if(t===n[r].projectName.toLowerCase()){n[r].removeToDoList(e),e.removeProjectName();break}})(e)},addProject:e=>{c("project",e);const t=r();for(let n=0;n<t.length;n+=1){const r=t[n];r.projectName.toLowerCase()===e.projectName.toLowerCase()&&e.addToDoList(r)}},removeProject:t=>{for(let t=0;t<e.length;t+=1)e[t].removeProjectName();l("project",t)}}})(),ue=(()=>{function e(){const e=document.querySelector("body"),t=document.querySelector("#edit-form-box");e.removeChild(t)}return{createFormLayout:function(t,n,r){const o=document.createElement("div");o.classList.add("edit"),o.classList.add("header");const a=document.createElement("div");a.classList.add("edit"),a.classList.add("main-content");const i=((t,n,r,o)=>{const a=function(){const n=document.createElement("h1");n.innerHTML="Edit",t.appendChild(n);const r=document.createElement("button");return r.innerHTML="x",r.addEventListener("click",e),t.appendChild(r),t}(),i=function(){const e=[];function t(t,n){const r=document.createElement("div"),a=document.createElement("label");a.for=`edit-${t}`;let i=`${t.charAt(0).toUpperCase()+t.slice(1)} `;i=i.replace("-"," "),a.innerHTML=i;let d=document.createElement("input");d.type=n,"textarea"===n&&(d=document.createElement("textarea")),d.id=`edit-${t}`;const u=document.querySelector(`.todo-${t}`);Number.isNaN(u)||("title"===t?d.value=o.title:"due-date"===t?d.value=o.dueDate:"project"===t?d.value=o.projectName:"description"===t&&(d.value=o.description)),r.appendChild(a),r.appendChild(d),e.push(r)}t("title","text"),t("due-date","date");const a=document.createElement("div");a.innerHTML="Priority ",e.push(a),function(){const t=["low","medium","high"],n=document.createElement("div");for(let e=0;e<t.length;e+=1){const r=document.createElement("div"),a=document.createElement("input");a.id=`${t[e]}`,a.type="radio",a.name="edit-priority",a.value=t[e],o.priority===t[e]&&(a.checked="checked");const i=document.createElement("label");i.for=`edit-${t[e]}-priority`,i.innerHTML=t[e].charAt(0).toUpperCase()+t[e].slice(1),r.appendChild(a),r.appendChild(i),n.appendChild(r)}e.push(n)}(),t("description","textarea"),t("project","text");const i=document.createElement("button");i.id="edit-submit-button",i.innerHTML="Submit",i.addEventListener("click",(()=>{const e=document.querySelector("#edit-title").value,t=document.querySelector("#edit-due-date").value,n=document.querySelectorAll('input[name = "edit-priority"]');let a;for(let e=0;e<n.length;e+=1)n[e].checked&&(a=n[e].value,r.classList.remove("low-priority"),r.classList.remove("medium-priority"),r.classList.remove("high-priority"),r.classList.add(`${a}-priority`));const i=document.querySelector("#edit-project").value,d=document.querySelector("#edit-description").value;o.title=e,o.dueDate=t,o.priority=a,o.projectName=i,o.description=d;const u=r.querySelector(".todo-title"),c=r.querySelector(".todo-due-date"),l=r.querySelector(".todo-priority"),s=r.querySelector(".todo-project"),m=r.querySelector(".todo-description");u.innerHTML=e,c.innerHTML=`Due date: ${ae(new Date(t),"MMMM d, yyyy")}`,l.innerHTML=`Priority: ${a}`,s.innerHTML=`Project: ${i}`,m.innerHTML=`Description: ${d}`;const h=document.querySelector("body"),f=document.querySelector("#edit-form-box");h.removeChild(f)})),e.push(i);for(let t=0;t<e.length;t+=1)n.appendChild(e[t]);return n}();return{populatedFormHeader:a,populatedFormMainContent:i}})(o,a,n,r);return t.appendChild(i.populatedFormHeader),t.appendChild(i.populatedFormMainContent),t}}})(),ce=ue,le=document.querySelector("body");const se=document.querySelector("body");document.querySelector("div.side-bar button").addEventListener("click",(()=>{let t=document.createElement("div");t.id="initial-form-box",t=e.createFormLayout(t),se.appendChild(t);const n=document.querySelector(".form");n.addEventListener("click",(e=>{"Submit"===e.target.innerHTML&&"todo"===n.id&&function(){const e=document.querySelector("input#title").value,t=document.querySelector("input#due-date").value,n=document.querySelectorAll('input[name = "priority"]');let r;for(let e=0;e<n.length;e+=1)n[e].checked&&(r=n[e].value);const o=document.querySelector("input#description").value,a=document.querySelectorAll('input[name = "status"]');let i;for(let e=0;e<a.length;e+=1)a[e].checked&&(i=a[e].value);const d=((e,t,n,r="",o="not completed",a="")=>{const i={title:e,description:r,dueDate:t,priority:n,status:o,projectName:a,removeProjectName:()=>{i.projectName=""}};return i})(e,t,r,o,i,document.querySelector("input#project").value);de.addToDo(d);let u=document.createElement("div");u.classList.add("todo-object"),u.classList.add(`${d.priority}-priority`);const c=document.createElement("div");c.classList.add("todo-title"),c.innerHTML=d.title;const l=document.createElement("div");l.classList.add("todo-due-date"),l.innerHTML=`Due date: ${ae(new Date(d.dueDate),"MMMM d, yyyy")}`;const s=document.createElement("div");"low"===d.priority?s.classList.add("low-priority"):"medium"===d.priority?s.classList.add("medium-priority"):"high"===d.priority&&s.classList.add("high-priority"),s.classList.add("priority-indicator");const m=document.createElement("div");m.classList.add("todo-description"),m.innerHTML=`Description: ${d.description}`;const h=document.createElement("div");h.classList.add("todo-priority"),h.innerHTML=`Priority: ${d.priority}`;const f=document.createElement("div");f.classList.add("todo-project"),f.innerHTML=`Project: ${d.projectName}`;const p=document.createElement("div"),g=document.createElement("input");g.id="status-input",g.type="checkbox","completed"===d.status&&(g.checked="checked",u.classList.add("completed"));const v=document.createElement("label");var y,b;v.for="status-input",v.innerHTML="Completed",p.appendChild(g),p.appendChild(v),p.classList.add("absolute"),p.classList.add("todo-status"),u.appendChild(c),u.appendChild(l),u.appendChild(h),u.appendChild(s),u.appendChild(f),u.appendChild(m),u.appendChild(p),function(e,t){const n=document.createElement("button");n.classList.add("absolute"),n.classList.add("exit-button"),n.innerHTML="x",e.append(n);const r=document.querySelector(".outer-content-container");r.appendChild(e);const o=document.querySelectorAll(".exit-button");o[o.length-1].addEventListener("click",(()=>{r.removeChild(e),de.removeToDo(t)}))}(y=u,b=d),function(e,t){const n=document.createElement("img"),r=document.createElement("div"),o=document.createElement("button");n.src="../src/images/edit-icon.png",n.alt="Edit icon",r.appendChild(n),o.appendChild(r),o.addEventListener("click",(()=>{let n=document.createElement("div");n.id="edit-form-box",n=ce.createFormLayout(n,e,t),le.appendChild(n)})),o.classList.add("absolute"),o.classList.add("edit-button"),e.appendChild(o)}(y,b),function(e){const t=document.createElement("button");t.classList.add("absolute"),t.classList.add("expand-button");const n=document.createElement("div"),r=document.createElement("img");r.src="../src/images/expand-icon.png",r.alt="expand icon",n.appendChild(r),t.appendChild(n),t.addEventListener("click",(()=>{e.classList.contains("expanded")?e.classList.remove("expanded"):e.classList.add("expanded")})),e.appendChild(t)}(y),u=y,u.addEventListener("click",(e=>{e.target===g&&(g.checked?(u.classList.add("completed"),d.status="completed"):(u.classList.remove("completed"),d.status="not completed"))}));const w=document.querySelector("#initial-form-box");le.removeChild(w)}()}))}))})();