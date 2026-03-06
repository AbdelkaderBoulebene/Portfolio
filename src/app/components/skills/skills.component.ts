import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories = ['Tous', 'Frontend', 'Backend', 'Outils'];
  activeCategory = 'Tous';

  skills: Skill[] = [
    { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031', level: 75, category: 'Frontend' },
    { name: 'HTML / CSS', icon: 'https://cdn.simpleicons.org/html5/E34F26', level: 85, category: 'Frontend' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', level: 70, category: 'Frontend' },
    { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00', level: 75, category: 'Backend' },
    { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F', level: 65, category: 'Backend' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', level: 60, category: 'Backend' },
    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4', level: 55, category: 'Backend' },
    { name: 'SQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', level: 70, category: 'Backend' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', level: 75, category: 'Outils' },
  ];

  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'Tous') return this.skills;
    return this.skills.filter(s => s.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  getLevelLabel(level: number): string {
    if (level >= 80) return 'Expert';
    if (level >= 65) return 'Avancé';
    if (level >= 50) return 'Intermédiaire';
    return 'Débutant';
  }
}
