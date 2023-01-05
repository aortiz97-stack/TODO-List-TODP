export default function createProject() {
  const Project = (projectName) => {
    const toDoList = [];

    const addToDoList = (toDo) => {
      toDoList.project = projectName;
      toDoList.push(toDo);
    };

    const removeToDoList = (toDo) => {
      const index = toDoList.indexOf(toDo);
      toDoList.splice(index, 2);
    };
    const moveToDoinList = (oldIndex, newIndex) => {
      const toMoveElement = toDoList[oldIndex];
      toDoList.splice(newIndex, 0, toMoveElement);
    };

    return {
      toDoList, addToDoList, removeToDoList, moveToDoinList, projectName,
    };
  };

  return Project;
}
