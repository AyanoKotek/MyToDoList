import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="checkbox"
export default class extends Controller {
  static targets = ["box", "form"];
  connect() {
    console.log(this.boxTarget);
    console.log(this.formTarget);
  }

  check(event) {
    console.log("TODO: change the box to checked");
    // console.log(event.currentTarget);
    // console.log(event.target);
    const checkedTag =
      '<i class="fa-regular fa-square-check checkbox"  data-checkbox-target="box" data-action="click->checkbox#check"></i>';
    const uncheckedTag =
      '<i class="fa-regular fa-square checkbox" data-checkbox-target="box" data-action="click->checkbox#check"></i>';
    if (this.boxTarget.outerHTML === uncheckedTag) {
      this.boxTarget.outerHTML = checkedTag;
    } else {
      this.boxTarget.outerHTML = uncheckedTag;
    }
  }
}
