import { addExitButton } from './add-todo';
import toDoInterface from './todo-interface';

export default function createNoteDivs() {
  const { noteMasterList } = toDoInterface;
  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.innerHTML = '';

  for (let i = 0; i < noteMasterList.length; i += 1) {
    const noteDiv = document.createElement('div');
    noteDiv.appendChild(noteMasterList[i].details);
    noteDiv.classList.add('note');

    addExitButton(noteDiv, noteMasterList[i], 'note');
    outerContentContainer.appendChild(noteDiv);
  }
}
