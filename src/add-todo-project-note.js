import InitialForm from './create-initial-form-layout';
import createToDoDiv from './add-todo';
import createProjectLi from './add-project';
import toDoInterface from './todo-interface';
import displayTab from './displayToDo';

const body = document.querySelector('body');

function addItem(savedToDoInterface = toDoInterface()) {
  const addButton = document.querySelector('div.side-bar button');
  addButton.addEventListener('click', () => {
    let formBox = document.createElement('div');
    formBox.id = 'initial-form-box';
    formBox = InitialForm.createFormLayout(formBox, savedToDoInterface);
    body.appendChild(formBox);

    formBox.addEventListener('click', (e) => {
      const form = document.querySelector('.form');
      if (e.target.innerHTML === 'Submit') {
        if (form.id === 'todo') {
          const todo = createToDoDiv(savedToDoInterface);
          savedToDoInterface.addToDo(todo);
        } else if (form.id === 'project') {
          createProjectLi(savedToDoInterface);
        }
        body.removeChild(formBox);
      }
    });
  });
  displayTab(savedToDoInterface);
  return savedToDoInterface;
}

export default addItem;
