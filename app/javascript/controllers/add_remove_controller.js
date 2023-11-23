import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="custom-questions"
// Handles duplicating the form for a custom question in the fund builder
// Works by copying and appending an existing question div
// Set a div container to wrap all the questions with data-custom-questions-target="list"
// Set the html in a <template> tag to be copied and appended with data-custom-questions-target="template"
// Set a button to trigger adding with data-action="click->custom-questions#add:prevent"
// Set a button to trigger removing a question with data-action="click->custom-questions#remove (dont prevent the event here)"
//
export default class extends Controller {
  static targets = ["list", "template", "tonic", "mode"]

  connect() {
  }

  add() {
    console.log(this.modeTarget.value)
    // let content = this.templateTarget.innerHTML.replace(/INDEX/g, Math.floor(Date.now() + Math.random()))
    let content = this.templateTarget.innerHTML.replace(/MODE/g, this.modeTarget.value)
    content = content.replace(/TONIC/g, this.tonicTarget.value)

    this.listTarget.insertAdjacentHTML('beforeend', content)
  }

  remove(event) {
    event.preventDefault()

    let field = event.target.closest(".add-remove")
    field.style.display = 'none'
  }
}
