import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Avatar } from 'primeng/avatar';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Avatar],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  highlights = [
    { icon: 'pi pi-code', label: '5+ Years', description: 'Development Experience' },
    { icon: 'pi pi-users', label: '50+', description: 'Projects Completed' },
    { icon: 'pi pi-star', label: '30+', description: 'Happy Clients' }
  ];
}
