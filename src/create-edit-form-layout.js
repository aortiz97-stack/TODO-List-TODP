import { format } from 'date-fns';

/* eslint-disable no-param-reassign */
const EditForm = (() => {
  function deleteFormBox() {
    const body = document.querySelector('body');
    const editFormBox = document.querySelector('#edit-form-box');
    body.removeChild(editFormBox);
  }
  const formContents = (formHeader, formMainContent, todoDiv, todo) => {
    function populateFormHeader() {
      const formTitle = document.createElement('h1');
      formTitle.innerHTML = 'Edit';
      formHeader.appendChild(formTitle);

      const formExitButton = document.createElement('button');
      formExitButton.innerHTML = 'x';
      formExitButton.addEventListener('click', deleteFormBox);
      formHeader.appendChild(formExitButton);
      return formHeader;
    }

    function populateMainContent() {
      const htmlList = [];

      function createNotRadioInputHTML(name, inputType) {
        const labelInputDiv = document.createElement('div');
        const label = document.createElement('label');
        label.for = `edit-${name}`;
        let labelName = `${name.charAt(0).toUpperCase() + name.slice(1)} `;
        labelName = labelName.replace('-', ' ');
        label.innerHTML = labelName;

        let input = document.createElement('input');
        input.type = inputType;
        if (inputType === 'textarea') {
          input = document.createElement('textarea');
        }
        input.id = `edit-${name}`;
        const todoInput = document.querySelector(`.todo-${name}`);
        if (!Number.isNaN(todoInput)) {
          if (name === 'title') {
            input.value = todo.title;
          } else if (name === 'due-date') {
            input.value = todo.dueDate;
          } else if (name === 'project') {
            input.value = todo.projectName;
          } else if (name === 'description') {
            input.value = todo.description;
          }
        }
        labelInputDiv.appendChild(label);
        labelInputDiv.appendChild(input);
        htmlList.push(labelInputDiv);
      }
      function createPriorityInput() {
        const priorityValues = ['low', 'medium', 'high'];
        const priorityDiv = document.createElement('div');

        for (let i = 0; i < priorityValues.length; i += 1) {
          const valueDiv = document.createElement('div');
          const input = document.createElement('input');
          input.id = `${priorityValues[i]}`;
          input.type = 'radio';
          input.name = 'edit-priority';
          input.value = priorityValues[i];

          if (todo.priority === priorityValues[i]) {
            input.checked = 'checked';
          }

          const label = document.createElement('label');
          label.for = `edit-${priorityValues[i]}-priority`;
          label.innerHTML = priorityValues[i].charAt(0).toUpperCase() + priorityValues[i].slice(1);
          valueDiv.appendChild(input);
          valueDiv.appendChild(label);
          priorityDiv.appendChild(valueDiv);
        }
        htmlList.push(priorityDiv);
      }

      createNotRadioInputHTML('title', 'text');
      createNotRadioInputHTML('due-date', 'date');

      const priorityLabel = document.createElement('div');
      priorityLabel.innerHTML = 'Priority ';
      htmlList.push(priorityLabel);

      createPriorityInput();
      createNotRadioInputHTML('description', 'textarea');
      createNotRadioInputHTML('project', 'text');

      const submit = document.createElement('button');
      submit.id = 'edit-submit-button';
      submit.innerHTML = 'Submit';
      submit.addEventListener('click', () => {
        const newTitle = document.querySelector('#edit-title').value;
        const newDate = document.querySelector('#edit-due-date').value;
        const editedPriorityInputs = document.querySelectorAll('input[name = "edit-priority"]');

        let newPriority;
        for (let i = 0; i < editedPriorityInputs.length; i += 1) {
          if (editedPriorityInputs[i].checked) {
            newPriority = editedPriorityInputs[i].value;
            todoDiv.classList.remove('low-priority');
            todoDiv.classList.remove('medium-priority');
            todoDiv.classList.remove('high-priority');
            todoDiv.classList.add(`${newPriority}-priority`);
          }
        }
        const newProject = document.querySelector('#edit-project').value;
        const newDescription = document.querySelector('#edit-description').value;

        todo.title = newTitle;
        todo.dueDate = newDate;
        todo.priority = newPriority;
        todo.projectName = newProject;
        todo.description = newDescription;

        const todoDivTitle = todoDiv.querySelector('.todo-title');
        const todoDivDate = todoDiv.querySelector('.todo-due-date');
        const todoDivPriority = todoDiv.querySelector('.todo-priority');
        const todoDivProject = todoDiv.querySelector('.todo-project');
        const todoDivDescription = todoDiv.querySelector('.todo-description');

        todoDivTitle.innerHTML = newTitle;
        todoDivDate.innerHTML = `Due date: ${format(new Date(newDate), 'MMMM d, yyyy')}`;
        todoDivPriority.innerHTML = `Priority: ${newPriority}`;
        todoDivProject.innerHTML = `Project: ${newProject}`;
        todoDivDescription.innerHTML = `Description: ${newDescription}`;

        const body = document.querySelector('body');
        const editFormBox = document.querySelector('#edit-form-box');
        body.removeChild(editFormBox);
      });

      htmlList.push(submit);
      for (let i = 0; i < htmlList.length; i += 1) {
        formMainContent.appendChild(htmlList[i]);
      }

      return formMainContent;
    }

    const populatedFormHeader = populateFormHeader();
    const populatedFormMainContent = populateMainContent();

    return { populatedFormHeader, populatedFormMainContent };
  };
  function createFormLayout(formBox, todoDiv, todo) {
    const formHeader = document.createElement('div');
    formHeader.classList.add('edit');
    formHeader.classList.add('header');

    const formMainContent = document.createElement('div');
    formMainContent.classList.add('edit');
    formMainContent.classList.add('main-content');

    const content = formContents(formHeader, formMainContent, todoDiv, todo);

    formBox.appendChild(content.populatedFormHeader);
    formBox.appendChild(content.populatedFormMainContent);

    return formBox;
  }

  return { createFormLayout };
})();

export default EditForm;
