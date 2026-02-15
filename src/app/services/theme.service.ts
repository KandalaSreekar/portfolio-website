import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        if (this.isDarkMode()) {
          this.document.documentElement.classList.add('app-dark');
        } else {
          this.document.documentElement.classList.remove('app-dark');
        }
        localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
      });
    }
  }

  private getInitialTheme(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  }

  toggleTheme(): void {
    this.isDarkMode.update(current => !current);
  }
}
