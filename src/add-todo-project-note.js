import InitialForm from './create-initial-form-layout';
import createToDoDiv from './add-todo';
import createProjectLi from './add-project';
import toDoInterface from './todo-interface';
import displayTab from './displayToDo';

const body = document.querySelector('body');
body.addEventListener('click', (e) => InitialForm.clickedOutsideFormBox(e));

const dimBackground = () => {
  const aside = document.querySelector('aside');
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  aside.style.filter = 'brightness(25%)';
  header.style.filter = 'brightness(25%)';
  main.style.filter = 'brightness(25%)';
};

export default function addItem() {
  const addButton = document.querySelector('aside button');
  addButton.addEventListener('click', () => {
    dimBackground();
    let formBox = document.createElement('div');
    formBox.id = 'initial-form-box';
    formBox = InitialForm.createFormLayout(formBox);
    body.appendChild(formBox);

    formBox.addEventListener('click', (e) => {
      const form = document.querySelector('.form');
      if (e.target.innerHTML === 'Submit') {
        if (form.id === 'todo') {
          const todo = createToDoDiv();
          toDoInterface.addToDo(todo);
        } else if (form.id === 'project') {
          createProjectLi();
        }
        InitialForm.deleteFormBox();
      }
    });
  });
  displayTab();
}
