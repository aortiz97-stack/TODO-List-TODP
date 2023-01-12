/* eslint-disable no-use-before-define */
const Project = (projectName) => {
  const toDoList = [];

  const addToDoList = (toDo) => {
    toDoList.project = projectName;
    toDoList.push(toDo);
  };

  const removeToDoList = (toDo) => {
    const index = toDoList.indexOf(toDo);
    toDoList.splice(index, 1);
  };

  const changeToDoProjectNames = (newProjectName) => {
    for (let i = 0; i < toDoList.length; i += 1) {
      toDoList.projectName = newProjectName;
    }

    obj.projectName = newProjectName;
  };

  const obj = {
    toDoList, addToDoList, removeToDoList, projectName, changeToDoProjectNames,
  };

  return obj;
};

export default Project;
