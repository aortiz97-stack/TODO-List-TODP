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

  const form = document.querySelector('form');
  form.addEventListener('click', (e) => {
    console.log(`e.target: ${e.target.innerHTML}`);
    if (e.target.innerHTML === 'Submit') {
      if (form.id === 'todo') {
        const titleInput = (document.querySelector('input#title')).value;
        console.log(`titleInPUT: ${titleInput}`);
        const dueDateInput = document.querySelector('input#due-date');
        const priorityInput = document.querySelector('input[name = "priority"]');
        const descriptionInput = document.querySelector('input#description');
        const completedInput = document.querySelector('input#completed');
        const projectNameInput = document.querySelector('input#project');
        const todo = (createToDo())(
          titleInput,
          dueDateInput,
          priorityInput,
          descriptionInput,
          completedInput,
          projectNameInput,
        );

        console.log(`TODO: ${todo}`);

        const todoDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const dueDateDiv = document.createElement('div');
        todoDiv.classList.add('todo-object');
        todoDiv.classList.add(`${todo.completedInput}-priority`);
        titleDiv.innerHTML = todo.title;
        dueDateDiv.innerHTML = todo.dueDate.value;
        todoDiv.appendChild(titleDiv);
        todoDiv.appendChild(dueDateDiv);

        const contentBox = document.querySelector('.content-container');
        contentBox.appendChild(todoDiv);
      }
    }
  });
});
