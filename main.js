(()=>{"use strict";const e=((e,t,o,n,d,c=null)=>({title:"Eat",description:"Eat a burger",dueDate:"1/4/23",priority:"ASAP",completed:!1,project:c}))(),t=(e=>{const t=[];return{toDoList:t,addToDoList:o=>{t.project=e,t.push(o)},removeToDoList:e=>{const o=t.indexOf(e);t.splice(o,2)},moveToDoinList:(e,o)=>{const n=t[e];t.splice(o,0,n)},projectName:e}})("Daily Activities");console.log(t.toDoList[0]),t.addToDoList(e),console.log(t.toDoList[0]),t.removeToDoList(e),console.log(t.toDoList[0]),document.querySelector("div.side-bar button").addEventListener("click",(()=>{const e=document.querySelector("body");let t=document.createElement("div");t.id="form-box",t=function(e){const t=document.createElement("div");t.classList.add("header");const o=document.createElement("div");o.classList.add("side-bar");const n=document.createElement("div");n.classList.add("main-content");const d=((e,t,o)=>({populatedFormHeader:function(){const t=document.createElement("h1");t.innerHTML="Create a new...",e.appendChild(t);const o=document.createElement("button");return o.innerHTML="x",o.addEventListener("click",(()=>{const e=document.querySelector("div#form-box");document.querySelector("body").removeChild(e)})),e.appendChild(o),e}(),populatedFormSideBar:function(){const e=document.createElement("ul"),o=["To-Do","Project","Note"];for(let t=0;t<o.length;t+=1){const n=document.createElement("li"),d=document.createElement("a");d.innerHTML=o[t],d.href="#",n.appendChild(d),e.appendChild(n)}return t.appendChild(e),t}(),populatedFormMainContent:function(){const e=document.createElement("div");return e.classList.add("content-container"),o.appendChild(e),o}()}))(t,o,n);return e.appendChild(d.populatedFormHeader),e.appendChild(d.populatedFormSideBar),e.appendChild(d.populatedFormMainContent),e}(t),e.appendChild(t)}))})();