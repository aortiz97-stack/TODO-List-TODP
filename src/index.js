import createToDo from './todo';
import createProject from './project';

const testToDo = (createToDo())('Eat', 'Eat a burger', '1/4/23', 'ASAP', false);
const project = (createProject())('Daily Activities');
console.log(project.toDoList[0]);
project.addToDoList(testToDo);
console.log(project.toDoList[0]);
project.removeToDoList(testToDo);
console.log(project.toDoList[0]);
