import { addExitButton } from './add-todo';

export default function createNoteDivs(savedToDoInterface) {
  const { noteMasterList } = savedToDoInterface;
  const outerContentContainer = document.querySelector('.outer-content-container');
  outerContentContainer.innerHTML = '';

  for (let i = 0; i < noteMasterList.length; i += 1) {
    const noteDiv = document.createElement('div');
    noteDiv.appendChild(noteMasterList[i].details);
    noteDiv.classList.add('note');

    addExitButton(noteDiv, noteMasterList[i], savedToDoInterface, 'note');
    outerContentContainer.appendChild(noteDiv);
  }
}
