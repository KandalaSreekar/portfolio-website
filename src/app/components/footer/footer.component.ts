import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, Divider],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'pi pi-github', url: 'https://github.com', label: 'GitHub' },
    { icon: 'pi pi-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'pi pi-twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'pi pi-envelope', url: 'mailto:john.doe@example.com', label: 'Email' }
  ];

  navLinks = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'About', sectionId: 'about' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
