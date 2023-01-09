import createToDo from './todo';
import createProject from './project';
import createFormLayout from './create-form-layout';

const body = document.querySelector('body');

function addExitButton(toDoDiv) {
  const exitButton = document.createElement('button');
  exitButton.classList.add('absolute');
  exitButton.classList.add('exit-button');
  exitButton.innerHTML = 'x';
  toDoDiv.append(exitButton);

  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.appendChild(toDoDiv);

  const exitButtonList = document.querySelectorAll('.exit-button');
  const individualExitButton = exitButtonList[exitButtonList.length - 1];

  individualExitButton.addEventListener('click', () => {
    outerContentContainer.removeChild(toDoDiv);
  });
}

function addEditButton(toDoDiv) {
  const editImage = document.createElement('img');
  const divImage = document.createElement('div');
  const editButton = document.createElement('button');
  editImage.src = '../src/images/edit-icon.png';
  editImage.alt = 'Edit icon';
  divImage.appendChild(editImage);
  editButton.appendChild(divImage);
  editButton.addEventListener('click', () => {
    console.log('code coming soon');
  });
  editButton.classList.add('absolute');
  editButton.classList.add('edit-button');
  toDoDiv.appendChild(editButton);
}

function addToDoButtons(toDoDiv) {
  addExitButton(toDoDiv);
  addEditButton(toDoDiv);
}

function createToDoDiv() {
  const title = (document.querySelector('input#title')).value;
  const dueDate = (document.querySelector('input#due-date')).value;
  const priority = (document.querySelector('input[name = "priority"]')).value;
  const description = (document.querySelector('input#description')).value;
  const status = (document.querySelector('input#completed')).value;
  const projectName = (document.querySelector('input#project')).value;

  const todo = (createToDo())(title, dueDate, priority, description, status, projectName);

  let todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-object');
  todoDiv.classList.add(`${todo.priority}-priority`);

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('todo-title');
  titleDiv.innerHTML = todo.title;

  const dueDateDiv = document.createElement('div');
  dueDateDiv.classList.add('todo-due-date');
  dueDateDiv.innerHTML = `Due date: ${todo.dueDate}`;

  const priorityIndicator = document.createElement('div');
  priorityIndicator.classList.add('priority-indicator');

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('todo-description');
  descriptionDiv.innerHTML = todo.description;

  const priorityDiv = document.createElement('div');
  priorityDiv.classList.add('todo-priority');
  priorityDiv.innerHTML = `Priority: ${todo.priority}`;

  todoDiv.appendChild(titleDiv);
  todoDiv.appendChild(dueDateDiv);
  todoDiv.appendChild(priorityDiv);
  todoDiv.appendChild(priorityIndicator);
  todoDiv.appendChild(descriptionDiv);

  todoDiv = addToDoButtons(todoDiv);

  const formBoxHTML = document.querySelector('#form-box');
  body.removeChild(formBoxHTML);
}

export default function addItem() {
  const addButton = document.querySelector('div.side-bar button');
  addButton.addEventListener('click', () => {
    let formBox = document.createElement('div');
    formBox.id = 'form-box';
    formBox = createFormLayout(formBox);
    body.appendChild(formBox);

    const form = document.querySelector('.form');
    form.addEventListener('click', (e) => {
      if (e.target.innerHTML === 'Submit') {
        if (form.id === 'todo') {
          createToDoDiv();
        }
      }
    });
  });
}
