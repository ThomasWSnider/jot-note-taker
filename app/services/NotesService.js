import { AppState } from "../AppState.js";

class NotesService {

  constructor() {
    console.log('Sup dawg');
  }

  selectActiveNote(noteId) {
    const activeNote = AppState.notes.find(note => note.id == noteId)
    AppState.activeNote = activeNote
  }

}

export const notesService = new NotesService()