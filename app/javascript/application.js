// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "trix"
import "@rails/actiontext"
import Glide from '@glidejs/glide'

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

