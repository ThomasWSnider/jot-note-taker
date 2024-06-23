
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
    const form = event.target
    const noteData = getFormData(form)
    notesService.createNewNote(noteData)
    // @ts-ignore
    form.reset()
    this.closeOffCanvas()
  }

  closeOffCanvas() {
    const closeButton = document.getElementById('offCanvasClose')
    closeButton.click()
  }

  discardChanges() {
    const confirm = window.confirm('This will discard all changes. Do you wish to continue?')
    if (!confirm) {
      return
    }
    console.log('discarding changes');
    notesService.discardChanges()
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
    const activeNote = AppState.activeNote
    let activeNoteHTML = ``
    if (activeNote != null) {
      activeNoteHTML += activeNote.activeNoteTemplate
    }
    setHTML('activeNote', activeNoteHTML)
  }

  selectActiveNote(noteId) {
    notesService.selectActiveNote(noteId)
  }

  destroyNote(noteId) {
    const wantsToDestroyNote = window.confirm('This will destroy your note. YOU CANNOT GET IT BACK! Do you wish to continue?')
    if (!wantsToDestroyNote) {
      return
    }
    notesService.destroyNote(noteId)
  }
}