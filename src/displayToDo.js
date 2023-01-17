import { format, parse } from 'date-fns';
import createToDoDiv from './add-todo';
import createNoteDivs from './add-note';

function displayProjectToDo(savedToDoInterface, projectName = '') {
  const todoList = savedToDoInterface.toDoMasterList;

  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.innerHTML = '';

  for (let i = 0; i < todoList.length; i += 1) {
    if (todoList[i].projectName === projectName) {
      createToDoDiv(savedToDoInterface, todoList[i]);
    }
  }
}

function displayAllToDos(savedToDoInterface) {
  const todoList = savedToDoInterface.toDoMasterList;

  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.innerHTML = '';

  for (let i = 0; i < todoList.length; i += 1) {
    createToDoDiv(savedToDoInterface, todoList[i]);
  }
}

function displayFilteredToDos(filter, savedToDoInterface) {
  const todoList = savedToDoInterface.toDoMasterList;
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
      createToDoDiv(savedToDoInterface, todoList[i]);
    }
  }
}

export default function displayTab(savedToDoInterface) {
  const projectList = document.getElementById('project-list');
  projectList.addEventListener('click', (e) => {
    if ((typeof e.target) === (typeof document.createElement('a'))) {
      displayProjectToDo(savedToDoInterface, e.target.innerHTML);
    }
  });

  const sideBar = document.querySelector('.side-bar');
  sideBar.addEventListener('click', (e) => {
    if (e.target.innerHTML === 'Home') {
      displayAllToDos(savedToDoInterface);
    } else if (e.target.innerHTML === 'Today') {
      displayFilteredToDos('Today', savedToDoInterface);
    } else if (e.target.innerHTML === 'Week') {
      displayFilteredToDos('Week', savedToDoInterface);
    } else if (e.target.innerHTML === 'Month') {
      displayFilteredToDos('Month', savedToDoInterface);
    } else if (e.target.innerHTML === 'Notes') {
      createNoteDivs(savedToDoInterface);
    }
  });
}
