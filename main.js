(()=>{"use strict";function e(){const e=document.querySelector("div#form-box");document.querySelector("body").removeChild(e)}const t=document.querySelector("body");document.querySelector("div.side-bar button").addEventListener("click",(()=>{let n=document.createElement("div");n.id="form-box",n=function(t){const n=document.createElement("div");n.classList.add("header");const d=document.createElement("div");d.classList.add("side-bar");const o=document.createElement("div");o.classList.add("main-content");const c=((t,n,d)=>({populatedFormHeader:function(){const n=document.createElement("h1");n.innerHTML="Create a new...",t.appendChild(n);const d=document.createElement("button");return d.innerHTML="x",d.addEventListener("click",e),t.appendChild(d),t}(),populatedFormSideBar:function(){const e=document.createElement("ul"),t=["To-Do","Project","Note"];for(let n=0;n<t.length;n+=1){const d=document.createElement("li"),o=document.createElement("a");"To-Do"===t[n]&&o.classList.add("current"),o.innerHTML=t[n],o.href="#",d.appendChild(o),e.appendChild(d)}return n.appendChild(e),n}(),populatedFormMainContent:function(){const e=document.createElement("div");e.classList.add("content-container");const t=document.createElement("div");t.classList.add("form");const n=function(e){const t=[];function n(e,n){const d=document.createElement("input"),o=document.createElement("label");o.for=e,d.name=e,d.id=e,d.type=n,o.innerHTML=e.charAt(0).toUpperCase()+e.slice(1),"title"!==e&&"due-date"!==e||d.setAttribute("required",""),o.appendChild(d),t.push(o)}function d(e,n){for(let d=0;d<e.length;d+=1){const o=document.createElement("div"),c=document.createElement("label");c.for=e[d],c.innerHTML=e[d][0].toUpperCase()+e[d].slice(1);const i=document.createElement("input");i.id=e[d],i.value=e[d],i.name=n,i.type="radio","priority"===n?i.setAttribute("required",""):"completed"===n&&(i.checked=!1),o.appendChild(i),o.appendChild(c),t.push(o)}}n("title","text"),n("description","textarea"),n("due-date","date");const o=document.createElement("div");o.innerHTML="Priority",t.push(o),d(["low","medium","high"],"priority");const c=document.createElement("div");c.innerHTML="Status",t.push(c),d(["completed"],"completed"),n("project","text");const i=document.createElement("button");i.id="submit",i.innerHTML="Submit",t.push(i);for(let n=0;n<t.length;n+=1)e.appendChild(t[n]);const r=e;return r.id="todo",r}(t);return e.appendChild(n),d.appendChild(e),d}()}))(n,d,o);return t.appendChild(c.populatedFormHeader),t.appendChild(c.populatedFormSideBar),t.appendChild(c.populatedFormMainContent),t}(n),t.appendChild(n);const d=document.querySelector(".form");d.addEventListener("click",(e=>{"Submit"===e.target.innerHTML&&"todo"===d.id&&function(){const e=((e,t,n,d="",o=!1,c="")=>({title:e,description:d,dueDate:t,priority:n,completed:o,projectName:c}))(document.querySelector("input#title").value,document.querySelector("input#due-date").value,document.querySelector('input[name = "priority"]').value,document.querySelector("input#description").value,document.querySelector("input#completed").value,document.querySelector("input#project").value);let n=document.createElement("div");n.classList.add("todo-object"),n.classList.add(`${e.priority}-priority`);const d=document.createElement("div");d.classList.add("todo-title"),d.innerHTML=e.title;const o=document.createElement("div");o.classList.add("todo-due-date"),o.innerHTML=`Due date: ${e.dueDate}`;const c=document.createElement("div");c.classList.add("priority-indicator");const i=document.createElement("div");i.classList.add("todo-description"),i.innerHTML=e.description;const r=document.createElement("div");r.classList.add("todo-priority"),r.innerHTML=`Priority: ${e.priority}`,n.appendChild(d),n.appendChild(o),n.appendChild(r),n.appendChild(c),n.appendChild(i),n=function(e){const t=document.createElement("button");t.classList.add("absolute"),t.classList.add("exit-button"),t.innerHTML="x",e.append(t);const n=document.querySelector(".outer-content-container");n.appendChild(e);const d=document.querySelectorAll(".exit-button");d[d.length-1].addEventListener("click",(()=>{n.removeChild(e)}))}(n);const a=document.querySelector("#form-box");t.removeChild(a)}()}))}))})();