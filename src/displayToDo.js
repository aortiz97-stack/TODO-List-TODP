import { format, parse } from 'date-fns';
import ToDoInterface from './todo-interface';
import createToDoDiv from './add-todo';
import toDoInterface from './todo-interface';
import createNoteDivs from './add-note';

function displayProjectToDo(projectName = '') {
  const todoList = ToDoInterface.toDoMasterList;

  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.innerHTML = '';

  for (let i = 0; i < todoList.length; i += 1) {
    if (todoList[i].projectName === projectName) {
      createToDoDiv(todoList[i]);
    }
  }
}

function displayAllToDos() {
  const todoList = ToDoInterface.toDoMasterList;

  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.innerHTML = '';

  for (let i = 0; i < todoList.length; i += 1) {
    createToDoDiv(todoList[i]);
  }
}

function displayFilteredToDos(filter) {
  const todoList = ToDoInterface.toDoMasterList;
  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.innerHTML = '';
  let formatFilter;
  if (filter === 'Today') {
    formatFilter = 'MMMM d, yyyy';
  } else if (filter === 'Month') {
    formatFilter = 'M';
  } else if (filter === 'Week') {
    formatFilter = 'I';
  }

  const today = format(new Date(), formatFilter);
  for (let i = 0; i < todoList.length; i += 1) {
    const parsedDate = parse(todoList[i].dueDate, 'yyyy-MM-dd', new Date());
    const date = format(parsedDate, formatFilter);
    if (date === today) {
      createToDoDiv(todoList[i]);
    }
  }
}

export default function displayTab() {
  const projectList = document.getElementById('project-list');
  projectList.addEventListener('click', (e) => {
    if ((typeof e.target) === (typeof document.createElement('a'))) {
      displayProjectToDo(e.target.innerHTML);
    }
  });

  const sideBar = document.querySelector('.side-bar');
  sideBar.addEventListener('click', (e) => {
    if (e.target.innerHTML === 'Home') {
      displayAllToDos();
    } else if (e.target.innerHTML === 'Today') {
      displayFilteredToDos('Today');
    } else if (e.target.innerHTML === 'Week') {
      displayFilteredToDos('Week');
    } else if (e.target.innerHTML === 'Month') {
      displayFilteredToDos('Month');
    } else if (e.target.innerHTML === 'Notes') {
      createNoteDivs();
    }
  });
}
