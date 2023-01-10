const EditForm = (() => {
  function deleteFormBox() {
    const body = document.querySelector('body');
    const editFormBox = document.querySelector('#edit-form-box');
    body.removeChild(editFormBox);
  }
  const formContents = (formHeader, formMainContent, todo) => {
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
        label.for = `${name}-to-edit`;
        let labelName = `${name.charAt(0).toUpperCase() + name.slice(1)} `;
        labelName = labelName.replace('-', ' ');
        label.innerHTML = labelName;

        let input = document.createElement('input');
        input.id = `${name}-to-edit`;
        input.type = inputType;
        if (inputType === 'textarea') {
          input = document.createElement('textarea');
        }
        const todoInput = document.querySelector(`.todo-${name}`);
        if (!Number.isNaN(todoInput)) {
          input.value = todoInput.innerHTML;
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
          input.id = `edit-${priorityValues[i]}-priority`;
          input.type = 'radio';
          input.name = 'priority';

          if (todo.priority === priorityValues[i]) {
            input.value = priorityValues[i];
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
  function createFormLayout(formBox, todo) {
    const formHeader = document.createElement('div');
    formHeader.classList.add('edit');
    formHeader.classList.add('header');

    const formMainContent = document.createElement('div');
    formMainContent.classList.add('edit');
    formMainContent.classList.add('main-content');

    const content = formContents(formHeader, formMainContent, todo);

    formBox.appendChild(content.populatedFormHeader);
    formBox.appendChild(content.populatedFormMainContent);

    return formBox;
  }

  return { createFormLayout };
})();

export default EditForm;
