export default function createProject() {
  const Project = () => {
    let toDoList = [];

    const getToDoList = () => toDoList;

    const addToDoList = (toDo) => toDoList.push(toDo);

    const removetoDoList = (toDo) => {
      const index = toDoList.indexOf(toDo);
      toDoList = toDoList.splice(index, 1);
    };
    const moveToDoinList = (oldIndex, newIndex) => {
      const toMoveElement = toDoList[oldIndex];
      toDoList = toDoList.splice(newIndex, 0, toMoveElement);
    };

    return {
      getToDoList, addToDoList, removetoDoList, moveToDoinList,
    };
  };

  return Project;
}
