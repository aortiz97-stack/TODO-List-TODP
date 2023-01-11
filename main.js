(()=>{"use strict";const e=(()=>{function e(){const e=document.querySelector("div#initial-form-box");document.querySelector("body").removeChild(e)}return{createFormLayout:function(t){const o=document.createElement("div");o.classList.add("header");const n=document.createElement("div");n.classList.add("side-bar");const d=document.createElement("div");d.classList.add("main-content");const c=((t,o,n)=>({populatedFormHeader:function(){const o=document.createElement("h1");o.innerHTML="Create a new...",t.appendChild(o);const n=document.createElement("button");return n.innerHTML="x",n.addEventListener("click",e),t.appendChild(n),t}(),populatedFormSideBar:function(){const e=document.createElement("ul"),t=["To-Do","Project","Note"];for(let o=0;o<t.length;o+=1){const n=document.createElement("li"),d=document.createElement("a");"To-Do"===t[o]&&d.classList.add("current"),d.innerHTML=t[o],d.href="#",n.appendChild(d),e.appendChild(n)}return o.appendChild(e),o}(),populatedFormMainContent:function(){const e=document.createElement("div");e.classList.add("content-container");const t=document.createElement("div");t.classList.add("form");const o=function(e){const t=[];function o(e,o){const n=document.createElement("input"),d=document.createElement("label");d.for=e,n.name=e,n.id=e,n.type=o,d.innerHTML=e.charAt(0).toUpperCase()+e.slice(1),"title"!==e&&"due-date"!==e||n.setAttribute("required",""),d.appendChild(n),t.push(d)}function n(e,o){for(let n=0;n<e.length;n+=1){const d=document.createElement("div"),c=document.createElement("label");c.for=e[n],c.innerHTML=e[n][0].toUpperCase()+e[n].slice(1);const r=document.createElement("input");r.id=e[n],r.value=e[n],r.name=o,r.type="radio",("status"===o&&"not completed"===e[n]||"priority"===o&&"low"===e[n])&&(r.checked="checked"),d.appendChild(r),d.appendChild(c),t.push(d)}}o("title","text"),o("description","textarea"),o("due-date","date");const d=document.createElement("div");d.innerHTML="Priority",t.push(d),n(["low","medium","high"],"priority");const c=document.createElement("div");c.innerHTML="Status",t.push(c),n(["completed","not completed"],"status"),o("project","text");const r=document.createElement("button");r.id="submit",r.innerHTML="Submit",t.push(r);for(let o=0;o<t.length;o+=1)e.appendChild(t[o]);const i=e;return i.id="todo",i}(t);return e.appendChild(o),n.appendChild(e),n}()}))(o,n,d);return t.appendChild(c.populatedFormHeader),t.appendChild(c.populatedFormSideBar),t.appendChild(c.populatedFormMainContent),t}}})(),t=(()=>{let e=[],t=[],o=[];const n=()=>e,d=()=>t,c=()=>o,r=t=>{e=t},i=e=>{t=e},a=e=>{o=e},l=(e,t,o)=>{let l,s;"todo"===e?l=n():"project"===e?l=d():"note"===e&&(l=c()),s=void 0===o?l.length-1:o,l.splice(s,0,t),"todo"===e?r(l):"project"===e?i(l):"note"===e&&a(l)},s=(e,t)=>{let o;"todo"===e?o=n():"project"===e?(o=d(),console.log("success!")):"note"===e&&(o=c());const l=o.indexOf(t);o.splice(l,1),"todo"===e?r(o):"project"===e?i(o):"note"===e&&a(o)};return{toDoMasterList:e,projectMasterList:t,noteMasterList:o,addToDo:e=>{(e=>{l("todo",e)})(e),(e=>{const t=e.projectName.toLowerCase(),o=d();for(let n=0;n<o.length;n+=1)if(t===o[n].projectName.toLowerCase()){o[n].addToDoList(e);break}})(e)},removeToDo:e=>{(e=>{s("todo",e)})(e),(e=>{const t=e.projectName.toLowerCase(),o=d();for(let n=0;n<o.length;n+=1)if(t===o[n].projectName.toLowerCase()){o[n].removeToDoList(e),e.removeProjectName();break}})(e)},addProject:e=>{l("project",e);const t=n();for(let o=0;o<t.length;o+=1){const n=t[o];n.projectName.toLowerCase()===e.projectName.toLowerCase()&&e.addToDoList(n)}},removeProject:t=>{for(let t=0;t<e.length;t+=1)console.log(`Before toDo: ${e[t].projectName}`),e[t].removeProjectName(),console.log(`After toDo: ${e[t].projectName}`);s("project",t)}}})(),o=(()=>{function e(){const e=document.querySelector("body"),t=document.querySelector("#edit-form-box");e.removeChild(t)}return{createFormLayout:function(t,o,n){const d=document.createElement("div");d.classList.add("edit"),d.classList.add("header");const c=document.createElement("div");c.classList.add("edit"),c.classList.add("main-content");const r=((t,o,n,d)=>{const c=function(){const o=document.createElement("h1");o.innerHTML="Edit",t.appendChild(o);const n=document.createElement("button");return n.innerHTML="x",n.addEventListener("click",e),t.appendChild(n),t}(),r=function(){const e=[];function t(t,o){const n=document.createElement("div"),c=document.createElement("label");c.for=`edit-${t}`;let r=`${t.charAt(0).toUpperCase()+t.slice(1)} `;r=r.replace("-"," "),c.innerHTML=r;let i=document.createElement("input");i.type=o,"textarea"===o&&(i=document.createElement("textarea")),i.id=`edit-${t}`;const a=document.querySelector(`.todo-${t}`);Number.isNaN(a)||("title"===t?i.value=d.title:"due-date"===t?i.value=d.dueDate:"project"===t?i.value=d.projectName:"description"===t&&(i.value=d.description)),n.appendChild(c),n.appendChild(i),e.push(n)}t("title","text"),t("due-date","date");const c=document.createElement("div");c.innerHTML="Priority ",e.push(c),function(){const t=["low","medium","high"],o=document.createElement("div");for(let e=0;e<t.length;e+=1){const n=document.createElement("div"),c=document.createElement("input");c.id=`${t[e]}`,c.type="radio",c.name="edit-priority",c.value=t[e],d.priority===t[e]&&(c.checked="checked");const r=document.createElement("label");r.for=`edit-${t[e]}-priority`,r.innerHTML=t[e].charAt(0).toUpperCase()+t[e].slice(1),n.appendChild(c),n.appendChild(r),o.appendChild(n)}e.push(o)}(),t("description","textarea"),t("project","text");const r=document.createElement("button");r.id="edit-submit-button",r.innerHTML="Submit",r.addEventListener("click",(()=>{const e=document.querySelector("#edit-title").value,t=document.querySelector("#edit-due-date").value,o=document.querySelectorAll('input[name = "edit-priority"]');let c;for(let e=0;e<o.length;e+=1)o[e].checked&&(c=o[e].value,n.classList.remove("low-priority"),n.classList.remove("medium-priority"),n.classList.remove("high-priority"),n.classList.add(`${c}-priority`));const r=document.querySelector("#edit-project").value,i=document.querySelector("#edit-description").value;d.title=e,d.dueDate=t,d.priority=c,d.projectName=r,d.description=i;const a=n.querySelector(".todo-title"),l=n.querySelector(".todo-due-date"),s=n.querySelector(".todo-priority"),u=n.querySelector(".todo-project"),p=n.querySelector(".todo-description");a.innerHTML=e,l.innerHTML=`Due date: ${t}`,s.innerHTML=`Priority: ${c}`,u.innerHTML=`Project: ${r}`,p.innerHTML=`Description: ${i}`;const m=document.querySelector("body"),h=document.querySelector("#edit-form-box");m.removeChild(h)})),e.push(r);for(let t=0;t<e.length;t+=1)o.appendChild(e[t]);return o}();return{populatedFormHeader:c,populatedFormMainContent:r}})(d,c,o,n);return t.appendChild(r.populatedFormHeader),t.appendChild(r.populatedFormMainContent),t}}})(),n=o,d=document.querySelector("body");document.querySelector("div.side-bar button").addEventListener("click",(()=>{let o=document.createElement("div");o.id="initial-form-box",o=e.createFormLayout(o),d.appendChild(o);const c=document.querySelector(".form");c.addEventListener("click",(e=>{"Submit"===e.target.innerHTML&&"todo"===c.id&&function(){const e=document.querySelector("input#title").value,o=document.querySelector("input#due-date").value,c=document.querySelectorAll('input[name = "priority"]');let r;for(let e=0;e<c.length;e+=1)c[e].checked&&(r=c[e].value);const i=document.querySelector("input#description").value,a=document.querySelectorAll('input[name = "status"]');let l;for(let e=0;e<a.length;e+=1)a[e].checked&&(l=a[e].value);const s=((e,t,o,n="",d="not completed",c="")=>{const r={title:e,description:n,dueDate:t,priority:o,status:d,projectName:c,removeProjectName:()=>{r.projectName=""}};return r})(e,o,r,i,l,document.querySelector("input#project").value);t.addToDo(s);let u=document.createElement("div");u.classList.add("todo-object"),u.classList.add(`${s.priority}-priority`);const p=document.createElement("div");p.classList.add("todo-title"),p.innerHTML=s.title;const m=document.createElement("div");m.classList.add("todo-due-date"),m.innerHTML=`Due date: ${s.dueDate}`;const h=document.createElement("div");"low"===s.priority?h.classList.add("low-priority"):"medium"===s.priority?h.classList.add("medium-priority"):"high"===s.priority&&h.classList.add("high-priority"),h.classList.add("priority-indicator");const L=document.createElement("div");L.classList.add("todo-description"),L.innerHTML=`Description: ${s.description}`;const v=document.createElement("div");v.classList.add("todo-priority"),v.innerHTML=`Priority: ${s.priority}`;const y=document.createElement("div");y.classList.add("todo-project"),y.innerHTML=`Project: ${s.projectName}`;const C=document.createElement("div"),E=document.createElement("input");E.id="status-input",E.type="checkbox","completed"===s.status&&(E.checked="checked",u.classList.add("completed"));const f=document.createElement("label");var b,j;f.for="status-input",f.innerHTML="Completed",C.appendChild(E),C.appendChild(f),C.classList.add("absolute"),C.classList.add("todo-status"),u.appendChild(p),u.appendChild(m),u.appendChild(v),u.appendChild(h),u.appendChild(y),u.appendChild(L),u.appendChild(C),function(e,o){const n=document.createElement("button");n.classList.add("absolute"),n.classList.add("exit-button"),n.innerHTML="x",e.append(n);const d=document.querySelector(".outer-content-container");d.appendChild(e);const c=document.querySelectorAll(".exit-button");c[c.length-1].addEventListener("click",(()=>{d.removeChild(e),t.removeToDo(o)}))}(b=u,j=s),function(e,t){const o=document.createElement("img"),c=document.createElement("div"),r=document.createElement("button");o.src="../src/images/edit-icon.png",o.alt="Edit icon",c.appendChild(o),r.appendChild(c),r.addEventListener("click",(()=>{let o=document.createElement("div");o.id="edit-form-box",console.log(`the toDo title: ${t.title}`),o=n.createFormLayout(o,e,t),d.appendChild(o)})),r.classList.add("absolute"),r.classList.add("edit-button"),e.appendChild(r)}(b,j),function(e){const t=document.createElement("button");t.classList.add("absolute"),t.classList.add("expand-button");const o=document.createElement("div"),n=document.createElement("img");n.src="../src/images/expand-icon.png",n.alt="expand icon",o.appendChild(n),t.appendChild(o),t.addEventListener("click",(()=>{e.classList.contains("expanded")?e.classList.remove("expanded"):e.classList.add("expanded")})),e.appendChild(t)}(b),u=b,u.addEventListener("click",(e=>{e.target===E&&(E.checked?(u.classList.add("completed"),s.status="completed"):(u.classList.remove("completed"),s.status="not completed"))}));const T=document.querySelector("#initial-form-box");d.removeChild(T)}()}))}))})();