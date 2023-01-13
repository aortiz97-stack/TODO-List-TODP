import { addExitButton } from './add-todo';
import Note from './note';
import toDoInterface from './todo-interface';

export default function createNoteDiv() {
  const noteDiv = document.createElement('div');
  const textArea = document.createElement('textarea');

  noteDiv.appendChild(textArea);
  noteDiv.classList.add('note');

  const note = Note(textArea);

  addExitButton(noteDiv, note, 'note');

  return note;
}
