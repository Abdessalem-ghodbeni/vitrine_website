import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-temoin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temoin.component.html',
  styleUrl: './temoin.component.scss',
})
export class TemoinComponent {
  currentIndex = 0;
  testimonials = [
    {
      name: 'Mohamed Ben Ali',
      city: 'Sfax',
      role: 'Promoteur immobilier',
      content:
        '"Le bureau a transformé notre vision en réalité avec le complexe El Ghozlen. Leur sens du détail et leur maîtrise des matériaux ont dépassé nos attentes. Un professionnalisme remarquable!"',
      initials: 'MB',
      bgColor: 'bg-primary',
    },
    {
      name: 'Fatma Ksouri',
      city: 'Sousse',
      role: 'Directrice médicale',
      content:
        '"Leur approche du projet de notre clinique à Sousse a été exceptionnelle. Ils ont parfaitement intégré les contraintes médicales avec une esthétique moderne. Un vrai travail d\'architecte!"',
      initials: 'FK',
      bgColor: 'bg-success',
    },
    {
      name: 'Zohra Abdelli',
      city: 'Monastir',
      role: 'Propriétaire',
      content:
        '"Leur travail sur notre résidence à Monastir a été exemplaire. Coordination parfaite, respect des délais et surtout une créativité qui a donné une âme à notre projet. Je recommande vivement!"',
      initials: 'ZA',
      bgColor: 'bg-info',
    },
    {
      name: 'Mehdi Trabelsi',
      city: 'Tunis',
      role: 'Directeur commercial',
      content:
        '"Leur expertise en architecture commerciale a transformé nos locaux à Tunis. Le design épuré et fonctionnel a immédiatement impacté notre image de marque. Un partenariat très fructueux!"',
      initials: 'MT',
      bgColor: 'bg-warning',
    },
    {
      name: 'Salah Khelifi',
      city: 'Sfax',
      role: 'Industriel',
      content:
        '"Leur travail sur le parc industriel de Thyna a été une révélation. Ils ont su concilier efficacité opérationnelle et design contemporain. Un bureau qui comprend les besoins des industriels!"',
      initials: 'SK',
      bgColor: 'bg-danger',
    },
    {
      name: 'Fatma Kamoun',
      city: 'Sfax',
      role: 'Promoteur immobilier',
      content:
        '"Le complexe El Ghozlen est devenu une référence architecturale à Sfax grâce à votre vision innovante. Votre attention aux détails et votre respect des délais ont dépassé nos attentes."',
      initials: 'FK',
      bgColor: 'bg-primary',
    },
    {
      name: 'Wael Kekess',
      city: 'Sousse',
      role: "Directeur d'hôpital",
      content:
        '"Le réaménagement de notre centre médical a révolutionné notre fonctionnement. L\'agencement des espaces est parfaitement adapté aux besoins des praticiens et des patients."',
      initials: 'WK',
      bgColor: 'bg-success',
    },
    {
      name: 'Okba Trabelssi',
      city: 'Tunis',
      role: 'Industriel',
      content:
        '"Votre bureau a transformé notre unité de production en un espace à la fois fonctionnel et esthétique. L\'optimisation des flux de travail a augmenté notre productivité de 30%."',
      initials: 'OT',
      bgColor: 'bg-info',
    },
    {
      name: 'Malek Mohamed',
      city: 'Monastir',
      role: 'Propriétaire',
      content:
        '"Notre résidence à Monastir est un véritable chef-d\'œuvre. L\'équilibre entre esthétique méditerranéenne et fonctionnalité moderne est remarquable. Merci pour votre créativité!"',
      initials: 'MM',
      bgColor: 'bg-warning',
    },
    {
      name: 'Amira Ben Salah',
      city: 'Sfax',
      role: 'Commerçante',
      content:
        '"La décoration de mon magasin d\'optique a totalement transformé l\'expérience client. Le design épuré et lumineux met parfaitement en valeur nos collections."',
      initials: 'AB',
      bgColor: 'bg-danger',
    },
    {
      name: 'Hichem Gharsallah',
      city: 'Sousse',
      role: 'Juge',
      content:
        '"Le projet du Tribunal de Sousse 2, bien que non retenu, présentait des solutions architecturales innovantes qui ont inspiré notre réflexion. Une approche professionnelle remarquable."',
      initials: 'HG',
      bgColor: 'bg-purple',
    },
    {
      name: 'Nadia Mhamdi',
      city: 'Tunis',
      role: 'Directrice administrative',
      content:
        '"La rénovation de nos bureaux à Charguia a créé un espace de travail inspirant. La luminosité et l\'ergonomie des espaces ont boosté le moral et la productivité des équipes."',
      initials: 'NF',
      bgColor: 'bg-teal',
    },
    {
      name: 'Karim Saïdi',
      city: 'Monastir',
      role: 'Investisseur',
      content:
        '"Votre expertise en promotion immobilière nous a permis de maximiser le potentiel de notre terrain. Le complexe résidentiel est aujourd\'hui un modèle de réussite dans la région."',
      initials: 'KS',
      bgColor: 'bg-orange',
    },
    {
      name: 'Leila Boukadida',
      city: 'Sfax',
      role: 'Pharmacienne',
      content:
        '"Le bloc médical Mahsouna est un modèle d\'efficacité. La circulation entre les différents services est fluide et l\'ambiance apaisante favorise le bien-être des patients."',
      initials: 'LB',
      bgColor: 'bg-pink',
    },
    {
      name: 'Sami Ghozzi',
      city: 'Tunis',
      role: 'Entrepreneur',
      content:
        '"Le parc industriel de Thyna est une vitrine de l\'architecture industrielle moderne. Votre compréhension de nos besoins opérationnels a été déterminante dans le succès du projet."',
      initials: 'SG',
      bgColor: 'bg-indigo',
    },
  ];

  // Avatars pour le groupe
  avatarGroup = [
    { initials: 'MB' },
    { initials: 'NS' },
    { initials: 'FK' },
    { initials: 'LH' },
    { initials: 'AS' },
    { initials: 'ZK' },
    { initials: 'FK' },
    { initials: 'WK' },
    { initials: 'OT' },
    { initials: 'MM' },
  ];

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
