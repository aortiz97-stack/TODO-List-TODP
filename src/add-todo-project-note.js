import Project from './project';
import InitialForm from './create-initial-form-layout';
import createToDoDiv from './add-todo';

const body = document.querySelector('body');

export default function addItem() {
  const addButton = document.querySelector('div.side-bar button');
  addButton.addEventListener('click', () => {
    let formBox = document.createElement('div');
    formBox.id = 'initial-form-box';
    formBox = InitialForm.createFormLayout(formBox);
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
