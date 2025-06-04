import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  ngAfterViewInit() {
    this.initCarousel();
  }

  private initCarousel() {
    // Enregistrer le module Autoplay
    Swiper.use([Autoplay]);

    new Swiper('.swiper-carousel', {
      modules: [Autoplay],
      spaceBetween: 50,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        waitForTransition: false,
      },
      loop: true,
      loopAdditionalSlides: 10, // Important pour le défilement fluide
      allowTouchMove: false, // Désactive les interactions tactiles
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
        1400: { slidesPerView: 5 },
      },
      on: {
        init: function (this: Swiper) {
          // Optimisation pour le défilement continu
          this.autoplay?.stop();
          setTimeout(() => {
            this.autoplay?.start();
          }, 100);
        },
      },
    });
  }
}
