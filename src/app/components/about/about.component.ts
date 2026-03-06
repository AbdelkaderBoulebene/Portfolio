import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  infos = [
    { icon: '📍', label: 'Localisation', value: 'Strasbourg, France' },
    { icon: '🎓', label: 'Diplôme', value: 'Concepteur Développeur d\'Applications (BAC+3)' },
    { icon: '🌐', label: 'Langues', value: 'Français (natif), Anglais (B2)' },
    { icon: '📧', label: 'Email', value: 'boulebene.abdelkaderpro@gmail.com' },
  ];
}
