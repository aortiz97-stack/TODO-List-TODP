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
