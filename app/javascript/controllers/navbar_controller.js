import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["mobileMenu"]
  
  connect() {
    console.log("Navbar controller connected")
    
    // Handle responsive behavior
    this.handleResize = this.handleResize.bind(this)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }
  
  disconnect() {
    window.removeEventListener('resize', this.handleResize)
  }
  
  handleResize() {
    if (window.innerWidth >= 1024) { // lg breakpoint
      this.mobileMenuTarget.classList.add('hidden')
    }
  }
  
  toggleMobileMenu() {
    this.mobileMenuTarget.classList.toggle('hidden')
  }
}