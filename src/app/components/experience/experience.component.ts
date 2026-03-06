import { Component } from '@angular/core';

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  type: 'work' | 'education';
  description: string;
  tags?: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  activeTab: 'work' | 'education' = 'work';

  workItems: TimelineItem[] = [
    {
      period: '2024 – 2025',
      title: 'Concepteur Développeur d\'Application',
      company: 'Jehann',
      type: 'work',
      description: 'Mise en place de nouvelles fonctionnalités sur un site interne, en alternance.',
      tags: ['Angular', 'Java', 'Spring Boot'],
    },
    {
      period: '2022 – 2024',
      title: 'Technicien informatique',
      company: 'Intérim',
      type: 'work',
      description: 'Mise en place de postes informatiques, branchement de baies de brassage.',
      tags: ['Réseau', 'Hardware'],
    },
    {
      period: 'Avril 2022',
      title: 'Technicien informatique',
      company: 'Econocom',
      type: 'work',
      description: 'Déploiement et installation de matériel informatique chez Lilly France.',
      tags: ['Déploiement', 'IT'],
    },
    {
      period: '2021',
      title: 'Développeur informatique',
      company: 'Stage',
      type: 'work',
      description: 'Développement d\'une application de carte d\'accès en C# sous Visual Studio.',
      tags: ['C#', 'Visual Studio'],
    },
    {
      period: '2016 – 2018',
      title: 'Technicien informatique',
      company: 'Stage',
      type: 'work',
      description: 'Réparation et maintenance d\'appareils informatiques et électroniques au service logistique et maintenance.',
      tags: ['Maintenance', 'Hardware'],
    },
  ];

  educationItems: TimelineItem[] = [
    {
      period: 'Oct. 2024 – Oct. 2025',
      title: 'Concepteur Développeur d\'Application',
      company: 'Pardawan – Strasbourg',
      type: 'education',
      description: 'Titre professionnel BAC+3 – Conception et développement d\'applications web et logicielles.',
      tags: ['Java', 'Angular', 'Spring Boot', 'BAC+3'],
    },
    {
      period: 'Juin – Oct. 2024',
      title: 'POEI Développeur JAVA',
      company: 'Dawan – Strasbourg',
      type: 'education',
      description: 'Formation intensive en développement Java, Spring Boot, bases de données relationnelles.',
      tags: ['Java', 'Spring Boot', 'SQL'],
    },
    {
      period: '2021',
      title: 'BTS SIO',
      company: 'Lycée René Cassin – Strasbourg',
      type: 'education',
      description: 'BTS Services Informatiques aux Organisations – Spécialisation développement.',
      tags: ['PHP', 'HTML/CSS', 'SQL'],
    },
    {
      period: '2018',
      title: 'Bac Professionnel SEN',
      company: 'Lycée Gutenberg – Strasbourg',
      type: 'education',
      description: 'Systèmes Électroniques Numériques – Maintenance et déploiement de systèmes informatiques.',
      tags: ['Électronique', 'Réseau'],
    },
  ];

  get activeItems(): TimelineItem[] {
    return this.activeTab === 'work' ? this.workItems : this.educationItems;
  }
}
