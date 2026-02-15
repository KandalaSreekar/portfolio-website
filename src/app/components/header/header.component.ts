import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menubar } from 'primeng/menubar';
import { Button } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Menubar, Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themeService = inject(ThemeService);

  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', command: () => this.scrollTo('hero') },
    { label: 'About', icon: 'pi pi-user', command: () => this.scrollTo('about') },
    { label: 'Skills', icon: 'pi pi-star', command: () => this.scrollTo('skills') },
    { label: 'Experience', icon: 'pi pi-briefcase', command: () => this.scrollTo('experience') },
    { label: 'Projects', icon: 'pi pi-folder', command: () => this.scrollTo('projects') },
    { label: 'Contact', icon: 'pi pi-envelope', command: () => this.scrollTo('contact') }
  ];

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleDarkMode(): void {
    this.themeService.toggleTheme();
  }
}
