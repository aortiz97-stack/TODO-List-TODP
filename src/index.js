import createToDo from './todo';
import createProject from './project';
import createFormLayout from './create-form-layout';

const addButton = document.querySelector('div.side-bar button');
addButton.addEventListener('click', () => {
  const body = document.querySelector('body');

  let formBox = document.createElement('div');
  formBox.id = 'form-box';
  formBox = createFormLayout(formBox);
  body.appendChild(formBox);
});

const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', () => {
  const form = document.querySelector(form);

  if (form.id === 'todo') {
    const titleInput = document.querySelector('input#title');
    const dueDateInput = document.querySelector('input#due-date');
    const priorityInput = document.querySelector('input[name = "priority"]');
    const descriptionInput = document.querySelector('input#description');
    const completedInput = document.querySelector('input#completed');
    const projectNameInput = document.querySelector('input#project');
    const todo = createToDo();
  }
});
