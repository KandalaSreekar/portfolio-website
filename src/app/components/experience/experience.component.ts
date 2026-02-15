import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timeline } from 'primeng/timeline';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, Timeline],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading frontend architecture and development. Mentoring junior developers and implementing best practices across the team.',
      icon: 'pi pi-star'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Built scalable web applications using Angular and Node.js. Designed and implemented RESTful APIs and database schemas.',
      icon: 'pi pi-code'
    },
    {
      title: 'Frontend Developer',
      company: 'Web Agency',
      period: '2018 - 2020',
      description: 'Developed responsive websites and single-page applications for various clients across different industries.',
      icon: 'pi pi-desktop'
    },
    {
      title: 'Junior Developer',
      company: 'Digital Solutions',
      period: '2017 - 2018',
      description: 'Started my journey in web development, learning the fundamentals and contributing to client projects.',
      icon: 'pi pi-bookmark'
    }
  ];
}
