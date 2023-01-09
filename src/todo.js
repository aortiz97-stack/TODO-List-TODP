/* eslint-disable no-param-reassign */
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

export default ToDo;
