import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { Chip } from 'primeng/chip';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, Button, Chip],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://placehold.co/600x400/7c3aed/ffffff?text=E-Commerce',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, kanban boards, and team chat functionality.',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Task+App',
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://placehold.co/600x400/a78bfa/ffffff?text=Weather',
      technologies: ['Angular', 'TypeScript', 'OpenWeather API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media metrics, engagement rates, and audience insights.',
      image: 'https://placehold.co/600x400/c4b5fd/333333?text=Analytics',
      technologies: ['Angular', 'D3.js', 'NestJS', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Real Estate Portal',
      description: 'Property listing platform with advanced search, virtual tours, and mortgage calculator.',
      image: 'https://placehold.co/600x400/7c3aed/ffffff?text=Real+Estate',
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps'],
      githubUrl: '#'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness app for tracking workouts, nutrition, and progress with personalized recommendations.',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Fitness',
      technologies: ['Angular', 'Ionic', 'Firebase'],
      liveUrl: '#'
    }
  ];
}
