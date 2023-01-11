import InitialForm from './create-initial-form-layout';
import createToDoDiv from './add-todo';
import createProjectLi from './add-project';

const body = document.querySelector('body');

export default function addItem() {
  const addButton = document.querySelector('div.side-bar button');
  addButton.addEventListener('click', () => {
    let formBox = document.createElement('div');
    formBox.id = 'initial-form-box';
    formBox = InitialForm.createFormLayout(formBox);
    body.appendChild(formBox);

    formBox.addEventListener('click', (e) => {
      if (e.target.innerHTML === 'Submit') {
        const form = document.querySelector('.form');
        console.log(`form id: ${form.id}`);
        if (form.id === 'todo') {
          createToDoDiv();
        } else if (form.id === 'project') {
          createProjectLi();
        }
        body.removeChild(formBox);
      }
    });
  });
}
