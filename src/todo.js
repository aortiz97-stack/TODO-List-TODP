/* eslint-disable no-param-reassign */
export default function createToDo() {
  const ToDo = (
    title,
    dueDate,
    priority,
    description = undefined,
    completed = false,
    projectName = undefined,
  ) => ({
    title, description, dueDate, priority, completed, projectName,
  });
  return ToDo;
}
