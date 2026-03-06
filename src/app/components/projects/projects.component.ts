import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  icon: string;
  svgIcon?: string;
  color: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private sanitizer: DomSanitizer) {}

  safeIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  projects: Project[] = [
    {
      title: 'Flowify',
      subtitle: 'Gestionnaire de tâches',
      description: 'Application web full-stack de gestion de tâches avec tableau de bord en temps réel, authentification JWT (rôles ADMIN/USER), gestion de projets avec archivage et interface Glassmorphism.',
      tags: ['Angular 17', 'Spring Boot', 'PostgreSQL', 'JWT', 'TypeScript'],
      github: 'https://github.com/AbdelkaderBoulebene/Gestionnaire_De_Taches',
      image: 'https://raw.githubusercontent.com/AbdelkaderBoulebene/Gestionnaire_De_Taches/main/docs/screenshots/dashboard.png',
      featured: true,
      icon: '✅',
      color: 'blue',
    },
    {
      title: 'Sparta',
      subtitle: 'Suivi d\'entraînement sportif',
      description: 'Application web de suivi de séances de sport avec bibliothèque d\'exercices (Wger API), programmes personnalisés, historique des séances et visualisation de la progression via des graphiques.',
      tags: ['Angular 19', 'Angular Material', 'Chart.js', 'IndexedDB', 'TypeScript'],
      github: 'https://github.com/AbdelkaderBoulebene/Sparta',
      liveUrl: 'https://abdelkaderboulebene.github.io/Sparta/',
      image: 'https://raw.githubusercontent.com/AbdelkaderBoulebene/Sparta/main/docs/screenshots/tableauDeBord.png',
      featured: false,
      icon: '',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M8.5 5.5h7C16.2 3.6 14.5 2 12 2S7.8 3.6 8.5 5.5z" opacity=".75"/>
        <path d="M6 11.5C6 8.2 8.7 5.5 12 5.5s6 2.7 6 6v3.5H6v-3.5z"/>
        <path d="M6 15v5c0 .8.7 1.5 1.5 1.5S9 20.8 9 20v-5H6z"/>
        <path d="M18 15v5c0 .8-.7 1.5-1.5 1.5S15 20.8 15 20v-5h3z"/>
        <rect x="11" y="11" width="2" height="6" rx="1"/>
      </svg>`,
      color: 'purple',
    },
    {
      title: 'FDC',
      subtitle: 'Gestion des femmes de chambre',
      description: 'Outil de répartition quotidienne des chambres pour le personnel d\'entretien hôtelier. Import Excel, distribution automatique équilibrée, export Excel/PDF. Fonctionne directement dans le navigateur sans installation.',
      tags: ['JavaScript', 'HTML', 'CSS', 'SheetJS', 'JSZip'],
      github: 'https://github.com/AbdelkaderBoulebene/FDC',
      liveUrl: 'https://abdelkaderboulebene.github.io/FDC/',
      image: 'https://raw.githubusercontent.com/AbdelkaderBoulebene/FDC/main/docs/screenshot.png',
      featured: false,
      icon: '🏨',
      color: 'teal',
    },
  ];
}
