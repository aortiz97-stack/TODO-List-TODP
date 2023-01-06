/* eslint-disable no-param-reassign */
export default function createToDo() {
  const ToDo = (
    title,
    dueDate,
    priority,
    description = '',
    completed = false,
    projectName = '',
  ) => ({
    title, description, dueDate, priority, completed, projectName,
  });
  return ToDo;
}
