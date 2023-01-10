import ToDo from './todo';
import Project from './project';
import createFormLayout from './create-form-layout';
import toDoInterface from './todo-interface';

const body = document.querySelector('body');

function addExitButton(toDoDiv, toDo) {
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
    toDoInterface.removeToDo(toDo);
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
  });
  editButton.classList.add('absolute');
  editButton.classList.add('edit-button');
  toDoDiv.appendChild(editButton);
}

function addExpandButton(toDoDiv) {
  const expandButton = document.createElement('button');
  expandButton.classList.add('absolute');
  expandButton.classList.add('expand-button');
  const divImage = document.createElement('div');
  const expandImg = document.createElement('img');
  expandImg.src = '../src/images/expand-icon.png';
  expandImg.alt = 'expand icon';

  divImage.appendChild(expandImg);
  expandButton.appendChild(divImage);

  expandButton.addEventListener('click', () => {
    if (!toDoDiv.classList.contains('expanded')) {
      toDoDiv.classList.add('expanded');
    } else {
      toDoDiv.classList.remove('expanded');
    }
  });
  toDoDiv.appendChild(expandButton);
}

function addToDoButtons(toDoDiv, toDo) {
  addExitButton(toDoDiv, toDo);
  addEditButton(toDoDiv);
  addExpandButton(toDoDiv);
  return toDoDiv;
}

function createToDoDiv() {
  const title = (document.querySelector('input#title')).value;
  const dueDate = (document.querySelector('input#due-date')).value;

  const priorityButtons = (document.querySelectorAll('input[name = "priority"]'));
  let priority;
  for (let i = 0; i < priorityButtons.length; i += 1) {
    if (priorityButtons[i].checked) {
      priority = priorityButtons[i].value;
    }
  }
  const description = (document.querySelector('input#description')).value;

  const statusButtons = document.querySelectorAll('input[name = "status"]');
  let status;
  for (let i = 0; i < statusButtons.length; i += 1) {
    if (statusButtons[i].checked) {
      status = statusButtons[i].value;
    }
  }
  const projectName = (document.querySelector('input#project')).value;

  const todo = ToDo(title, dueDate, priority, description, status, projectName);
  toDoInterface.addToDo(todo);

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
  if (todo.priority === 'low') {
    priorityIndicator.classList.add('low-priority');
  } else if (todo.priority === 'medium') {
    priorityIndicator.classList.add('medium-priority');
  } else if (todo.priority === 'high') {
    priorityIndicator.classList.add('high-priority');
  }
  priorityIndicator.classList.add('priority-indicator');

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('todo-description');
  descriptionDiv.innerHTML = `Description: ${todo.description}`;

  const priorityDiv = document.createElement('div');
  priorityDiv.classList.add('todo-priority');
  priorityDiv.innerHTML = `Priority: ${todo.priority}`;

  const statusDiv = document.createElement('div');
  const statusCheckbox = document.createElement('input');
  statusCheckbox.id = 'status-input';
  statusCheckbox.type = 'checkbox';
  if (todo.status === 'completed') {
    statusCheckbox.checked = 'checked';
    todoDiv.classList.add('completed');
  }

  const statusLabel = document.createElement('label');
  statusLabel.for = 'status-input';
  statusLabel.innerHTML = 'Completed';

  statusDiv.appendChild(statusCheckbox);
  statusDiv.appendChild(statusLabel);
  statusDiv.classList.add('absolute');
  statusDiv.classList.add('todo-status');

  todoDiv.appendChild(titleDiv);
  todoDiv.appendChild(dueDateDiv);
  todoDiv.appendChild(priorityDiv);
  todoDiv.appendChild(priorityIndicator);
  todoDiv.appendChild(descriptionDiv);
  todoDiv.appendChild(statusDiv);

  todoDiv = addToDoButtons(todoDiv, todo);

  todoDiv.addEventListener('click', (e) => {
    if (e.target === statusCheckbox) {
      console.log(`todoDiv ${todoDiv}`);
      if (statusCheckbox.checked) {
        todoDiv.classList.add('completed');
      } else {
        todoDiv.classList.remove('completed');
      }
    }
  });

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
