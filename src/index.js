import createToDo from './todo';
import createProject from './project';

const testToDo = (createToDo())('Eat', 'Eat a burger', '1/4/23', 'ASAP', false);
const project = (createProject())('Daily Activities');
console.log(project.toDoList[0]);
project.addToDoList(testToDo);
console.log(project.toDoList[0]);
project.removeToDoList(testToDo);
console.log(project.toDoList[0]);

function createBasicGrid(formBox) {
  const formHeader = document.createElement('div');
  formHeader.classList.add('header');
  const formSideBar = document.createElement('div');
  formSideBar.classList.add('side-bar');
  const formMainContent = document.createElement('div');
  formMainContent.classList.add('main-content');

  formBox.appendChild(formHeader);
  formBox.appendChild(formSideBar);
  formBox.appendChild(formMainContent);

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
