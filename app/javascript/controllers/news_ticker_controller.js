import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["item"]
  static values = { 
    interval: { type: Number, default: 4000 },
    transition: { type: Number, default: 600 }
  }

  connect() {
    if (!this.hasItemTarget || this.itemTargets.length === 0) {
      console.warn("No news items found");
      return;
    }

    this.currentIndex = 0;
    this.initializeFirstItem();
    this.startTicker();
  }

  disconnect() {
    this.stopTicker();
  }

  startTicker() {
    this.intervalId = setInterval(() => this.next(), this.intervalValue);
  }

  stopTicker() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  async next() {
    const current = this.currentIndex;
    const next = (this.currentIndex + 1) % this.itemTargets.length;

    await this.fadeOut(current);
    this.currentIndex = next;
    await this.fadeIn(next);
  }

  initializeFirstItem() {
    const item = this.itemTargets[0];
    item.classList.remove("hidden", "opacity-0");
    item.classList.add("active");
  }

  fadeIn(index) {
    if (!this.itemTargets[index]) return;
    
    const item = this.itemTargets[index];
    item.classList.remove("hidden", "opacity-0");
    item.classList.add("active");
    
    return new Promise(resolve => {
      setTimeout(resolve, this.transitionValue);
    });
  }

  fadeOut(index) {
    if (!this.itemTargets[index]) return;
    
    const item = this.itemTargets[index];
    item.classList.add("opacity-0");
    
    return new Promise(resolve => {
      setTimeout(() => {
        item.classList.remove("active");
        item.classList.add("hidden");
        resolve();
      }, this.transitionValue);
    });
  }
}