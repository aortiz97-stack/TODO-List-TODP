(()=>{"use strict";const e=(()=>{function e(){const e=document.querySelector("div#initial-form-box");document.querySelector("body").removeChild(e)}return{createFormLayout:function(t){const n=document.createElement("div");n.classList.add("header");const r=document.createElement("div");r.classList.add("side-bar");const o=document.createElement("div");o.classList.add("main-content");const a=((t,n,r)=>{function o(e="todo"){const t=document.createElement("div");t.classList.add("content-container");const n=document.createElement("div");let o;return n.classList.add("form"),"todo"===e?o=function(e){const t=[];function n(e,n){const r=document.createElement("input"),o=document.createElement("label");o.for=e,r.name=e,r.id=e,r.type=n,o.innerHTML=e.charAt(0).toUpperCase()+e.slice(1),"title"!==e&&"due-date"!==e||r.setAttribute("required",""),o.appendChild(r),t.push(o)}function r(e,n){for(let r=0;r<e.length;r+=1){const o=document.createElement("div"),a=document.createElement("label");a.for=e[r],a.innerHTML=e[r][0].toUpperCase()+e[r].slice(1);const i=document.createElement("input");i.id=e[r],i.value=e[r],i.name=n,i.type="radio",("status"===n&&"not completed"===e[r]||"priority"===n&&"low"===e[r])&&(i.checked="checked"),o.appendChild(i),o.appendChild(a),t.push(o)}}n("title","text"),n("description","textarea"),n("due-date","date");const o=document.createElement("div");o.innerHTML="Priority",t.push(o),r(["low","medium","high"],"priority");const a=document.createElement("div");a.innerHTML="Status",t.push(a),r(["completed","not completed"],"status"),n("project","text");const i=document.createElement("button");i.id="submit",i.innerHTML="Submit",t.push(i);for(let n=0;n<t.length;n+=1)e.appendChild(t[n]);const d=e;return d.id="todo",d}(n):"project"===e&&(o=function(e){const t=document.createElement("div"),n=document.createElement("label");n.for="project-name",n.innerHTML="Project name ";const r=document.createElement("input");r.type="text",r.id="project-name",t.appendChild(n),t.appendChild(r),e.appendChild(t);const o=document.createElement("button");o.id="submit",o.innerHTML="Submit",e.appendChild(o);const a=e;return a.id="project",a}(n)),t.appendChild(o),r.appendChild(t),r}return{populatedFormHeader:function(){const n=document.createElement("h1");n.innerHTML="Create a new...",t.appendChild(n);const r=document.createElement("button");return r.innerHTML="x",r.addEventListener("click",e),t.appendChild(r),t}(),populatedFormSideBar:function(){const e=document.createElement("ul"),t=["To-Do","Project","Note"];for(let n=0;n<t.length;n+=1){const r=document.createElement("li"),o=document.createElement("a");"To-Do"===t[n]&&o.classList.add("current"),o.innerHTML=t[n],o.href="#",r.appendChild(o),e.appendChild(r)}return e.addEventListener("click",(e=>{r.innerHTML="","To-Do"===e.target.innerHTML?o("todo"):"Project"===e.target.innerHTML?o("project"):alert("Something else was clicked")})),n.appendChild(e),n}(),populatedFormMainContent:o()}})(n,r,o);return t.appendChild(a.populatedFormHeader),t.appendChild(a.populatedFormSideBar),t.appendChild(a.populatedFormMainContent),t}}})();function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e){return t(1,arguments),e instanceof Date||"object"===n(e)&&"[object Date]"===Object.prototype.toString.call(e)}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===o(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(e){if(t(1,arguments),!r(e)&&"number"!=typeof e)return!1;var n=a(e);return!isNaN(Number(n))}function d(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function c(e,n){t(2,arguments);var r=a(e).getTime(),o=d(n);return new Date(r+o)}function u(e,n){t(2,arguments);var r=d(n);return c(e,-r)}var s=864e5;function l(e){t(1,arguments);var n=1,r=a(e),o=r.getUTCDay(),i=(o<n?7:0)+o-n;return r.setUTCDate(r.getUTCDate()-i),r.setUTCHours(0,0,0,0),r}function m(e){t(1,arguments);var n=a(e),r=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var i=l(o),d=new Date(0);d.setUTCFullYear(r,0,4),d.setUTCHours(0,0,0,0);var c=l(d);return n.getTime()>=i.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function h(e){t(1,arguments);var n=m(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var o=l(r);return o}var f=6048e5,p={};function g(){return p}function v(e,n){var r,o,i,c,u,s,l,m;t(1,arguments);var h=g(),f=d(null!==(r=null!==(o=null!==(i=null!==(c=null==n?void 0:n.weekStartsOn)&&void 0!==c?c:null==n||null===(u=n.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==i?i:h.weekStartsOn)&&void 0!==o?o:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==r?r:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=a(e),v=p.getUTCDay(),y=(v<f?7:0)+v-f;return p.setUTCDate(p.getUTCDate()-y),p.setUTCHours(0,0,0,0),p}function y(e,n){var r,o,i,c,u,s,l,m;t(1,arguments);var h=a(e),f=h.getUTCFullYear(),p=g(),y=d(null!==(r=null!==(o=null!==(i=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(u=n.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==i?i:p.firstWeekContainsDate)&&void 0!==o?o:null===(l=p.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(f+1,0,y),b.setUTCHours(0,0,0,0);var w=v(b,n),C=new Date(0);C.setUTCFullYear(f,0,y),C.setUTCHours(0,0,0,0);var T=v(C,n);return h.getTime()>=w.getTime()?f+1:h.getTime()>=T.getTime()?f:f-1}function b(e,n){var r,o,a,i,c,u,s,l;t(1,arguments);var m=g(),h=d(null!==(r=null!==(o=null!==(a=null!==(i=null==n?void 0:n.firstWeekContainsDate)&&void 0!==i?i:null==n||null===(c=n.locale)||void 0===c||null===(u=c.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==o?o:null===(s=m.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:1),f=y(e,n),p=new Date(0);p.setUTCFullYear(f,0,h),p.setUTCHours(0,0,0,0);var b=v(p,n);return b}var w=6048e5;function C(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const T=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return C("yy"===t?r%100:r,t.length)},M=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):C(n+1,2)},L=function(e,t){return C(e.getUTCDate(),t.length)},E=function(e,t){return C(e.getUTCHours()%12||12,t.length)},S=function(e,t){return C(e.getUTCHours(),t.length)},D=function(e,t){return C(e.getUTCMinutes(),t.length)},k=function(e,t){return C(e.getUTCSeconds(),t.length)},j=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return C(Math.floor(r*Math.pow(10,n-3)),t.length)};function x(e,t){var n=e>0?"-":"+",r=Math.abs(e),o=Math.floor(r/60),a=r%60;if(0===a)return n+String(o);var i=t||"";return n+String(o)+i+C(a,2)}function P(e,t){return e%60==0?(e>0?"-":"+")+C(Math.abs(e)/60,2):H(e,t)}function H(e,t){var n=t||"",r=e>0?"-":"+",o=Math.abs(e);return r+C(Math.floor(o/60),2)+n+C(o%60,2)}const q={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return T(e,t)},Y:function(e,t,n,r){var o=y(e,r),a=o>0?o:1-o;return"YY"===t?C(a%100,2):"Yo"===t?n.ordinalNumber(a,{unit:"year"}):C(a,t.length)},R:function(e,t){return C(m(e),t.length)},u:function(e,t){return C(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return C(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return C(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return C(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,r,o){var i=function(e,n){t(1,arguments);var r=a(e),o=v(r,n).getTime()-b(r,n).getTime();return Math.round(o/w)+1}(e,o);return"wo"===n?r.ordinalNumber(i,{unit:"week"}):C(i,n.length)},I:function(e,n,r){var o=function(e){t(1,arguments);var n=a(e),r=l(n).getTime()-h(n).getTime();return Math.round(r/f)+1}(e);return"Io"===n?r.ordinalNumber(o,{unit:"week"}):C(o,n.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):L(e,t)},D:function(e,n,r){var o=function(e){t(1,arguments);var n=a(e),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=n.getTime(),i=r-o;return Math.floor(i/s)+1}(e);return"Do"===n?r.ordinalNumber(o,{unit:"dayOfYear"}):C(o,n.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return C(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return C(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),o=0===r?7:r;switch(t){case"i":return String(o);case"ii":return C(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,o=e.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,o=e.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return E(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):S(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):C(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):C(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):D(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):k(e,t)},S:function(e,t){return j(e,t)},X:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();if(0===o)return"Z";switch(t){case"X":return P(o);case"XXXX":case"XX":return H(o);default:return H(o,":")}},x:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return P(o);case"xxxx":case"xx":return H(o);default:return H(o,":")}},O:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+x(o,":");default:return"GMT"+H(o,":")}},z:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+x(o,":");default:return"GMT"+H(o,":")}},t:function(e,t,n,r){var o=r._originalDate||e;return C(Math.floor(o.getTime()/1e3),t.length)},T:function(e,t,n,r){return C((r._originalDate||e).getTime(),t.length)}};var N=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},U=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},W={p:U,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],o=r[1],a=r[2];if(!a)return N(e,t);switch(o){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",N(o,t)).replace("{{time}}",U(a,t))}};const Y=W;function F(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var O=["D","DD"],A=["YY","YYYY"];function $(e){return-1!==O.indexOf(e)}function z(e){return-1!==A.indexOf(e)}function B(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function G(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var X,R={date:G({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:G({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:G({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},J={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function I(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,a=null!=n&&n.width?String(n.width):o;r=e.formattingValues[a]||e.formattingValues[o]}else{var i=e.defaultWidth,d=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[d]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function _(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;var i,d=a[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(c)?K(c,(function(e){return e.test(d)})):V(c,(function(e){return e.test(d)}));i=e.valueCallback?e.valueCallback(u):u,i=n.valueCallback?n.valueCallback(i):i;var s=t.slice(d.length);return{value:i,rest:s}}}function V(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function K(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const Z={code:"en-US",formatDistance:function(e,t,n){var r,o=Q[e];return r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:R,formatRelative:function(e,t,n,r){return J[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:I({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:I({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:I({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:I({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:I({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(X={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(X.matchPattern);if(!n)return null;var r=n[0],o=e.match(X.parsePattern);if(!o)return null;var a=X.valueCallback?X.valueCallback(o[0]):o[0];a=t.valueCallback?t.valueCallback(a):a;var i=e.slice(r.length);return{value:a,rest:i}}),era:_({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:_({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:_({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:_({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:_({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var ee=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,te=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ne=/^'([^]*?)'?$/,re=/''/g,oe=/[a-zA-Z]/;function ae(e,n,r){var o,c,s,l,m,h,f,p,v,y,b,w,C,T,M,L,E,S;t(2,arguments);var D=String(n),k=g(),j=null!==(o=null!==(c=null==r?void 0:r.locale)&&void 0!==c?c:k.locale)&&void 0!==o?o:Z,x=d(null!==(s=null!==(l=null!==(m=null!==(h=null==r?void 0:r.firstWeekContainsDate)&&void 0!==h?h:null==r||null===(f=r.locale)||void 0===f||null===(p=f.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==m?m:k.firstWeekContainsDate)&&void 0!==l?l:null===(v=k.locale)||void 0===v||null===(y=v.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==s?s:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=d(null!==(b=null!==(w=null!==(C=null!==(T=null==r?void 0:r.weekStartsOn)&&void 0!==T?T:null==r||null===(M=r.locale)||void 0===M||null===(L=M.options)||void 0===L?void 0:L.weekStartsOn)&&void 0!==C?C:k.weekStartsOn)&&void 0!==w?w:null===(E=k.locale)||void 0===E||null===(S=E.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==b?b:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!j.localize)throw new RangeError("locale must contain localize property");if(!j.formatLong)throw new RangeError("locale must contain formatLong property");var H=a(e);if(!i(H))throw new RangeError("Invalid time value");var N=F(H),U=u(H,N),W={firstWeekContainsDate:x,weekStartsOn:P,locale:j,_originalDate:H},O=D.match(te).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Y[t])(e,j.formatLong):e})).join("").match(ee).map((function(t){if("''"===t)return"'";var o=t[0];if("'"===o)return ie(t);var a=q[o];if(a)return null!=r&&r.useAdditionalWeekYearTokens||!z(t)||B(t,n,String(e)),null!=r&&r.useAdditionalDayOfYearTokens||!$(t)||B(t,n,String(e)),a(U,t,j.localize,W);if(o.match(oe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return t})).join("");return O}function ie(e){var t=e.match(ne);return t?t[1].replace(re,"'"):e}const de=(()=>{let e=[],t=[],n=[];const r=()=>e,o=()=>t,a=()=>n,i=t=>{e=t},d=e=>{t=e},c=e=>{n=e},u=(e,t,n)=>{let u,s;"todo"===e?u=r():"project"===e?u=o():"note"===e&&(u=a()),s=void 0===n?u.length-1:n,u.splice(s,0,t),"todo"===e?i(u):"project"===e?d(u):"note"===e&&c(u)},s=(e,t)=>{let n;"todo"===e?n=r():"project"===e?n=o():"note"===e&&(n=a());const u=n.indexOf(t);n.splice(u,1),"todo"===e?i(n):"project"===e?d(n):"note"===e&&c(n)};return{toDoMasterList:e,projectMasterList:t,noteMasterList:n,addToDo:e=>{(e=>{u("todo",e)})(e),(e=>{const t=e.projectName.toLowerCase(),n=o();for(let r=0;r<n.length;r+=1)if(t===n[r].projectName.toLowerCase()){n[r].addToDoList(e);break}})(e)},removeToDo:e=>{(e=>{s("todo",e)})(e),(e=>{const t=e.projectName.toLowerCase(),n=o();for(let r=0;r<n.length;r+=1)if(t===n[r].projectName.toLowerCase()){n[r].removeToDoList(e),e.removeProjectName();break}})(e)},addProject:e=>{u("project",e);const t=r();for(let n=0;n<t.length;n+=1){const r=t[n];r.projectName.toLowerCase()===e.projectName.toLowerCase()&&e.addToDoList(r)}},removeProject:t=>{for(let t=0;t<e.length;t+=1)e[t].removeProjectName();s("project",t)},getProject:e=>{let n;for(let r=0;r<t.length;r+=1)t[r].projectName===e&&(n=t[r]);return n}}})(),ce=(()=>{function e(){const e=document.querySelector("body"),t=document.querySelector("#edit-form-box");e.removeChild(t)}return{createFormLayout:function(t,n,r){const o=document.createElement("div");o.classList.add("edit"),o.classList.add("header");const a=document.createElement("div");a.classList.add("edit"),a.classList.add("main-content");const i=((t,n,r,o)=>{const a=function(){const n=document.createElement("h1");n.innerHTML="Edit",t.appendChild(n);const r=document.createElement("button");return r.innerHTML="x",r.addEventListener("click",e),t.appendChild(r),t}(),i=function(){const e=[];function t(t,n){const r=document.createElement("div"),a=document.createElement("label");a.for=`edit-${t}`;let i=`${t.charAt(0).toUpperCase()+t.slice(1)} `;i=i.replace("-"," "),a.innerHTML=i;let d=document.createElement("input");d.type=n,"textarea"===n&&(d=document.createElement("textarea")),d.id=`edit-${t}`;const c=document.querySelector(`.todo-${t}`);Number.isNaN(c)||("title"===t?d.value=o.title:"due-date"===t?d.value=o.dueDate:"project"===t?d.value=o.projectName:"description"===t&&(d.value=o.description)),r.appendChild(a),r.appendChild(d),e.push(r)}t("title","text"),t("due-date","date");const a=document.createElement("div");a.innerHTML="Priority ",e.push(a),function(){const t=["low","medium","high"],n=document.createElement("div");for(let e=0;e<t.length;e+=1){const r=document.createElement("div"),a=document.createElement("input");a.id=`${t[e]}`,a.type="radio",a.name="edit-priority",a.value=t[e],o.priority===t[e]&&(a.checked="checked");const i=document.createElement("label");i.for=`edit-${t[e]}-priority`,i.innerHTML=t[e].charAt(0).toUpperCase()+t[e].slice(1),r.appendChild(a),r.appendChild(i),n.appendChild(r)}e.push(n)}(),t("description","textarea"),t("project","text");const i=document.createElement("button");i.id="edit-submit-button",i.innerHTML="Submit",i.addEventListener("click",(()=>{const e=document.querySelector("#edit-title").value,t=document.querySelector("#edit-due-date").value,n=document.querySelectorAll('input[name = "edit-priority"]');let a;for(let e=0;e<n.length;e+=1)n[e].checked&&(a=n[e].value,r.classList.remove("low-priority"),r.classList.remove("medium-priority"),r.classList.remove("high-priority"),r.classList.add(`${a}-priority`));const i=document.querySelector("#edit-project").value,d=document.querySelector("#edit-description").value;o.title=e,o.dueDate=t,o.priority=a,o.projectName=i,o.description=d;const c=r.querySelector(".todo-title"),u=r.querySelector(".todo-due-date"),s=r.querySelector(".todo-priority"),l=r.querySelector(".todo-project"),m=r.querySelector(".todo-description");c.innerHTML=e,u.innerHTML=`Due date: ${ae(new Date(t),"MMMM d, yyyy")}`,s.innerHTML=`Priority: ${a}`,l.innerHTML=`Project: ${i}`,m.innerHTML=`Description: ${d}`;const h=document.querySelector("body"),f=document.querySelector("#edit-form-box");h.removeChild(f)})),e.push(i);for(let t=0;t<e.length;t+=1)n.appendChild(e[t]);return n}();return{populatedFormHeader:a,populatedFormMainContent:i}})(o,a,n,r);return t.appendChild(i.populatedFormHeader),t.appendChild(i.populatedFormMainContent),t}}})(),ue=ce,se=document.querySelector("body");function le(e){let t,n,r,o,a,i,d=e;if(void 0!==d)t=d.title,n=d.dueDate,r=d.priority,o=d.description,a=d.status,i=d.projectName;else{t=document.querySelector("input#title").value,n=document.querySelector("input#due-date").value;const e=document.querySelectorAll('input[name = "priority"]');for(let t=0;t<e.length;t+=1)e[t].checked&&(r=e[t].value);o=document.querySelector("input#description").value;const c=document.querySelectorAll('input[name = "status"]');for(let e=0;e<c.length;e+=1)c[e].checked&&(a=c[e].value);i=document.querySelector("input#project").value,d=((e,t,n,r="",o="not completed",a="")=>{const i={title:e,description:r,dueDate:t,priority:n,status:o,projectName:a,removeProjectName:()=>{i.projectName=""}};return i})(t,n,r,o,a,i)}let c=document.createElement("div");c.classList.add("todo-object"),c.classList.add(`${d.priority}-priority`);const u=document.createElement("div");u.classList.add("todo-title"),u.innerHTML=d.title;const s=document.createElement("div");s.classList.add("todo-due-date"),s.innerHTML=`Due date: ${ae(new Date(d.dueDate),"MMMM d, yyyy")}`;const l=document.createElement("div");"low"===d.priority?l.classList.add("low-priority"):"medium"===d.priority?l.classList.add("medium-priority"):"high"===d.priority&&l.classList.add("high-priority"),l.classList.add("priority-indicator");const m=document.createElement("div");m.classList.add("todo-description"),m.innerHTML=`Description: ${d.description}`;const h=document.createElement("div");h.classList.add("todo-priority"),h.innerHTML=`Priority: ${d.priority}`;const f=document.createElement("div");f.classList.add("todo-project"),f.innerHTML=`Project: ${d.projectName}`;const p=document.createElement("div"),g=document.createElement("input");g.id="status-input",g.type="checkbox","completed"===d.status&&(g.checked="checked",c.classList.add("completed"));const v=document.createElement("label");return v.for="status-input",v.innerHTML="Completed",p.appendChild(g),p.appendChild(v),p.classList.add("absolute"),p.classList.add("todo-status"),c.appendChild(u),c.appendChild(s),c.appendChild(h),c.appendChild(l),c.appendChild(f),c.appendChild(m),c.appendChild(p),function(e,t){const n=document.createElement("button");n.classList.add("absolute"),n.classList.add("exit-button"),n.innerHTML="x",e.append(n);const r=document.querySelector(".outer-content-container");r.appendChild(e);const o=document.querySelectorAll(".exit-button");o[o.length-1].addEventListener("click",(()=>{r.removeChild(e),de.removeToDo(t)}))}(y=c,b=d),function(e,t){const n=document.createElement("img"),r=document.createElement("div"),o=document.createElement("button");n.src="../src/images/edit-icon.png",n.alt="Edit icon",r.appendChild(n),o.appendChild(r),o.addEventListener("click",(()=>{let n=document.createElement("div");n.id="edit-form-box",n=ue.createFormLayout(n,e,t),se.appendChild(n)})),o.classList.add("absolute"),o.classList.add("edit-button"),e.appendChild(o)}(y,b),function(e){const t=document.createElement("button");t.classList.add("absolute"),t.classList.add("expand-button");const n=document.createElement("div"),r=document.createElement("img");r.src="../src/images/expand-icon.png",r.alt="expand icon",n.appendChild(r),t.appendChild(n),t.addEventListener("click",(()=>{e.classList.contains("expanded")?e.classList.remove("expanded"):e.classList.add("expanded")})),e.appendChild(t)}(y),c=y,c.addEventListener("click",(e=>{e.target===g&&(g.checked?(c.classList.add("completed"),d.status="completed"):(c.classList.remove("completed"),d.status="not completed"))})),d;var y,b}const me=document.querySelector("body");document.querySelector("div.side-bar button").addEventListener("click",(()=>{let t=document.createElement("div");t.id="initial-form-box",t=e.createFormLayout(t),me.appendChild(t),t.addEventListener("click",(e=>{if("Submit"===e.target.innerHTML){const e=document.querySelector(".form");if("todo"===e.id){const e=le();de.addToDo(e)}else"project"===e.id&&function(){const e=document.querySelector("input#project-name").value,t=(e=>{const t=[],n={toDoList:t,addToDoList:n=>{t.project=e,t.push(n)},removeToDoList:e=>{const n=t.indexOf(e);t.splice(n,1)},projectName:e,changeToDoProjectNames:e=>{for(let n=0;n<t.length;n+=1)t.projectName=e;n.projectName=e}};return n})(e);de.addProject(t);const n=document.querySelector("ul#project-list"),r=e.charAt(0).toUpperCase()+e.slice(1),o=document.createElement("li"),a=document.createElement("a");a.href="#",a.innerHTML=r,o.appendChild(a);const i=document.createElement("div"),d=document.createElement("button"),c=document.createElement("img");c.src="../src/images/trash-icon.png",c.alt="Trash icon",c.id="trash-project-icon",c.classList.add("project-trash-icon"),i.appendChild(c),d.appendChild(i);const u=document.createElement("div"),s=document.createElement("button"),l=document.createElement("img");l.src="../src/images/edit-icon.png",l.alt="Edit icon",l.classList.add("project-edit-icon"),u.appendChild(l),s.appendChild(u),o.addEventListener("click",(e=>{const t=document.querySelector("#project-list"),n=o.firstChild;if(e.target===c){t.removeChild(o);const e=de.getProject(n.innerHTML);de.removeProject(e)}else if(e.target===l){const e=n.innerHTML;if(n.innerHTML=prompt(`Enter the new name for ${e}.`),""===n.innerHTML)n.innerHTML=e;else{const t=de.getProject(e);t.projectName=n.innerHTML,t.changeToDoProjectNames(n.innerHTML)}}})),o.appendChild(d),o.appendChild(s),n.appendChild(o),document.getElementById("project-list").addEventListener("click",(e=>{typeof e.target==typeof document.createElement("a")&&function(e=""){const t=de.toDoMasterList;document.querySelector(".outer-content-container").innerHTML="";for(let n=0;n<t.length;n+=1)console.log(`projectName: ${t[n].projectName}`),console.log(`allToDos: ${de.toDoMasterList}`),t[n].projectName===e&&le(t[n])}(e.target.innerHTML)})),document.querySelector(".side-bar").addEventListener("click",(e=>{"Home"===e.target.innerHTML&&function(){console.log("enterred");const e=de.toDoMasterList;document.querySelector(".outer-content-container").innerHTML="";for(let t=0;t<e.length;t+=1)le(e[t])}()}))}();me.removeChild(t)}}))}))})();