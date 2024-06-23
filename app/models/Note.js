import { generateId } from "../utils/GenerateId.js"

export class Note {

  constructor(data) {
    this.title = data.title
    this.body = data.body
    this.theme = data.theme
    this.id = generateId()
    this.dateCreated = new Date()
    this.dateUpdated = new Date()
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
      <div class="col-12 p-3 active-note rounded" style="border: 3px solid ${this.theme}">
        <div class="row">
          <div class="col-5 text-light me-auto">
            <div>
              <h2 class="mb-5">${this.title} <i class="mdi mdi-circle-slice-8 fs-5" style="color: ${this.theme}"></i>
              </h2>
            </div>
          </div>
          <div class="col-3 text-end">
            <button id="offCanvasClose" type="button" class="btn btn-primary ms-auto fs-3"
              style="background-color: #373a66;" onclick="app.NotesController.discardChanges()" aria-label="Close"><i
                class="mdi mdi-close"></i></button>
          </div>
          <div class="col-5  d-flex flex-column justify-content-between">
            <div class="text-light">
              <h5 class="mb-3">Created: ${this.longDate}</h5>
              <h5 class="mb-3">Last Updated: ${this.updatedDate}</h5>
            </div>
            <div class="d-flex justify-content-between mb-0 text-light">
              <h6>Word Count: ${this.wordCount}</h6>
              <h6 class="mx-auto">Character Count: ${this.characterCount}</h6>
            </div>
          </div>
          <div class="col-7">
            <form class="m-3">
              <div class="form-floating">
                <textarea class="form-control border-dark border border-3" placeholder="Make a Note "
                  id="floatingTextarea2">${this.body}</textarea>
                <label for="floatingTextarea2">${this.title}</label>
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
    return this.dateCreated.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour12: true, hour: '2-digit', minute: '2-digit' })
  }
}