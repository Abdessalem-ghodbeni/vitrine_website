import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { DemarcheComponent } from '../demarche/demarche.component';
import { ChiffreComponent } from '../chiffre/chiffre.component';
import { FQComponent } from '../fq/fq.component';
// Dans votre composant ou fichier global styles.css

// Configurez Swiper pour utiliser les modules nécessaires
Swiper.use([Autoplay, EffectFade, Pagination]);
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    ServicesComponent,
    DemarcheComponent,
    ChiffreComponent,
    FQComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngAfterViewInit() {
    this.initSwiper();
  }

  private initSwiper() {
    new Swiper('.swiper-img-scale', {
      // Modules nécessaires
      modules: [Autoplay, EffectFade, Pagination],

      // Configuration spécifique
      effect: 'fade',
      fadeEffect: {
        crossFade: true, // Important pour un fondu fluide
      },
      speed: 1500,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,

      // Paramètres critiques pour Angular
      observer: true, // Surveille les changements du DOM
      observeParents: true, // Surveille les changements des parents
      observeSlideChildren: true, // Surveille les changements des slides

      // Initialisation
      init: true,
    });
  }
}
