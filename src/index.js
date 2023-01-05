import createToDo from './todo';
import createProject from './project';

const testToDo = (createToDo())('Eat', 'Eat a burger', '1/4/23', 'ASAP', false);
const project = (createProject())();
project.addToDoList(testToDo);
project.removeToDoList(testToDo);

console.log(testToDo);
console.log(project.getToDoList());
