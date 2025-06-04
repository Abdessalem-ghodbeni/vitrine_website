import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './realisations.component.html',
  styleUrl: './realisations.component.scss',
})
export class RealisationsComponent {
  activeFilter = '*';
  categories = [
    { id: '*', name: 'Tous les projets' },
    { id: 'concours', name: "Concours d'architecture" },
    { id: 'batiments', name: 'Bâtiments civils' },
    { id: 'promotion', name: 'Promotion immobilière' },
    { id: 'medicaux', name: 'Projets médicaux' },
    { id: 'industriels', name: 'Projets industriels' },
  ];

  categoryDescriptions: { [key: string]: string } = {
    concours:
      'Notre participation aux concours nationaux démontre notre excellence créative et technique. Des projets primés qui témoignent de notre capacité à innover tout en répondant aux exigences fonctionnelles et esthétiques les plus rigoureuses.',
    batiments:
      'Des réalisations civiles qui marient fonctionnalité et élégance architecturale. Chaque projet incarne notre engagement pour des espaces de vie et de travail harmonieux, conçus avec des matériaux de qualité et une attention minutieuse aux détails.',
    promotion:
      'Des programmes immobiliers réussis alliant vision urbaine et qualité constructive. Notre expertise garantit des livraisons dans les délais avec un contrôle strict de la qualité, créant ainsi des espaces de vie durables et valorisants.',
    medicaux:
      'Des solutions architecturales innovantes pour le secteur de la santé. Nous concevons des espaces thérapeutiques optimisés qui allient technologie de pointe, bien-être des usagers et efficacité opérationnelle.',
    industriels:
      "Des infrastructures industrielles et commerciales fonctionnelles conçues pour l'efficacité opérationnelle. Notre approche intègre flexibilité d'usage, durabilité des matériaux et optimisation des flux.",
  };
  // Nouvelle méthode pour obtenir le nom de la catégorie active
  getActiveCategoryName(): string {
    const category = this.categories.find((c) => c.id === this.activeFilter);
    return category ? category.name : '';
  }

  portfolioItems: any[] = [
    {
      id: 1,
      title: 'Concours national 2014',
      category: ['concours'],
      description:
        'Réaménagement de la Maison de Jeunes de Sfax - 1er prix (phase DAO & tranche 1 achevée)',
    },
    {
      id: 2,
      title: 'Concours national 2015',
      category: ['concours'],
      description:
        'Construction du Tribunal de Première Instance de Sousse 2 - 4ᵉ prix',
    },
    {
      id: 3,
      title: 'Concours national 2016',
      category: ['concours'],
      description: "Extension de l'hôpital local de Skhira - Sfax - 4ᵉ prix",
    },
    {
      id: 4,
      title: 'Projet de bureaux R+2',
      category: ['batiments'],
      description: 'Bureaux à Charguia, Tunis (2012, en phase DAO)',
    },
    {
      id: 5,
      title: 'Résidence "El Becha 1"',
      category: ['batiments'],
      description: 'Résidence à Sidi Hcine, Tunis (2013, en phase DAO)',
    },
    {
      id: 6,
      title: 'Complexe immobilier R+4',
      category: ['batiments'],
      description:
        'Complexe à Thyna, Route de Gabès, Sfax (2018, travaux en cours)',
    },
    {
      id: 7,
      title: 'Complexe "El Ghozlen"',
      category: ['batiments'],
      description:
        'Sous-sol + RDC + 6 étages (Résidentiel, Commercial, Bureautique) à Sfax (travaux en cours)',
    },
    {
      id: 8,
      title: 'Immeuble R+4',
      category: ['promotion'],
      description: "Usage d'habitation à Mghira, Ben Arous (achevé)",
    },
    {
      id: 9,
      title: 'Immeuble mixte Boumhel',
      category: ['promotion'],
      description:
        'Sous-sol + RDC + 4 étages (commercial & habitation) à Boumhel El Bessetine, Ben Arous (achevé)',
    },
    {
      id: 10,
      title: 'Bloc médical "Mahsouna Médical"',
      category: ['medicaux'],
      description:
        '24 cabinets, radiologie, laboratoire, pharmacie (8000 m² sur 36000 m², achevé 2016)',
    },
    {
      id: 11,
      title: 'Parc industriel',
      category: ['industriels'],
      description: 'Zone industrielle Thyna, Sfax (10000 m², phase APD 2014)',
    },
    {
      id: 12,
      title: 'Décoration de locaux commerciaux',
      category: ['industriels'],
      description:
        'Opticien km 4 (Sfax 2020), Vente Pneus (La Soukra 2019, Sfax 2018)',
    },
  ];

  get filteredItems() {
    if (this.activeFilter === '*') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter((item) =>
      item.category.includes(this.activeFilter)
    );
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  getActiveCategoryDescription() {
    return this.categoryDescriptions[this.activeFilter] || '';
  }
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  images = [
    'assets/gallerie/g1.jpg',
    'assets/gallerie/g2.jpg',
    'assets/gallerie/g111.jpg',
    'assets/gallerie/g102.jpg',
    'assets/gallerie/g30.jpg',
    'assets/gallerie/g32.jpg',
    'assets/gallerie/g40.jpg',
    'assets/gallerie/g42.jpg',
    'assets/gallerie/g43.jpg',
    'assets/gallerie/g44.jpg',
    'assets/gallerie/g48.jpg',
    'assets/gallerie/g50.jpg',
    'assets/gallerie/g20.jpg',
    'assets/gallerie/g24.jpg',
    'assets/gallerie/g28.jpg',
  ];

  ngAfterViewInit() {
    this.initSwiper();
  }

  private initSwiper() {
    // Configurez Swiper pour utiliser les modules nécessaires
    Swiper.use([Autoplay]);

    new Swiper(this.swiperContainer.nativeElement, {
      // Modules
      modules: [Autoplay],

      // Configuration spécifique
      spaceBetween: 50,
      speed: 14000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
        1400: { slidesPerView: 5 },
      },
      loop: true,

      // Paramètres critiques pour Angular
      observer: true, // Surveille les changements du DOM
      observeParents: true, // Surveille les changements des parents
      observeSlideChildren: true, // Surveille les changements des slides
    });
  }
}
