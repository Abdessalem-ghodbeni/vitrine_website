import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngAfterViewInit() {
    this.initSwiper();
  }

  private initSwiper() {
    const swiperOptions: SwiperOptions = {
      effect: 'fade',
      speed: 1500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true, // Ajout important pour le défilement continu
    };

    new Swiper('.swiper-img-scale', swiperOptions);
  }
}
