import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toast"
export default class extends Controller {
  static targets = ["container", "notification", "message"];
  connect() {
    if (this.messageTarget.textContent.trim()) {
      this.show();
    }
  }

  show() {
    this.containerTarget.classList.remove("hidden");
    this.notificationTarget.classList.add("animate-slide-in");
    setTimeout(() => this.dismiss(), 5000);
  }

  dismiss() {
    this.notificationTarget.classList.remove("animate-slide-in");
    this.notificationTarget.classList.add("animate-slide-out");
    // Wait for animation to finish before hiding
    setTimeout(() => {
      this.containerTarget.classList.add("hidden");
      this.notificationTarget.classList.remove("animate-slide-out");
    }, 300);
  }
}
