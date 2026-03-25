import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule } from '@angular/material/core';

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;        // Material Icon name
  colorClass: string;
}

export interface Project {
  icon: string;
  name: string;
  desc: string;
  tags: string[];
  status: string;
  statusIcon: string;
  statusColor: string;
  active: boolean;
  repo: string;
}

export interface Driver {
  number: number;
  name: string;
  country: string;
  flag: string;
  team: string;
}

export interface F1Team {
  name: string;
  short: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    MatBadgeModule,
    MatRippleModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  clock = signal('23:09');
  activeSection = signal('home');
  showIntro = signal(true);
  introFadingOut = signal(false);

  // Apple-style hello in many languages
  helloWords = [
    'สวัสดี', 'Hello', 'こんにちは', '안녕하세요', 'Hola',
    'Bonjour', 'Ciao', 'Xin chào', 'مرحبا', 'Hallo',
    'Olá', 'Привет', '你好', 'Merhaba', 'Namaste'
  ];

  skills: Skill[] = [
    { name: 'Rust', category: 'Systems / Backend', level: 80, icon: 'memory', colorClass: 'rust' },
    { name: 'Angular', category: 'Frontend Framework', level: 75, icon: 'web', colorClass: 'angular' },
    { name: 'TypeScript', category: 'Language', level: 85, icon: 'code', colorClass: 'ts' },
    { name: 'Git & CLI', category: 'Version Control', level: 78, icon: 'terminal', colorClass: 'tools' },
  ];

  studying = ['Data Structures', 'Algorithms', 'OS Concepts', 'Compiler Design'];

  projects: Project[] = [
    {
      icon: 'menu_book',
      name: 'rust1eiei',
      desc: 'Anonymous bulletin board web app — post messages, get replies, stay private. Built with Actix-web backend and Angular frontend.',
      tags: ['Rust', 'Angular'],
      status: 'Active',
      statusIcon: 'radio_button_checked',
      statusColor: '#9a9a9a',
      active: true,
      repo: 'https://github.com/a12thxr-545/rust1eiei',
    },
    {
      icon: 'electric_bolt',
      name: 'library-management',
      desc: 'Smart power strip controller with real-time energy monitoring, REST API, and SQLite storage. Interactive dashboard with device management.',
      tags: ['Rust', 'TypeScript'],
      status: 'Complete',
      statusIcon: 'check_circle',
      statusColor: '#d0d0d0',
      active: true,
      repo: 'https://github.com/a12thxr-545/library-management',
    },
    {
      icon: 'build',
      name: 'wedding2',
      desc: 'Something exciting in the works... Stay tuned for the next systems-level experiment powered by Rust.',
      tags: ['Rust'],
      status: 'In Progress',
      statusIcon: 'construction',
      statusColor: '#606060',
      active: false,
      repo: 'https://github.com/a12thxr-545/wedding2',
    },
  ];

  f1Teams: F1Team[] = [
    { name: 'Scuderia Ferrari', short: 'SF' },
    { name: 'Mercedes-AMG F1', short: 'AMG' },
  ];

  drivers: Driver[] = [
    { number: 16, name: 'Charles Leclerc', country: 'Monaco',   flag: '🇲🇨', team: 'Ferrari' },
    { number: 23, name: 'Alex Albon',      country: 'Thailand', flag: '🇹🇭', team: 'Williams' },
    { number: 12, name: 'Kimi Antonelli',  country: 'Italy',    flag: '🇮🇹', team: 'Mercedes' },
  ];

  contactItems = [
    { key: 'email',    value: 'arthxr545@gmail.com',                 link: 'mailto:arthxr545@gmail.com' },
    { key: 'github',   value: 'github.com/a12thxr-545',              link: 'https://github.com/a12thxr-545' },
    { key: 'linkedin', value: 'linkedin.com/in/arthur',              link: '#' },
    { key: 'location', value: 'Thailand 🌏',                         link: null },
    { key: 'status',   value: 'Open to opportunities',               link: null, highlight: true },
  ];

  dockItems = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'skills', icon: 'settings', label: 'Skills' },
    { id: 'projects', icon: 'rocket_launch', label: 'Projects' },
    { id: 'passions', icon: 'favorite', label: 'Passions' },
    { id: 'contact', icon: 'wifi_tethering', label: 'Contact' },
  ];

  techStack = [
    { name: 'Rust', class: 'pill-rust' },
    { name: 'Angular', class: 'pill-angular' },
    { name: 'TypeScript', class: 'pill-ts' },
  ];

  ngOnInit() {
    this.updateClock();
    setInterval(() => this.updateClock(), 10000);

    // Apple Hello intro: 15 words × 0.5s = 7.5s, fade at 7s, hide at 8s
    setTimeout(() => this.introFadingOut.set(true), 7000);
    setTimeout(() => this.showIntro.set(false), 8000);
  }

  updateClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    this.clock.set(`${h}:${m}`);
  }

  scrollTo(id: string) {
    this.activeSection.set(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  getTagClass(tag: string): string {
    if (tag === 'Rust') return 'tag-rust';
    if (tag === 'Angular') return 'tag-angular';
    if (tag === 'TypeScript') return 'tag-ts';
    return 'tag-default';
  }
}
