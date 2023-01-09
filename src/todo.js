const ToDo = (
  title,
  dueDate,
  priority,
  description = '',
  completed = false,
  project = '',
) => {
  const projectName = project;

  const removeProjectName = () => {
    // eslint-disable-next-line no-use-before-define
    obj.projectName = '';
  };

  const obj = {
    title, description, dueDate, priority, completed, projectName, removeProjectName,
  };

  return obj;
};
export default ToDo;
