import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="carousel"
export default class extends Controller {
  static targets = ["slide", "slidesContainer", "indicators"]
  static values = {
    autoPlay: Boolean,
    interval: Number
  }

  connect() {
    this.slides = this.slideTargets

    if (this.slides.length === 0) {
      return
    }

    this.currentIndex = 0

    const initialActiveSlide = this.slides.findIndex(slide =>
      slide.dataset.active === "true"
    )

    if (initialActiveSlide !== -1) {
      this.currentIndex = initialActiveSlide
    }

    this.generateIndicators()
    this.updateActiveState()

    if (this.autoPlayValue) {
      this.startAutoPlay()
    }
  }

  disconnect() {
    this.stopAutoPlay()
  }

  generateIndicators() {
    this.indicatorsTarget.innerHTML = ""

    this.slides.forEach((_, index) => {
      const indicator = document.createElement("button")
      indicator.classList.add(
        "w-3", "h-3", "rounded-full", "border", "border-amber-600",
        "focus:outline-none", "focus:ring-2", "focus:ring-amber-500"
      )
      indicator.dataset.action = "carousel#goToSlide"
      indicator.dataset.index = index

      this.indicatorsTarget.appendChild(indicator)
    })
    this.indicators = Array.from(this.indicatorsTarget.children)
  }

  startAutoPlay() {
    this.autoPlayTimer = setInterval(() => {
      this.next()
    }, this.intervalValue)
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer)
    }
  }

  next() {
    this.goToSlide(this.getNextIndex())
  }

  previous() {
    this.goToSlide(this.getPreviousIndex())
  }

  goToSlide(event) {
    let index = event

    if (typeof event === "object") {
      // If event is a DOM event, extract the slide index from the target
      index = parseInt(event.currentTarget.dataset.index)
    }

    this.currentIndex = index
    this.updateActiveState()

    // Reset timer when manually changing slides
    if (this.autoPlayValue) {
      this.stopAutoPlay()
      this.startAutoPlay()
    }
  }

  updateActiveState() {
    // Update slides
    this.slides.forEach((slide, index) => {
      if (index === this.currentIndex) {
        slide.classList.add("opacity-100", "z-10")
        slide.classList.remove("opacity-0")
      } else {
        slide.classList.add("opacity-0")
        slide.classList.remove("opacity-100", "z-10")
      }
    })

    // Update indicators
    if (this.indicators) {
      this.indicators.forEach((indicator, index) => {
        if (index === this.currentIndex) {
          indicator.classList.add("bg-amber-600")
        } else {
          indicator.classList.remove("bg-amber-600")
        }
      })
    }
  }

  getNextIndex() {
    return (this.currentIndex + 1) % this.slides.length
  }

  getPreviousIndex() {
    return (this.currentIndex - 1 + this.slides.length) % this.slides.length
  }
}
