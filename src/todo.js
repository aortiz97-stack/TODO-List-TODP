const ToDo = (
  title,
  dueDate,
  priority,
  description = '',
  status = 'not completed',
  project = '',
) => {
  const projectName = project;

  const removeProjectName = () => {
    // eslint-disable-next-line no-use-before-define
    obj.projectName = '';
  };

  const obj = {
    title, description, dueDate, priority, status, projectName, removeProjectName,
  };

  return obj;
};
export default ToDo;
