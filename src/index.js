import createToDo from './todo';
import createProject from './project';
import createFormLayout from './create-form-layout';
import deleteFormBox from './create-form-layout';

const body = document.querySelector('body');
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
        const title = (document.querySelector('input#title')).value;
        const dueDate = (document.querySelector('input#due-date')).value;
        const priority = (document.querySelector('input[name = "priority"]')).value;
        const description = (document.querySelector('input#description')).value;
        const status = (document.querySelector('input#completed')).value;
        const projectName = (document.querySelector('input#project')).value;

        const todo = (createToDo())(title, dueDate, priority, description, status, projectName);

        const todoDiv = document.createElement('div');
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

        todoDiv.appendChild(titleDiv);
        todoDiv.appendChild(dueDateDiv);
        todoDiv.appendChild(priorityIndicator);
        todoDiv.appendChild(descriptionDiv);

        const outerContentContainer = document.querySelector('.outer-content-container');
        outerContentContainer.appendChild(todoDiv);

        const formBoxHTML = document.querySelector('#form-box');
        body.removeChild(formBoxHTML);
      }
    }
  });
});
