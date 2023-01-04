/* eslint-disable no-param-reassign */
export default function createToDo() {
  const ToDo = (title, description, dueDate, priority, completed) => ({
    title, description, dueDate, priority, completed,
  });
  return ToDo;
}
