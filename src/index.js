import createToDo from './todo';
import createProject from './project';
import createFormLayout from './create-form-layout';

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
        const description = (document.querySelector('input#description'));
        const status = (document.querySelector('input#completed')).value;
        const projectName = (document.querySelector('input#project')).value;

        const todo = (createToDo())(title, dueDate, priority, description, status, projectName);

        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-object');
        todoDiv.classList.add(`${todo.priority}-priority`);

        const titleP = document.createElement('p');
        titleP.innerHTML = todo.title;

        const dueDateP = document.createElement('p');
        dueDateP.innerHTML = todo.dueDate;

        todoDiv.appendChild(titleP);
        todoDiv.appendChild(dueDateP);

        const outerContentContainer = document.querySelector('.outer-content-container');
        outerContentContainer.appendChild(todoDiv);

        console.log(`${todo.title}`);
      }
    }
  });
});
