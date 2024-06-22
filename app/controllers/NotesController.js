import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { setHTML } from "../utils/Writer.js";

export class NotesController {

  constructor() {
    console.log("I'm here - NotesController");

    AppState.on('activeNote', this.drawActiveNote)
    this.drawNoteSelectors()
  }

  drawNoteSelectors() {
    const notes = AppState.notes
    let noteSelectorHTML = ``
    notes.forEach(note => noteSelectorHTML += note.noteSelectorTemplate)
    setHTML('noteSelector', noteSelectorHTML)
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