(()=>{"use strict";document.querySelector("div.side-bar button").addEventListener("click",(()=>{const e=document.querySelector("body");let t=document.createElement("div");t.id="form-box",t=function(e){const t=document.createElement("div");t.classList.add("header");const n=document.createElement("div");n.classList.add("side-bar");const d=document.createElement("div");d.classList.add("main-content");const o=((e,t,n)=>({populatedFormHeader:function(){const t=document.createElement("h1");t.innerHTML="Create a new...",e.appendChild(t);const n=document.createElement("button");return n.innerHTML="x",n.addEventListener("click",(()=>{const e=document.querySelector("div#form-box");document.querySelector("body").removeChild(e)})),e.appendChild(n),e}(),populatedFormSideBar:function(){const e=document.createElement("ul"),n=["// To-Do","Project","Note"];for(let t=0;t<n.length;t+=1){const d=document.createElement("li"),o=document.createElement("a");o.innerHTML=n[t],o.href="#",d.appendChild(o),e.appendChild(d)}return t.appendChild(e),t}(),populatedFormMainContent:function(){const e=document.createElement("div");e.classList.add("content-container");const t=document.createElement("form"),d=[];function o(e,t){const n=document.createElement("input"),o=document.createElement("label");o.for=e,n.name=e,n.id=e,n.type=t,o.innerHTML=e.charAt(0).toUpperCase()+e.slice(1),o.appendChild(n),d.push(o)}function c(e,t){for(let n=0;n<e.length;n+=1){const o=document.createElement("div"),c=document.createElement("label");c.for=e[n],c.innerHTML=e[n][0].toUpperCase()+e[n].slice(1);const r=document.createElement("input");r.id=e[n],r.value=e[n],r.name=t,r.type="radio",o.appendChild(r),o.appendChild(c),d.push(o),console.log(`htmlList: ${d}`)}}o("title","text"),o("description","textarea"),o("due date","date");const r=document.createElement("div");r.innerHTML="Priority",d.push(r),c(["low","medium","high"],"priority");const a=document.createElement("div");a.innerHTML="Status",d.push(a),c(["completed"],"completed"),o("project","text");for(let e=0;e<d.length;e+=1)t.appendChild(d[e]);return e.appendChild(t),n.appendChild(e),n}()}))(t,n,d);return e.appendChild(o.populatedFormHeader),e.appendChild(o.populatedFormSideBar),e.appendChild(o.populatedFormMainContent),e}(t),e.appendChild(t)}))})();