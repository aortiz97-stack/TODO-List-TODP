export default function createProject() {
  const Project = () => {
    const toDoList = [];

    const getToDoList = () => toDoList;

    const addToDoList = (toDo) => toDoList.push(toDo);

    const removeToDoList = (toDo) => {
      const index = toDoList.indexOf(toDo);
      toDoList.splice(index, 1);
    };
    const moveToDoinList = (oldIndex, newIndex) => {
      const toMoveElement = toDoList[oldIndex];
      toDoList.splice(newIndex, 0, toMoveElement);
    };

    return {
      getToDoList, addToDoList, removeToDoList, moveToDoinList,
    };
  };

  return Project;
}
