import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["toggle", "content"]
  static values = {
    open: { type: Boolean, default: false }
  }

  connect() {
    this.clickOutsideHandler = this.clickOutside.bind(this)
    document.addEventListener("click", this.clickOutsideHandler)
  }

  disconnect() {
    document.removeEventListener("click", this.clickOutsideHandler)
  }

  toggle(event) {
    event.stopPropagation()
    this.openValue = !this.openValue
  }

  open() {
    this.openValue = true
  }

  close() {
    this.openValue = false
  }

  openValueChanged() {
    if (this.openValue) {
      // Make content measurable
      this.contentTarget.classList.remove("hidden")
      this.contentTarget.style.visibility = "hidden"
      if (window.getComputedStyle(this.contentTarget).display === "none") {
        this.contentTarget.style.display = "block"
      }

      // Measure positions and sizes
      const contentRect = this.contentTarget.getBoundingClientRect()
      const toggleRect = this.toggleTarget.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Determine position based on available space
      const spaceBelow = viewportHeight - toggleRect.bottom
      const spaceAbove = toggleRect.top
      if (spaceBelow >= contentRect.height || spaceBelow >= spaceAbove) {
        this.contentTarget.classList.add("below")
        this.contentTarget.classList.remove("above")
      } else {
        this.contentTarget.classList.add("above")
        this.contentTarget.classList.remove("below")
      }

      // Apply visibility and animation
      this.contentTarget.style.visibility = "visible"
      this.contentTarget.classList.add("opacity-100", "scale-100")
      this.contentTarget.classList.remove("opacity-0", "scale-95")
    } else {
      // Handle closing with animation
      this.contentTarget.classList.add("opacity-0", "scale-95")
      this.contentTarget.classList.remove("opacity-100", "scale-100")
      setTimeout(() => {
        if (!this.openValue) {
          this.contentTarget.classList.add("hidden")
          this.contentTarget.classList.remove("below", "above")
          this.contentTarget.style.display = ""
          this.contentTarget.style.visibility = ""
        }
      }, 150) // Matches transition duration
    }
  }

  clickOutside(event) {
    if (this.openValue && !this.element.contains(event.target)) {
      this.close()
    }
  }
}