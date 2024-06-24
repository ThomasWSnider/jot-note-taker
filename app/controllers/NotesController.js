
import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML, setText } from "../utils/Writer.js";

export class NotesController {

  constructor() {
    console.log("I'm here - NotesController");
    notesService.loadNotes()
    this.drawNoteSelectors()

    AppState.on('activeNote', this.drawActiveNote)
    AppState.on('notes', this.drawNoteSelectors)
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

  drawWordAndCharacterCount() {
    debugger
    const activeNote = AppState.activeNote
    let wordCountInnerText = `Word Count: ${activeNote.wordCount}`
    let characterCountInnerText = `Character Count: ${activeNote.characterCount}`
    setText('wordCount', wordCountInnerText)
    setText('characterCount', characterCountInnerText)
  }

  discardChanges() {
    const saveButton = document.getElementById('saveBtn')
    saveButton.click()
    console.log('discarding changes');
    notesService.resetView()
  }

  drawNoteSelectors() {
    const notes = AppState.notes
    let noteSelectorHTML = ``
    notes.forEach(note => noteSelectorHTML += note.noteSelectorTemplate)
    setHTML('noteSelector', noteSelectorHTML)

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

  saveActiveNote() {
    event.preventDefault()
    const form = event.target
    console.log('got the form');
    // @ts-ignore
    const textarea = form.body
    const newData = textarea.value
    notesService.saveActiveNote(newData)
  }

  destroyNote(noteId) {
    const wantsToDestroyNote = window.confirm('This will destroy your note. YOU CANNOT GET IT BACK! Do you wish to continue?')
    if (!wantsToDestroyNote) {
      return
    }
    notesService.destroyNote(noteId)
  }
}