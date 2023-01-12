import ToDoInterface from './todo-interface';
import createToDoDiv from './add-todo';

function displayToDo(projectName = '') {
  const todoList = ToDoInterface.toDoMasterList;

  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.innerHTML = '';

  for (let i = 0; i < todoList.length; i += 1) {
    console.log(`projectName: ${todoList[i].projectName}`);
    console.log(`allToDos: ${ToDoInterface.toDoMasterList}`);
    if (todoList[i].projectName === projectName) {
      createToDoDiv(todoList[i]);
    }
  }
}

function displayAllToDos() {
  console.log('enterred');
  const todoList = ToDoInterface.toDoMasterList;

  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.innerHTML = '';

  for (let i = 0; i < todoList.length; i += 1) {
    createToDoDiv(todoList[i]);
  }
}

export default function displayProjectListTab() {
  const projectList = document.getElementById('project-list');
  projectList.addEventListener('click', (e) => {
    if ((typeof e.target) === (typeof document.createElement('a'))) {
      displayToDo(e.target.innerHTML);
    }
  });

  const sideBar = document.querySelector('.side-bar');
  sideBar.addEventListener('click', (e) => {
    if (e.target.innerHTML === 'Home') {
      displayAllToDos();
    }
  });
}
