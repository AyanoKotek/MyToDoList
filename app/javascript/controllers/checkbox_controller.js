import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="checkbox"
export default class extends Controller {
  static targets = ["checkbox"];

  connect() {
    console.log("hey");
    console.log(this.checkboxTarget.checked); //ok
  }

  toggle() {
    // console.log(this.checkboxTarget.checked);
    // this.checkboxTarget;
  }
}
