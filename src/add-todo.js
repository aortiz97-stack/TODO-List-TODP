import { format, parse } from 'date-fns';
import toDoInterface from './todo-interface';
import EditForm from './create-edit-form-layout';
import ToDo from './todo';

const body = document.querySelector('body');

export function addExitButton(objDiv, obj, type = 'todo') {
  const exitButton = document.createElement('button');
  exitButton.classList.add('absolute');
  exitButton.classList.add('exit-button');
  exitButton.innerHTML = 'x';
  objDiv.append(exitButton);

  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.appendChild(objDiv);

  const exitButtonList = document.querySelectorAll('.exit-button');
  const individualExitButton = exitButtonList[exitButtonList.length - 1];

  individualExitButton.addEventListener('click', () => {
    outerContentContainer.removeChild(objDiv);
    if (type === 'todo') {
      toDoInterface.removeToDo(obj);
    } else if (type === 'note') {
      toDoInterface.removeNote(obj);
    }
  });
}

function addEditButton(toDoDiv, toDo) {
  const editImage = document.createElement('img');
  const divImage = document.createElement('div');
  const editButton = document.createElement('button');
  editImage.src = '../src/images/edit-icon.png';
  editImage.alt = 'Edit icon';
  divImage.appendChild(editImage);
  editButton.appendChild(divImage);

  editButton.addEventListener('click', () => {
    let formBox = document.createElement('div');
    formBox.id = 'edit-form-box';
    formBox = EditForm.createFormLayout(formBox, toDoDiv, toDo);
    body.appendChild(formBox);
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
  addEditButton(toDoDiv, toDo);
  addExpandButton(toDoDiv);
  return toDoDiv;
}

export default function createToDoDiv(todoParam = undefined) {
  let todo = todoParam;
  let title;
  let dueDate;
  let priority;
  let description;
  let status;
  let projectName;

  if (todo !== undefined) {
    title = todo.title;
    dueDate = todo.dueDate;
    priority = todo.priority;
    description = todo.description;
    status = todo.status;
    projectName = todo.projectName;
  } else {
    title = (document.querySelector('input#title')).value;
    dueDate = (document.querySelector('input#due-date')).value;

    const priorityButtons = (document.querySelectorAll('input[name = "priority"]'));
    for (let i = 0; i < priorityButtons.length; i += 1) {
      if (priorityButtons[i].checked) {
        priority = priorityButtons[i].value;
      }
    }
    description = (document.querySelector('input#description')).value;

    const statusButtons = document.querySelectorAll('input[name = "status"]');
    for (let i = 0; i < statusButtons.length; i += 1) {
      if (statusButtons[i].checked) {
        status = statusButtons[i].value;
      }
    }
    projectName = (document.querySelector('input#project')).value;

    todo = ToDo(title, dueDate, priority, description, status, projectName);
  }

  let todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-object');
  todoDiv.classList.add(`${todo.priority}-priority`);

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('todo-title');
  titleDiv.innerHTML = todo.title;

  const dueDateDiv = document.createElement('div');
  dueDateDiv.classList.add('todo-due-date');
  const parsedDate = parse(todo.dueDate, 'yyyy-MM-dd', new Date());
  const formatedDate = format(parsedDate, 'MMMM d, yyyy');
  dueDateDiv.innerHTML = `Due date: ${formatedDate}`;

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

  const projectDiv = document.createElement('div');
  projectDiv.classList.add('todo-project');
  projectDiv.innerHTML = `Project: ${todo.projectName}`;

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

  statusDiv.appendChild(statusCheckbox);
  statusDiv.appendChild(statusLabel);
  statusDiv.classList.add('absolute');
  statusDiv.classList.add('todo-status');

  todoDiv.appendChild(titleDiv);
  todoDiv.appendChild(dueDateDiv);
  todoDiv.appendChild(priorityDiv);
  todoDiv.appendChild(priorityIndicator);
  todoDiv.appendChild(projectDiv);
  todoDiv.appendChild(descriptionDiv);
  todoDiv.appendChild(statusDiv);

  todoDiv = addToDoButtons(todoDiv, todo);

  todoDiv.addEventListener('click', (e) => {
    if (e.target === statusCheckbox) {
      if (statusCheckbox.checked) {
        todoDiv.classList.add('completed');
        todo.status = 'completed';
      } else {
        todoDiv.classList.remove('completed');
        todo.status = 'not completed';
      }
    }
  });

  return todo;
}
