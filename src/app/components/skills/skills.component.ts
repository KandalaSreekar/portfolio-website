import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chip } from 'primeng/chip';

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, Chip],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: 'pi pi-desktop',
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'RxJS', 'NgRx', 'Tailwind CSS']
    },
    {
      name: 'Backend',
      icon: 'pi pi-server',
      skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Socket.io']
    },
    {
      name: 'Tools & DevOps',
      icon: 'pi pi-cog',
      skills: ['Git', 'Docker', 'CI/CD', 'Jest', 'Cypress', 'Webpack', 'Vite', 'npm', 'Linux', 'AWS']
    }
  ];
}
