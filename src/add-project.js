import toDoInterface from './todo-interface';
import Project from './project';

export default function createProjectLi() {
  const projectName = document.querySelector('input#project-name').value;
  const project = Project(projectName);
  toDoInterface.addProject(project);

  const projectList = document.querySelector('ul#project-list');
  const displayedProjectName = projectName.charAt(0).toUpperCase() + projectName.slice(1);

  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.innerHTML = displayedProjectName;
  li.appendChild(a);

  //const trashIconDiv = document.createElement('div');
  const trashButton = document.createElement('button');
  const trashIcon = document.createElement('img');
  trashIcon.src = '../src/images/trash-icon.png';
  trashIcon.alt = 'Trash icon';
  trashIcon.id = 'trash-project-icon';
  trashIcon.classList.add('project-trash-icon');
  //trashIconDiv.appendChild(trashIcon);
  //trashButton.appendChild(trashIconDiv);
  trashButton.appendChild(trashIcon);

  //const editIconDiv = document.createElement('div');
  const editButton = document.createElement('button');
  const editIcon = document.createElement('img');
  editIcon.src = '../src/images/edit-icon.png';
  editIcon.alt = 'Edit icon';
  editIcon.classList.add('project-edit-icon');
  //editIconDiv.appendChild(editIcon);
  //editButton.appendChild(editIconDiv);
  editButton.appendChild(editIcon);

  li.appendChild(trashButton);
  li.appendChild(editButton);

  li.addEventListener('click', (e) => {
    const buttons = Array.from(li.querySelectorAll('button'));
    if (buttons[0].style.visibility === 'hidden') {
      buttons.forEach((button) => { button.style.visibility = 'visible'; });
    } else {
      buttons.forEach((button) => { button.style.visibility = 'hidden'; });
    }

    const projectUl = document.querySelector('#project-list');
    const link = li.firstChild;
    if (e.target === trashIcon) {
      projectUl.removeChild(li);
      const toDeleteProject = toDoInterface.getProject(link.innerHTML);
      toDoInterface.removeProject(toDeleteProject);
    } else if (e.target === editIcon) {
      const oldLinkName = link.innerHTML;
      link.innerHTML = prompt(`Enter the new name for ${oldLinkName}.`);
      if (link.innerHTML === '') {
        link.innerHTML = oldLinkName;
      } else {
        const toEditProject = toDoInterface.getProject(oldLinkName);
        toEditProject.projectName = link.innerHTML;
        toEditProject.changeToDoProjectNames(link.innerHTML);

        for (let i = 0; i < toDoInterface.toDoMasterList.length; i += 1) {
          const todo = toDoInterface.toDoMasterList[i];
          if (todo.projectName === oldLinkName) {
            todo.projectName = link.innerHTML;
          }
        }
      }
    }
  });

  projectList.appendChild(li);
}
