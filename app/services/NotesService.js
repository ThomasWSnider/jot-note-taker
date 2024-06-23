import { AppState } from "../AppState.js";
import { NotesController } from "../controllers/NotesController.js";
import { Note } from "../models/Note.js";

class NotesService {

  constructor() {
    console.log('Sup dawg');
  }


  createNewNote(noteData) {
    const notes = AppState.notes
    const newNote = new Note(noteData,)
    newNote.body = ""
    notes.push(newNote)
    this.selectActiveNote(newNote.id)
  }
  selectActiveNote(noteId) {
    const activeNote = AppState.notes.find(note => note.id == noteId)
    AppState.activeNote = activeNote
  }

  discardChanges() {
    AppState.activeNote = null
  }

  destroyNote(noteId) {
    const notes = AppState.notes
    const noteIndex = notes.findIndex((note) => note.id == noteId)
    if (noteIndex == -1) {
      console.log('Try again bucko, your find index looks a little fishy');
      return
    }
    console.log('Nice work, your ability to reference the lecture code is unparalleled');
    notes.splice(noteIndex, 1)

    console.log(notes);
  }
}

export const notesService = new NotesService()