import { AppState } from "../AppState.js";
import { NotesController } from "../controllers/NotesController.js";
import { Note } from "../models/Note.js";
import { loadState, saveState } from "../utils/Store.js";

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

  resetView() {
    AppState.activeNote = null
  }

  saveActiveNote(newData) {
    const note = AppState.activeNote
    note.body = newData
    note.dateUpdated = new Date()
    AppState.emit('activeNote')
    this.saveNote()
  }

  loadNotes() {
    AppState.notes = loadState('my-field-notes', [Note])
  }

  saveNote() {
    saveState('my-field-notes', AppState.notes)
  }

  destroyNote(noteId) {
    const notes = AppState.notes
    const noteIndex = notes.findIndex((note) => note.id == noteId)
    if (noteIndex == -1) {
      console.log('Try again bucko, your find index looks a little fishy');
      return
    }
    notes.splice(noteIndex, 1)
    this.resetView()
    this.saveNote()
  }
}

export const notesService = new NotesService()