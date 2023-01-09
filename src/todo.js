/* eslint-disable no-param-reassign */
export default function createToDo() {
  const ToDo = (
    title,
    dueDate,
    priority,
    description = '',
    completed = false,
    projectName = '',
  ) => {
    const removeProjectName = () => {
      projectName = '';
    };
    return {
      title, description, dueDate, priority, completed, projectName, removeProjectName,
    };
  };
  return ToDo;
}
