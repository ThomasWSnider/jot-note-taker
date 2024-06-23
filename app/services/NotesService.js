import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";

class NotesService {

  constructor() {
    console.log('Sup dawg');
  }


  createNewNote(noteData) {
    const notes = AppState.notes
    const newNote = new Note(noteData)
    newNote.body = ""
    notes.push(newNote)
    this.selectActiveNote(newNote.id)
  }
  selectActiveNote(noteId) {
    const activeNote = AppState.notes.find(note => note.id == noteId)
    AppState.activeNote = activeNote
  }

}

export const notesService = new NotesService()