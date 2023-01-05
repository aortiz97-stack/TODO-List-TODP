export default function populateForm(form) {
  const htmlList = [];
  function createNotRadioInputHTML(nameOfLabel, typeOfInput) {
    const input = document.createElement('input');
    const label = document.createElement('label');
    label.for = nameOfLabel;
    input.name = nameOfLabel;
    input.id = nameOfLabel;
    input.type = typeOfInput;
    label.innerHTML = nameOfLabel.charAt(0).toUpperCase() + nameOfLabel.slice(1);
    label.appendChild(input);

    htmlList.push(label);
  }
  function createRadioInputHTML(radioInputValues, radioInputName) {
    for (let i = 0; i < radioInputValues.length; i += 1) {
      const labelInputDiv = document.createElement('div');

      const label = document.createElement('label');
      label.for = radioInputValues[i];
      label.innerHTML = (radioInputValues[i])[0].toUpperCase() + (radioInputValues[i]).slice(1);
      const radioInput = document.createElement('input');
      radioInput.id = radioInputValues[i];
      radioInput.value = radioInputValues[i];
      radioInput.name = radioInputName;
      radioInput.type = 'radio';

      labelInputDiv.appendChild(radioInput);
      labelInputDiv.appendChild(label);
      htmlList.push(labelInputDiv);
    }
  }

  createNotRadioInputHTML('title', 'text');
  createNotRadioInputHTML('description', 'textarea');
  createNotRadioInputHTML('due date', 'date');

  const priorityLabel = document.createElement('div');
  priorityLabel.innerHTML = 'Priority';
  htmlList.push(priorityLabel);

  createRadioInputHTML(['low', 'medium', 'high'], 'priority');

  const statusLabel = document.createElement('div');
  statusLabel.innerHTML = 'Status';
  htmlList.push(statusLabel);

  createRadioInputHTML(['completed'], 'completed');
  createNotRadioInputHTML('project', 'text');

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.innerHTML = 'Submit';
  htmlList.push(submitButton);

  for (let i = 0; i < htmlList.length; i += 1) {
    form.appendChild(htmlList[i]);
  }

  const finalForm = form;
  return finalForm;
}
