import './todo';
import './project';

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
    const index = returnedList.indexOf(object);
    if (objectType === 'todo') {
      returnedList = getToDoMasterList();
    } else if (objectType === 'project') {
      returnedList = getProjectMasterlist();
    } else if (objectType === 'note') {
      returnedList = getNoteMasterList();
    }
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
  const addToDo = (toDo) => {
    addToDoDefault(toDo);
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

  const removeToDoDefault = (toDo) => { removeObjectFromMasterList('todo', toDo); };
  const removeToDo = (toDo) => {
    removeToDoDefault(toDo);
    const toDoProject = toDo.projectName.toLowerCase();
    const projectList = getProjectMasterlist();
    for (let i = 0; i < projectList.length; i += 1) {
      const project = projectList[i].projectName.toLowerCase();
      if (toDoProject === project) {
        projectList[i].removeToDoList(toDo);
        break;
      }
    }
  };

  const createNewProject = (newProject) => {
    addObjectToMasterList('project', newProject);

    const { toDoList } = newProject;

    for (let i = 0; i < toDoList.length; i += 1){
      
    }

    
  };

  return {
    toDoMasterList, projectMasterList, noteMasterList, addToDo, removeToDo,
  };
})();

export default toDoList;
