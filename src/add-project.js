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

  const trashIconDiv = document.createElement('div');
  const trashButton = document.createElement('button');
  const trashIcon = document.createElement('img');
  trashIcon.src = '../src/images/trash-icon.png';
  trashIcon.alt = 'Trash icon';
  trashIcon.id = 'trash-project-icon';
  li.addEventListener('click', (e) => {
    const projectUl = document.querySelector('#project-list');
    if (e.target === trashIcon) {
      projectUl.removeChild(li);
    }
    projectUl.removeChild(e.target);
  });
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

  li.appendChild(trashButton);
  li.appendChild(editButton);

  projectList.appendChild(li);
}
