import populateInitialFormToDo from './todo-form-tab';
import populateInitialFormProject from './project-form-tab';
import createNoteDivs from './add-note';
import Note from './note';
import toDoInterface from './todo-interface';

const InitialForm = (() => {
  function deleteFormBox() {
    const formBox = document.querySelector('div#initial-form-box');
    const body = document.querySelector('body');
    body.removeChild(formBox);

    const aside = document.querySelector('aside');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    aside.style.filter = 'brightness(100%)';
    header.style.filter = 'brightness(100%)';
    main.style.filter = 'brightness(100%)';
  }
  const clickedOutsideFormBox = (e) => {
    const formBox = document.querySelector('div#initial-form-box');
    const plusButton = document.querySelector('aside button');
    console.log((e.target));
    if (formBox !== null && !formBox.contains(e.target) && e.target !== plusButton) {
      deleteFormBox();
    }
  };
  const formContents = (formHeader, formSideBar, formMainContent) => {
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
        if (sideBarNames[i] === 'To-Do') {
          a.classList.add('current');
        }
        a.innerHTML = sideBarNames[i];
        a.href = '#';
        li.appendChild(a);
        ul.appendChild(li);
      }

      ul.addEventListener('click', (e) => {
        // eslint-disable-next-line no-param-reassign
        formMainContent.innerHTML = '';
        if (e.target.innerHTML === 'To-Do') {
          populateFormMainContent('todo');
        } else if (e.target.innerHTML === 'Project') {
          populateFormMainContent('project');
        } else {
          const textArea = document.createElement('textArea');
          toDoInterface.addNote(Note(textArea));
          createNoteDivs();
          deleteFormBox();
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

  function createFormLayout(formBox) {
    const formHeader = document.createElement('header');
    const formSideBar = document.createElement('aside');
    const formMainContent = document.createElement('main');
    formMainContent.classList.add('main-content');

    const content = formContents(formHeader, formSideBar, formMainContent);

    formBox.appendChild(content.populatedFormHeader);
    formBox.appendChild(content.populatedFormSideBar);
    formBox.appendChild(content.populatedFormMainContent);

    return formBox;
  }

  return { createFormLayout, clickedOutsideFormBox };
})();

export default InitialForm;
