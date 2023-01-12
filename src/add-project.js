import toDoInterface from './todo-interface';
import Project from './project';
import displayTab from './displayToDo';

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

  const trashIconDiv = document.createElement('div');
  const trashButton = document.createElement('button');
  const trashIcon = document.createElement('img');
  trashIcon.src = '../src/images/trash-icon.png';
  trashIcon.alt = 'Trash icon';
  trashIcon.id = 'trash-project-icon';
  trashIcon.classList.add('project-trash-icon');
  trashIconDiv.appendChild(trashIcon);
  trashButton.appendChild(trashIconDiv);

  const editIconDiv = document.createElement('div');
  const editButton = document.createElement('button');
  const editIcon = document.createElement('img');
  editIcon.src = '../src/images/edit-icon.png';
  editIcon.alt = 'Edit icon';
  editIcon.classList.add('project-edit-icon');
  editIconDiv.appendChild(editIcon);
  editButton.appendChild(editIconDiv);

  li.addEventListener('click', (e) => {
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
      }
    }
  });

  li.appendChild(trashButton);
  li.appendChild(editButton);

  projectList.appendChild(li);
}
