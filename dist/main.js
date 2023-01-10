(()=>{"use strict";function e(){const e=document.querySelector("div#form-box");document.querySelector("body").removeChild(e)}const t=(()=>{let e=[],t=[],o=[];const n=()=>e,d=()=>t,c=()=>o,i=t=>{e=t},r=e=>{t=e},a=e=>{o=e},s=(e,t,o)=>{let s,l;"todo"===e?s=n():"project"===e?s=d():"note"===e&&(s=c()),l=void 0===o?s.length-1:o,s.splice(l,0,t),"todo"===e?i(s):"project"===e?r(s):"note"===e&&a(s)},l=(e,t)=>{let o;"todo"===e?o=n():"project"===e?(o=d(),console.log("success!")):"note"===e&&(o=c());const s=o.indexOf(t);o.splice(s,1),"todo"===e?i(o):"project"===e?r(o):"note"===e&&a(o)};return{toDoMasterList:e,projectMasterList:t,noteMasterList:o,addToDo:e=>{(e=>{s("todo",e)})(e),(e=>{const t=e.projectName.toLowerCase(),o=d();for(let n=0;n<o.length;n+=1)if(t===o[n].projectName.toLowerCase()){o[n].addToDoList(e);break}})(e)},removeToDo:e=>{(e=>{l("todo",e)})(e),(e=>{const t=e.projectName.toLowerCase(),o=d();for(let n=0;n<o.length;n+=1)if(t===o[n].projectName.toLowerCase()){o[n].removeToDoList(e),e.removeProjectName();break}})(e)},addProject:e=>{s("project",e);const t=n();for(let o=0;o<t.length;o+=1){const n=t[o];n.projectName.toLowerCase()===e.projectName.toLowerCase()&&e.addToDoList(n)}},removeProject:t=>{for(let t=0;t<e.length;t+=1)console.log(`Before toDo: ${e[t].projectName}`),e[t].removeProjectName(),console.log(`After toDo: ${e[t].projectName}`);l("project",t)}}})(),o=document.querySelector("body");document.querySelector("div.side-bar button").addEventListener("click",(()=>{let n=document.createElement("div");n.id="form-box",n=function(t){const o=document.createElement("div");o.classList.add("header");const n=document.createElement("div");n.classList.add("side-bar");const d=document.createElement("div");d.classList.add("main-content");const c=((t,o,n)=>({populatedFormHeader:function(){const o=document.createElement("h1");o.innerHTML="Create a new...",t.appendChild(o);const n=document.createElement("button");return n.innerHTML="x",n.addEventListener("click",e),t.appendChild(n),t}(),populatedFormSideBar:function(){const e=document.createElement("ul"),t=["To-Do","Project","Note"];for(let o=0;o<t.length;o+=1){const n=document.createElement("li"),d=document.createElement("a");"To-Do"===t[o]&&d.classList.add("current"),d.innerHTML=t[o],d.href="#",n.appendChild(d),e.appendChild(n)}return o.appendChild(e),o}(),populatedFormMainContent:function(){const e=document.createElement("div");e.classList.add("content-container");const t=document.createElement("div");t.classList.add("form");const o=function(e){const t=[];function o(e,o){const n=document.createElement("input"),d=document.createElement("label");d.for=e,n.name=e,n.id=e,n.type=o,d.innerHTML=e.charAt(0).toUpperCase()+e.slice(1),"title"!==e&&"due-date"!==e||n.setAttribute("required",""),d.appendChild(n),t.push(d)}function n(e,o){for(let n=0;n<e.length;n+=1){const d=document.createElement("div"),c=document.createElement("label");c.for=e[n],c.innerHTML=e[n][0].toUpperCase()+e[n].slice(1);const i=document.createElement("input");i.id=e[n],i.value=e[n],i.name=o,i.type="radio",("status"===o&&"not completed"===e[n]||"priority"===o&&"low"===e[n])&&(i.checked="checked"),d.appendChild(i),d.appendChild(c),t.push(d)}}o("title","text"),o("description","textarea"),o("due-date","date");const d=document.createElement("div");d.innerHTML="Priority",t.push(d),n(["low","medium","high"],"priority");const c=document.createElement("div");c.innerHTML="Status",t.push(c),n(["completed","not completed"],"status"),o("project","text");const i=document.createElement("button");i.id="submit",i.innerHTML="Submit",t.push(i);for(let o=0;o<t.length;o+=1)e.appendChild(t[o]);const r=e;return r.id="todo",r}(t);return e.appendChild(o),n.appendChild(e),n}()}))(o,n,d);return t.appendChild(c.populatedFormHeader),t.appendChild(c.populatedFormSideBar),t.appendChild(c.populatedFormMainContent),t}(n),o.appendChild(n);const d=document.querySelector(".form");d.addEventListener("click",(e=>{"Submit"===e.target.innerHTML&&"todo"===d.id&&function(){const e=document.querySelector("input#title").value,n=document.querySelector("input#due-date").value,d=document.querySelectorAll('input[name = "priority"]');let c;for(let e=0;e<d.length;e+=1)d[e].checked&&(c=d[e].value);const i=document.querySelector("input#description").value,r=document.querySelectorAll('input[name = "status"]');let a;for(let e=0;e<r.length;e+=1)r[e].checked&&(a=r[e].value);const s=((e,t,o,n="",d="not completed",c="")=>{const i={title:e,description:n,dueDate:t,priority:o,status:d,projectName:c,removeProjectName:()=>{i.projectName=""}};return i})(e,n,c,i,a,document.querySelector("input#project").value);t.addToDo(s);let l=document.createElement("div");l.classList.add("todo-object"),l.classList.add(`${s.priority}-priority`);const p=document.createElement("div");p.classList.add("todo-title"),p.innerHTML=s.title;const u=document.createElement("div");u.classList.add("todo-due-date"),u.innerHTML=`Due date: ${s.dueDate}`;const m=document.createElement("div");"low"===s.priority?m.classList.add("low-priority"):"medium"===s.priority?m.classList.add("medium-priority"):"high"===s.priority&&m.classList.add("high-priority"),m.classList.add("priority-indicator");const h=document.createElement("div");h.classList.add("todo-description"),h.innerHTML=`Description: ${s.description}`;const L=document.createElement("div");L.classList.add("todo-priority"),L.innerHTML=`Priority: ${s.priority}`;const v=document.createElement("div"),C=document.createElement("input");C.id="status-input",C.type="checkbox","completed"===s.status&&(C.checked="checked",l.classList.add("completed"));const E=document.createElement("label");var y;E.for="status-input",E.innerHTML="Completed",v.appendChild(C),v.appendChild(E),v.classList.add("absolute"),v.classList.add("todo-status"),l.appendChild(p),l.appendChild(u),l.appendChild(L),l.appendChild(m),l.appendChild(h),l.appendChild(v),function(e,o){const n=document.createElement("button");n.classList.add("absolute"),n.classList.add("exit-button"),n.innerHTML="x",e.append(n);const d=document.querySelector(".outer-content-container");d.appendChild(e);const c=document.querySelectorAll(".exit-button");c[c.length-1].addEventListener("click",(()=>{d.removeChild(e),t.removeToDo(o)}))}(y=l,s),function(e){const t=document.createElement("img"),o=document.createElement("div"),n=document.createElement("button");t.src="../src/images/edit-icon.png",t.alt="Edit icon",o.appendChild(t),n.appendChild(o),n.addEventListener("click",(()=>{})),n.classList.add("absolute"),n.classList.add("edit-button"),e.appendChild(n)}(y),function(e){const t=document.createElement("button");t.classList.add("absolute"),t.classList.add("expand-button");const o=document.createElement("div"),n=document.createElement("img");n.src="../src/images/expand-icon.png",n.alt="expand icon",o.appendChild(n),t.appendChild(o),t.addEventListener("click",(()=>{e.classList.contains("expanded")?e.classList.remove("expanded"):e.classList.add("expanded")})),e.appendChild(t)}(y),l=y,l.addEventListener("click",(e=>{e.target===C&&(console.log(`todoDiv ${l}`),C.checked?l.classList.add("completed"):l.classList.remove("completed"))}));const f=document.querySelector("#form-box");o.removeChild(f)}()}))}))})();