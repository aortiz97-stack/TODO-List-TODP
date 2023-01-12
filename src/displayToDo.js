import { format, parse } from 'date-fns';
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

function displayTodayToDos() {
  const todoList = ToDoInterface.toDoMasterList;
  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.innerHTML = '';

  const today = format(new Date(), 'MMMM d, yyyy');
  console.log(`today: ${today}`);
  for (let i = 0; i < todoList.length; i += 1) {
    const parsedDate = parse(todoList[i].dueDate, 'yyyy-MM-dd', new Date());
    const date = format(parsedDate, 'MMMM d, yyyy');
    if (date === today) {
      createToDoDiv(todoList[i]);
    }
  }
}

export default function displayTab() {
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
    } else if (e.target.innerHTML === 'Today') {
      displayTodayToDos();
    }
  });
}
