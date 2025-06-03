import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeZoom', [
      state('void', style({ opacity: 0, transform: 'scale(0.95)' })),
      transition('void => *', [
        animate('1500ms ease-in', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition('* => void', [
        animate(
          '1500ms ease-out',
          style({ opacity: 0, transform: 'scale(1.05)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  images = [
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1935&q=80',
  ];

  currentIndex = 0;
  private interval: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopCarousel() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopCarousel();
    this.startCarousel();
  }
  carouselSlides = [
    {
      image: 'assets/images/bg/10.jpg',
      tag: '♿ Inclusion & Accessibilité',
      titleHighlight: 'Bureau d’Architectes',
      title: 'Equinox 9',
      description:
        'Nous concevons des espaces adaptés à tous, en plaçant l’humain et l’accessibilité au cœur de nos projets.',
      buttonText: 'En savoir plus',
      buttonLink: '#services',
      buttonClass: 'btn-white',
      active: true,
    },
    {
      image: 'assets/images/home/femme-explique.jpg',
      tag: '🤝 Collaboration',
      titleHighlight: 'Accompagnement',
      title: 'Personnalisé',
      description:
        'Notre équipe écoute, conseille et met en forme vos idées pour donner vie à vos ambitions architecturales.',
      buttonText: 'Découvrez notre équipe',
      buttonLink: '#equipe',
      buttonClass: 'btn-primary',
      active: false,
    },
    {
      image: 'assets/equinox/archi.jpg',
      tag: '🏗️ Conception',
      titleHighlight: 'Projets sur-mesure',
      title: 'Innovants',
      description:
        'Des esquisses à la réalisation, nous créons des espaces uniques en respectant votre budget et vos délais.',
      buttonText: 'Voir nos réalisations',
      buttonLink: '#realisations',
      buttonClass: 'btn-white',
      active: false,
    },
    {
      image: 'assets/equinox/archi1.jpeg',
      tag: '📐 Expertise Technique',
      titleHighlight: 'Plans & Dessins',
      title: 'Professionnels',
      description:
        'Grâce à notre savoir-faire technique et notre créativité, chaque détail de vos plans est maîtrisé.',
      buttonText: 'Contactez-nous',
      buttonLink: '#contact',
      buttonClass: 'btn-primary',
      active: false,
    },
  ];

  private intervalId: any;
  currentSlideIndex = 0;

  // ngOnInit(): void {
  //   this.startAutoSlide();
  // }

  // ngOnDestroy(): void {
  //   this.stopAutoSlide();
  // }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 1000); // Changement toutes les 4 secondes
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // nextSlide(): void {
  //   const nextIndex = (this.currentSlideIndex + 1) % this.carouselSlides.length;
  //   this.goToSlide(nextIndex);
  // }

  // goToSlide(index: number): void {
  //   // Désactiver toutes les slides
  //   this.carouselSlides.forEach((slide) => (slide.active = false));

  //   // Activer la nouvelle slide
  //   this.carouselSlides[index].active = true;
  //   this.currentSlideIndex = index;
  // }

  selectSlide(index: number): void {
    this.stopAutoSlide();
    this.goToSlide(index);
    this.startAutoSlide();
  }
}
