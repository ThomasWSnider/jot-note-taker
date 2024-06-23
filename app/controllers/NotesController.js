
import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML, setText } from "../utils/Writer.js";

export class NotesController {

  constructor() {
    console.log("I'm here - NotesController");

    AppState.on('activeNote', this.drawActiveNote)
    this.drawNoteSelectors()
  }

  createNewNote() {
    event.preventDefault()
    console.log('You are trying to create a new note, check back in an hour');
    const form = event.target
    const noteData = getFormData(form)
    console.log('Here are the note deets', noteData);
    notesService.createNewNote(noteData)
    this.closeOffCanvas()
  }

  closeOffCanvas() {
    const closeButton = document.getElementById('offCanvasClose')
    closeButton.click()
  }

  drawNoteSelectors() {
    const notes = AppState.notes
    let noteSelectorHTML = ``
    notes.forEach(note => noteSelectorHTML += note.noteSelectorTemplate)
    setHTML('noteSelector', noteSelectorHTML)
    this.drawNotesQuantity()
  }

  drawNotesQuantity() {
    const noteTotal = AppState.notes.length
    let notesQuantity = `Notes: ${noteTotal}`
    setText('notesQuantity', notesQuantity)
  }

  drawActiveNote() {
    console.log('message received from DOM');
    const activeNote = AppState.activeNote
    let activeNoteHTML = activeNote.activeNoteTemplate
    setHTML('activeNote', activeNoteHTML)
  }

  selectActiveNote(noteId) {
    notesService.selectActiveNote(noteId)
  }
}