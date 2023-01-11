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

  projectList.appendChild(li);
}
