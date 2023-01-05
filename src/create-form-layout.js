import populateForm from './todo-form-tab';

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
    const populatedForm = populateForm(form);

    contentContainer.appendChild(populatedForm);
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
