import createToDo from './todo';
import createProject from './project';

const testToDo = (createToDo())('Eat', 'Eat a burger', '1/4/23', 'ASAP', false);
const project = (createProject())('Daily Activities');
console.log(project.toDoList[0]);
project.addToDoList(testToDo);
console.log(project.toDoList[0]);
project.removeToDoList(testToDo);
console.log(project.toDoList[0]);

const addButton = document.querySelector('div#side-bar button');
addButton.addEventListener('click', () => {
  const formBox = document.createElement('div');
  const body = document.querySelector('body');
  formBox.id = 'form-box';
  body.appendChild(formBox);
});
