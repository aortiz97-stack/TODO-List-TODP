export default function populateInitialFormProject(form) {
  const labelInputDiv = document.createElement('div');

  const label = document.createElement('label');
  label.for = 'project-name';
  label.innerHTML = 'Project name ';

  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'project-name';

  labelInputDiv.appendChild(label);
  labelInputDiv.appendChild(input);

  form.appendChild(labelInputDiv);

  const submit = document.createElement('button');
  submit.id = 'submit';
  submit.innerHTML = 'Submit';

  form.appendChild(submit);
  const finalForm = form;
  finalForm.id = 'project';

  return finalForm;
}
