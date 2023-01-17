import populateInitialFormToDo from './todo-form-tab';
import populateInitialFormProject from './project-form-tab';
import Note from './note';
import createNoteDivs from './add-note';

const InitialForm = (() => {
  function deleteFormBox() {
    const formBox = document.querySelector('div#initial-form-box');
    const body = document.querySelector('body');
    body.removeChild(formBox);
  }
  const formContents = (formHeader, formSideBar, formMainContent, savedToDoInterface) => {
    function populateFormHeader() {
      const formTitle = document.createElement('h1');
      formTitle.innerHTML = 'Create a new...';
      formHeader.appendChild(formTitle);

      const formExitButton = document.createElement('button');
      formExitButton.innerHTML = 'x';
      formExitButton.addEventListener('click', deleteFormBox);
      formHeader.appendChild(formExitButton);
      return formHeader;
    }
    function populateFormMainContent(itemType = 'todo') {
      const contentContainer = document.createElement('div');
      contentContainer.classList.add('content-container');
      const form = document.createElement('div');
      form.classList.add('form');
      let populatedForm;
      if (itemType === 'todo') {
        populatedForm = populateInitialFormToDo(form);
      } else if (itemType === 'project') {
        populatedForm = populateInitialFormProject(form);
      }

      contentContainer.appendChild(populatedForm);
      formMainContent.appendChild(contentContainer);
      return formMainContent;
    }

    function populateFormSideBar() {
      const ul = document.createElement('ul');
      const sideBarNames = ['To-Do', 'Project', 'Note'];

      for (let i = 0; i < sideBarNames.length; i += 1) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerHTML = sideBarNames[i];
        a.href = '#';
        li.appendChild(a);
        ul.appendChild(li);
      }

      function displayNotes() {
        const textArea = document.createElement('textArea');
        savedToDoInterface.addNote(Note(textArea));
        createNoteDivs(savedToDoInterface);
        deleteFormBox();
      }

      ul.addEventListener('click', (e) => {
        // eslint-disable-next-line no-param-reassign
        formMainContent.innerHTML = '';
        if (e.target.innerHTML === 'To-Do') {
          populateFormMainContent('todo');
        } else if (e.target.innerHTML === 'Project') {
          populateFormMainContent('project');
        } else {
          displayNotes();
        }
      });

      formSideBar.appendChild(ul);
      return formSideBar;
    }

    const populatedFormHeader = populateFormHeader();
    const populatedFormSideBar = populateFormSideBar();
    const populatedFormMainContent = populateFormMainContent();

    return { populatedFormHeader, populatedFormSideBar, populatedFormMainContent };
  };

  function createFormLayout(formBox, savedToDoInterface) {
    const formHeader = document.createElement('div');
    formHeader.classList.add('header');
    const formSideBar = document.createElement('div');
    formSideBar.classList.add('side-bar');
    const formMainContent = document.createElement('div');
    formMainContent.classList.add('main-content');

    const content = formContents(formHeader, formSideBar, formMainContent, savedToDoInterface);

    formBox.appendChild(content.populatedFormHeader);
    formBox.appendChild(content.populatedFormSideBar);
    formBox.appendChild(content.populatedFormMainContent);

    return formBox;
  }

  return { createFormLayout, deleteFormBox };
})();

export default InitialForm;
