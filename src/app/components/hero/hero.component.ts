import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
