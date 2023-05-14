import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="checkbox"
export default class extends Controller {
  static targets = ["completed"];

  connect() {
    console.log("hey");
    console.log(this.completedTarget); //ok
  }

  toggle(event) {
    let formData = new FormData();
    formData.append("task[completed]", this.completedTarget.checked);
    console.log(formData);
    fetch(this.data.get("update-url"), {
      body: formData,
      method: "PATCH",
      dataType: "script",
      credentials: "include",
      headers: { "X-CSRF-Token": getMetaValue("csrf-token") },
    })
      .then(function (response) {
        if (response.status != 204) {
          event.target.checked = !event.target.checked;
        }
      })
      .then((data) => {
        console.log(data);
      });
  }
}
