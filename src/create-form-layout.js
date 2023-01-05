const formContents = (formHeader, formSideBar, formMainContent) => {
  function populateFormHeader() {
    const formTitle = document.createElement('h1');
    formTitle.innerHTML = 'Create a new...';
    formHeader.appendChild(formTitle);

    const formExitButton = document.createElement('button');
    formExitButton.innerHTML = 'x';
    formExitButton.addEventListener('click', () => {
      const formBox = document.querySelector('div#form-box');
      const body = document.querySelector('body');
      body.removeChild(formBox);
    });
    formHeader.appendChild(formExitButton);
    return formHeader;
  }
  function populateFormSideBar() {
    const ul = document.createElement('ul');
    const sideBarNames = ['// To-Do', 'Project', 'Note'];

    for (let i = 0; i < sideBarNames.length; i += 1) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.innerHTML = sideBarNames[i];
      a.href = '#';
      li.appendChild(a);
      ul.appendChild(li);
    }

    formSideBar.appendChild(ul);
    return formSideBar;
  }
  function populateFormMainContent() {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
    const form = document.createElement('form');

    const htmlList = [];
    function createNotRadioInputHTML(nameOfLabel, typeOfInput) {
      const input = document.createElement('input');
      const label = document.createElement('label');
      label.for = nameOfLabel;
      input.name = nameOfLabel;
      input.id = nameOfLabel;
      input.type = typeOfInput;
      label.innerHTML = nameOfLabel.charAt(0).toUpperCase() + nameOfLabel.slice(1);
      label.appendChild(input);

      htmlList.push(label);
    }
    function createRadioInputHTML(radioInputValues, radioInputName) {
      for (let i = 0; i < radioInputValues.length; i += 1) {
        const labelInputDiv = document.createElement('div');

        const label = document.createElement('label');
        label.for = radioInputValues[i];
        label.innerHTML = (radioInputValues[i])[0].toUpperCase() + (radioInputValues[i]).slice(1);
        const radioInput = document.createElement('input');
        radioInput.id = radioInputValues[i];
        radioInput.value = radioInputValues[i];
        radioInput.name = radioInputName;
        radioInput.type = 'radio';

        labelInputDiv.appendChild(radioInput);
        labelInputDiv.appendChild(label);
        htmlList.push(labelInputDiv);
        console.log(`htmlList: ${htmlList}`);
      }
    }

    createNotRadioInputHTML('title', 'text');
    createNotRadioInputHTML('description', 'textarea');
    createNotRadioInputHTML('due date', 'date');

    const priorityLabel = document.createElement('div');
    priorityLabel.innerHTML = 'Priority';
    htmlList.push(priorityLabel);

    createRadioInputHTML(['low', 'medium', 'high'], 'priority');

    const statusLabel = document.createElement('div');
    statusLabel.innerHTML = 'Status';
    htmlList.push(statusLabel);

    createRadioInputHTML(['completed'], 'completed');
    createNotRadioInputHTML('project', 'text');

    for (let i = 0; i < htmlList.length; i += 1) {
      form.appendChild(htmlList[i]);
    }

    contentContainer.appendChild(form);
    formMainContent.appendChild(contentContainer);

    return formMainContent;
  }

  const populatedFormHeader = populateFormHeader();
  const populatedFormSideBar = populateFormSideBar();
  const populatedFormMainContent = populateFormMainContent();

  return { populatedFormHeader, populatedFormSideBar, populatedFormMainContent };
};

export default function createFormLayout(formBox) {
  const formHeader = document.createElement('div');
  formHeader.classList.add('header');
  const formSideBar = document.createElement('div');
  formSideBar.classList.add('side-bar');
  const formMainContent = document.createElement('div');
  formMainContent.classList.add('main-content');

  const content = formContents(formHeader, formSideBar, formMainContent);

  formBox.appendChild(content.populatedFormHeader);
  formBox.appendChild(content.populatedFormSideBar);
  formBox.appendChild(content.populatedFormMainContent);

  return formBox;
}
