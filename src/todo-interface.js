const toDoInterface = (() => {
  let toDoMasterList = [];
  let projectMasterList = [];
  let noteMasterList = [];

  const getToDoMasterList = () => toDoMasterList;
  const getProjectMasterlist = () => projectMasterList;
  const getNoteMasterList = () => noteMasterList;

  const setToDoMasterList = (newToDoList) => { toDoMasterList = newToDoList; };
  const setProjectMasterList = (newProjectList) => { projectMasterList = newProjectList; };
  const setNoteMasterList = (newNotesList) => { noteMasterList = newNotesList; };

  const addObjectToMasterList = (objectType, object, index = undefined) => {
    let returnedList;
    if (objectType === 'todo') {
      returnedList = getToDoMasterList();
    } else if (objectType === 'project') {
      returnedList = getProjectMasterlist();
    } else if (objectType === 'note') {
      returnedList = getNoteMasterList();
    }

    let finalIndex;
    if (index === undefined) {
      finalIndex = returnedList.length - 1;
    } else {
      finalIndex = index;
    }
    returnedList.splice(finalIndex, 0, object);

    if (objectType === 'todo') {
      setToDoMasterList(returnedList);
    } else if (objectType === 'project') {
      setProjectMasterList(returnedList);
    } else if (objectType === 'note') {
      setNoteMasterList(returnedList);
    }
  };

  const removeObjectFromMasterList = (objectType, object) => {
    let returnedList;
    if (objectType === 'todo') {
      returnedList = getToDoMasterList();
    } else if (objectType === 'project') {
      returnedList = getProjectMasterlist();
    } else if (objectType === 'note') {
      returnedList = getNoteMasterList();
    }
    const index = returnedList.indexOf(object);
    returnedList.splice(index, 1);

    if (objectType === 'todo') {
      setToDoMasterList(returnedList);
    } else if (objectType === 'project') {
      setProjectMasterList(returnedList);
    } else if (objectType === 'note') {
      setNoteMasterList(returnedList);
    }
  };

  const addToDoDefault = (toDo) => { addObjectToMasterList('todo', toDo); };
  const addToDoProject = (toDo) => {
    const toDoProject = toDo.projectName.toLowerCase();
    const projectList = getProjectMasterlist();
    for (let i = 0; i < projectList.length; i += 1) {
      const project = projectList[i].projectName.toLowerCase();
      if (toDoProject === project) {
        projectList[i].addToDoList(toDo);
        break;
      }
    }
  };
  const addToDo = (toDo) => {
    addToDoDefault(toDo);
    addToDoProject(toDo);
  };

  const removeToDoDefault = (toDo) => { removeObjectFromMasterList('todo', toDo); };
  const removeToDoProject = (toDo) => {
    const toDoProject = toDo.projectName.toLowerCase();
    const projectList = getProjectMasterlist();
    for (let i = 0; i < projectList.length; i += 1) {
      const project = projectList[i].projectName.toLowerCase();
      if (toDoProject === project) {
        projectList[i].removeToDoList(toDo);
        toDo.removeProjectName();
        break;
      }
    }
  };
  const removeToDo = (toDo) => {
    removeToDoDefault(toDo);
    removeToDoProject(toDo);
  };

  const addProject = (newProject) => {
    addObjectToMasterList('project', newProject);
    const masterToDoList = getToDoMasterList();
    for (let i = 0; i < masterToDoList.length; i += 1) {
      const toDo = masterToDoList[i];
      if (toDo.projectName.toLowerCase() === newProject.projectName.toLowerCase()) {
        newProject.addToDoList(toDo);
      }
    }
  };

  const removeProject = (project) => {
    for (let i = 0; i < toDoMasterList.length; i += 1) {
      toDoMasterList[i].removeProjectName();
    }
    removeObjectFromMasterList('project', project);
  };

  return {
    toDoMasterList,
    projectMasterList,
    noteMasterList,
    addToDo,
    removeToDo,
    addProject,
    removeProject,
  };
})();

export default toDoInterface;
