import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tab"
export default class extends Controller {
  static targets = ["tab", "panel"]

  connect() {
    this.switch({ currentTarget: this.tabTargets[0] })
  }

  switch(event) {
    console.log("Tab switched");

    const clickedTab = event.currentTarget
    const tabIndex = parseInt(clickedTab.dataset.tabIndex)

    this.tabTargets.forEach((tab, index) => {
      if (index === tabIndex) {
        tab.classList.remove(...tab.dataset.inactiveClass.split(" "))
        tab.classList.add(...tab.dataset.activeClass.split(" "))
      } else {
        tab.classList.remove(...tab.dataset.activeClass.split(" "))
        tab.classList.add(...tab.dataset.inactiveClass.split(" "))
      }
    })

    console.log("Panel switched", tabIndex);
    
    this.panelTargets.forEach((panel, index) => {
      console.log("Panel index", index);
      
      if (index === tabIndex) {
        if (panel.classList.contains("hidden")) {
          panel.classList.remove("hidden")
        }
      } else {
        panel.classList.add("hidden")
      }
    })
  }
}