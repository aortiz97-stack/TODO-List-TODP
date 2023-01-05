/* eslint-disable no-param-reassign */
export default function createToDo() {
  const ToDo = (title, description, dueDate, priority, completed, project = null) => ({
    title, description, dueDate, priority, completed, project,
  });
  return ToDo;
}
