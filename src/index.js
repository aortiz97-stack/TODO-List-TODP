import createToDo from './todo';
import createProject from './project';
import createFormLayout from './create-form-layout';

const testToDo = (createToDo())('Eat', 'Eat a burger', '1/4/23', 'ASAP', false);
const project = (createProject())('Daily Activities');
console.log(project.toDoList[0]);
project.addToDoList(testToDo);
console.log(project.toDoList[0]);
project.removeToDoList(testToDo);
console.log(project.toDoList[0]);

const addButton = document.querySelector('div.side-bar button');
addButton.addEventListener('click', () => {
  const body = document.querySelector('body');

  let formBox = document.createElement('div');
  formBox.id = 'form-box';
  formBox = createFormLayout(formBox);
  body.appendChild(formBox);
});
