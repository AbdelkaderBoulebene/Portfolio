import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedText = '';
  private phrases = ['Développeur Full-Stack', 'Passionné par le code', 'Angular & Spring Boot'];
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingInterval: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.typeLoop();
  }

  ngOnDestroy() {
    if (this.typingInterval) clearTimeout(this.typingInterval);
  }

  private typeLoop() {
    const current = this.phrases[this.phraseIndex];

    if (!this.isDeleting) {
      this.displayedText = current.substring(0, ++this.charIndex);
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.typingInterval = setTimeout(() => this.typeLoop(), 2000);
        return;
      }
    } else {
      this.displayedText = current.substring(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      }
    }

    const speed = this.isDeleting ? 50 : 90;
    this.typingInterval = setTimeout(() => this.typeLoop(), speed);
  }

  scrollTo(href: string, event: Event) {
    event.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
