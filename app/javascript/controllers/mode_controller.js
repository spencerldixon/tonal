import { Controller } from "@hotwired/stimulus"
import { Mode } from "tonal"

export default class extends Controller {
  static values = {
    name: String,
    tonic: String,
  }

  static targets = [ "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "name" ]

  connect() {
    let chords = Mode.seventhChords(this.nameValue, this.tonicValue);

    console.log(chords)

    this.nameTarget.innerHTML = this.tonicValue + " " + this.nameValue

    this.firstTarget.innerHTML = chords[0]
    this.secondTarget.innerHTML = chords[1]
    this.thirdTarget.innerHTML = chords[2]
    this.fourthTarget.innerHTML = chords[3]
    this.fifthTarget.innerHTML = chords[4]
    this.sixthTarget.innerHTML = chords[5]
    this.seventhTarget.innerHTML = chords[6]
  }
}
