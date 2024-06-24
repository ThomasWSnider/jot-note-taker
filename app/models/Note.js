import { generateId } from "../utils/GenerateId.js"

export class Note {

  constructor(data) {
    this.title = data.title
    this.body = data.body
    this.theme = data.theme
    this.id = generateId()
    this.dateCreated = data.dateCreated ? new Date(data.dateCreated) : new Date()
    this.dateUpdated = data.dateUpdated ? new Date(data.dateUpdated) : new Date()
  }


  get wordCount() {
    let wordCount = 0
    let space = false
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i] == " " && space == false) {
        space = true
      }
      else if (this.body[i] != ' ' && space == true) {
        space = false
        wordCount++
      }
    }
    return wordCount
  }

  get characterCount() {
    let characterCount = 0
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i] != ' ') {
        characterCount++
      }
    }
    return characterCount
  }

  get noteSelectorTemplate() {
    return `
            <div class="col-6 ms-2 d-flex mb-2" role="button" data-bs-dismiss="offcanvas"
              onclick="app.NotesController.selectActiveNote('${this.id}')">
              <h5 class="m-0"> ${this.title}</h5>
            </div>
            <div class="col-1 d-flex align-items-center mb-2">
              <i class="mdi mdi-circle-slice-8" style="color:${this.theme}"></i>
            </div>
            <div class="col-3 d-flex align-items-center mb-2">
              <h4 class="fs-5">${this.shortDate}</h4>
            </div>
            <hr>
    `
  }

  get activeNoteTemplate() {
    return `
        <div class="col-12 p-3 active-note rounded" style="border: 3px solid ${this.theme};">
          <div class="row">
            <div class="col-5 text-light">
              <div class="row">
                <div class="col-12">
                  <h2 class="mb-4">
                    ${this.title}
                    <i class="mdi mdi-circle-slice-8" style="color: ${this.theme};"></i>
                  </h2>
                </div>
                <div class="col-12 text-light">
                  <h5 class="mb-3">Created: ${this.longDate}</h5>
                  <h5 class="mb-3">Updated: ${this.updatedDate}</h5>
                </div>
                <div class="col-12">
                  <div class="text-center mt-3">
                    <button type="button" class="btn btn-danger text-light mx-auto" title="Delete Note"
                      onclick="app.NotesController.destroyNote('${this.id}')">
                      <i class="mdi mdi-trash-can-outline"></i>
                    </button>
                    <button form="activeNoteBody" id="saveBtn" class="btn btn-success text-light mx-auto ms-5"
                      title="Save Note" type="submit">
                      <i class="mdi mdi-content-save-outline"></i>
                    </button>
                  </div>
                </div>
                <div class="mb-0 mt-5 text-light">
                  <div class="d-flex">
                    <h6 id="wordCount">Word Count: ${this.wordCount}</h6>
                    <h6 id="characterCount" class="mx-auto">Character Count: ${this.characterCount}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-7 text-end">
              <button id="discardChangesBtn" type="button" class="btn btn primaryms-auto fs-3"
                style="background-color: #373a66;" onclick="app.NotesController.closeNote()">
                <i class="mdi mdi-close text-light"></i>
              </button>
              <form onsubmit="app.NotesController.saveActiveNote()" class="d-flex" id="activeNoteBody">
                <div class="form-floating w-100" for="body">
                  <textarea class="form-control border-dark border-3" name="body" id="body" placeholder="Make a Note">${this.body}</textarea>
                  <label for="body">${this.title}</label>
                </div>
              </form>
            </div>
          </div>
        </div>
    `
  }

  get shortDate() {
    return this.dateCreated.toLocaleDateString()
  }

  get longDate() {
    return this.dateCreated.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  get updatedDate() {
    return this.dateUpdated.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  }
}