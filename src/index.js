import addItem from './add-todo-project-note';

if (typeof (Storage) !== 'undefined') {
  // Code for localStorage
  if (window.localStorage.getItem('savedToDoInterface') !== null) {
    console.log('it entered here');
    const savedToDoInterface = JSON.parse(window.localStorage.getItem('savedToDoInterface'));
    console.log(`the saved interface: ${savedToDoInterface}`);
    addItem(savedToDoInterface);
  } else {
    console.log('oooop');
    const savedToDoInterface = addItem();
    console.log(`the thing here: ${savedToDoInterface}`);
  }
} else {
  // No web storage Support.
  alert('You cannot store data locally to your device unfortunately.');
}
