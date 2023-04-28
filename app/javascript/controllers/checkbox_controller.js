import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="checkbox"
export default class extends Controller {
  static targets = ["box"];
  connect() {
    console.log(this.boxTarget);
  }

  check(event) {
    event.preventDefault();

    console.log("TODO: change the box to checked");
  }
}
