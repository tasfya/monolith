import { Controller } from "@hotwired/stimulus"
import Glide from '@glidejs/glide'

export default class extends Controller {
  connect() {
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      autoplay: 2000,
      hoverpause: true,
      perView: 4,
      breakpoints: {
        1024: {
          perView: 3
        },
        768: {
          perView: 1
        }
      }
    }).mount()
  }
  
  preventDefault(event) {
    event.preventDefault()
  }
}
