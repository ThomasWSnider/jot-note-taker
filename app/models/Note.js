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
            <div class="col-8 note-selector border-dark ms-2 d-flex" role="button" data-bs-dismiss="offcanvas"
              onclick="app.NotesController.selectActiveNote('${this.id}')">
              <h5>> ${this.title}</h5>
            </div>
            <div class="col-3">
              <i class="mdi mdi-circle-slice-8"></i>
            </div>
    `
  }


  get activeNoteTemplate() {
    return `
            <div class="col-12 mt-3  shadow mt-5 border-3 border border-dark rounded">
              <div class="row">
                <div class="col-5 text-light d-flex flex-column justify-content-between">
                  <div>
                    <h2 class="mb-5">${this.title} <i class="mdi mdi-circle-slice-8 fs-5 text-dark"></i></h2>
                    <div>
                      <h5 class="mb-3">Created At: ${this.dateCreated}</h5>
                      <h5 class="mb-3">Last Updated: ${this.dateUpdated}</h5>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h6>Word Count: ${this.wordCount}</h6>
                    <h6 class="mx-auto">Character Count: ${this.characterCount}</h6>
                  </div>
                </div>
                <div class="col-7">
                  <form class="m-3">
                    <div class="form-floating">
                      <textarea class="form-control border-dark border border-3" placeholder="Leave a comment here"
                        id="floatingTextarea2">${this.body}</textarea>
                      <label for="floatingTextarea2">${this.title}</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
    `
  }


}