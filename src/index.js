import createToDo from './todo';
import createProject from './project';

const testToDo = (createToDo())('Eat', 'Eat a burger', '1/4/23', 'ASAP', false);
const project = (createProject())('Daily Activities');
console.log(project.toDoList[0]);
project.addToDoList(testToDo);
console.log(project.toDoList[0]);
project.removeToDoList(testToDo);
console.log(project.toDoList[0]);

const formContents = (formHeader, formSideBar, formMainContent) => {
  function populateFormHeader() {
    const formTitle = document.createElement('h1');
    formTitle.innerHTML = 'Create a new...';
    formHeader.appendChild(formTitle);

    const formExitButton = document.createElement('button');
    formExitButton.innerHTML = 'x';
    formExitButton.addEventListener('click', () => {
      const formBox = document.querySelector('div#form-box');
      const body = document.querySelector('body');
      body.removeChild(formBox);
    });
    formHeader.appendChild(formExitButton);
    return formHeader;
  }
  function populateFormSideBar() {
    const ul = document.createElement('ul');
    const sideBarNames = ['To-Do', 'Project', 'Note'];

    for (let i = 0; i < sideBarNames.length; i += 1) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.innerHTML = sideBarNames[i];
      a.href = '#';
      li.appendChild(a);
      ul.appendChild(li);
    }

    formSideBar.appendChild(ul);
    return formSideBar;
  }
  function populateFormMainContent() {
    const div = document.createElement('div');
    div.classList.add('content-container');
    formMainContent.appendChild(div);
    return formMainContent;
  }

  const populatedFormHeader = populateFormHeader();
  const populatedFormSideBar = populateFormSideBar();
  const populatedFormMainContent = populateFormMainContent();

  return { populatedFormHeader, populatedFormSideBar, populatedFormMainContent };
};

function createBasicGrid(formBox) {
  const formHeader = document.createElement('div');
  formHeader.classList.add('header');
  const formSideBar = document.createElement('div');
  formSideBar.classList.add('side-bar');
  const formMainContent = document.createElement('div');
  formMainContent.classList.add('main-content');

  const content = formContents(formHeader, formSideBar, formMainContent);

  formBox.appendChild(content.populatedFormHeader);
  formBox.appendChild(content.populatedFormSideBar);
  formBox.appendChild(content.populatedFormMainContent);

  return formBox;
}

const addButton = document.querySelector('div.side-bar button');
addButton.addEventListener('click', () => {
  const body = document.querySelector('body');

  let formBox = document.createElement('div');
  formBox.id = 'form-box';
  formBox = createBasicGrid(formBox);
  body.appendChild(formBox);
});
