import addItem from './add-todo-project-note';

function saveInterface(savedToDoInterface) {
  window.localStorage.setItem('savedToDoInterface', JSON.stringify(savedToDoInterface));
  console.log(`the thing here again: ${savedToDoInterface}`);
  console.log(`it is this: ${JSON.parse(window.localStorage.getItem('savedToDoInterface'))}`);
  return null;
}

if (typeof (Storage) !== 'undefined') {
  // Code for localStorage
  localStorage.clear();
  if (window.localStorage.getItem('savedToDoInterface') !== null) {
    console.log('it entered here');
    const savedToDoInterface = JSON.parse(window.localStorage.getItem('savedToDoInterface'));
    addItem(savedToDoInterface);
    window.onbeforeunload = saveInterface(savedToDoInterface);
  } else {
    console.log('oooop');
    const savedToDoInterface = addItem();
    console.log(`the thing here: ${savedToDoInterface}`);
    window.onbeforeunload = saveInterface(savedToDoInterface);
  }
} else {
  // No web storage Support.
  alert('You cannot store data locally to your device unfortunately.');
}
