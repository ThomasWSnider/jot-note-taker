import { generateId } from "../utils/GenerateId.js"

export class Note {

  constructor(data) {
    this.title = data.title
    this.body = data.body
    this.id = generateId()
    this.dateCreated = new Date()
    this.dateUpdated = new Date()
  }


  get wordCount() {
    let wordCount = 0
    let space = false
    for (let i = 0; i < this.body.length; i++) {
      if (this.body.length[i] == "" && space == false) {
        space = true
      }
      else if (this.body.length[i] != '' && space == true) {
        space = false
        wordCount++
      }
    }
    return wordCount
  }

  get characterCount() {
    let characterCount = 0
    for (let i = 0; i < this.body.length; i++) {
      if (this.body.length[i] == '') {
        characterCount += 0
      } else {
        characterCount++
      }
    }
    return characterCount
  }



}