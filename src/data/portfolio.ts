import type { ImageMetadata } from 'astro';
import tohabToday from '../assets/projects/tohab/today.png';
import tohabCapture from '../assets/projects/tohab/capture.png';
import tohabHabit from '../assets/projects/tohab/habit.png';
import tohabTodayDark from '../assets/projects/tohab/today-dark.png';
import tohabCaptureDark from '../assets/projects/tohab/capture-dark.png';
import tohabHabitDark from '../assets/projects/tohab/habit-dark.png';
import ebaBackups from '../assets/projects/eba/backups.png';
import ebaSettings from '../assets/projects/eba/settings.png';
import ebaRestore from '../assets/projects/eba/restore.png';
import maximsWallpaper from '../assets/projects/maxims/wallpaper.jpeg';

export interface Project {
  id: string;
  title: string;
  category: string;
  featured?: boolean;
  hideInPrint?: boolean;
  role: string;
  period?: string;
  client?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  link?: string;
  repo?: string;
  screenshots?: { src: ImageMetadata; dark?: ImageMetadata; alt: string }[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  website?: string;
  description: string;
  projects: Project[];
}

export interface Education {
  degree: string;
  specialization?: string;
  institution: string;
  period?: string;
  location: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'globe' | 'mail';
  display: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    subheadline: string;
    location: string;
    email: string;
    avatarUrl?: string;
    about: {
      paragraphs: string[];
      keyTraits: string[];
    };
    socials: SocialLink[];
    languages: { name: string; level: string }[];
  };
  experiences: Experience[];
  independentProjects: Project[];
  skills: SkillGroup[];
  education: Education[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Omar Garcia Rios',
    headline: 'Full Stack Software Engineer',
    subheadline:
      'Full-stack software engineer in Barcelona with 7+ years building web platforms, backend services, and mobile apps for clients like UNICEF, Gapminder, and Handelsbanken.',
    location: 'Barcelona, Spain',
    email: 'contact@omargarrios.dev',
    avatarUrl: '/omar-garcia-avatar.jpeg',
    about: {
      paragraphs: [
        'I’m a full-stack engineer in Barcelona with 7+ years of professional experience building web platforms, backend services, and mobile apps. At Prototyp I’ve built products for clients in fundraising, education, finance, and applied AI.',
        'I’m especially drawn to backend engineering and complex integrations, with a close eye for the interface people actually use.'
      ],
      keyTraits: []
    },
    socials: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/omar-garcia-rios/',
        icon: 'linkedin',
        display: 'linkedin.com/in/omar-garcia-rios'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/Cr0s4k/',
        icon: 'github',
        display: 'github.com/Cr0s4k'
      },
      {
        label: 'Portfolio Domain',
        href: 'https://omargarrios.dev/',
        icon: 'globe',
        display: 'omargarrios.dev'
      },
      {
        label: 'Email',
        href: 'mailto:contact@omargarrios.dev',
        icon: 'mail',
        display: 'contact@omargarrios.dev'
      }
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Catalan', level: 'Full Professional Proficiency' },
      { name: 'English', level: 'Professional Working Proficiency' }
    ]
  },

  skills: [
    {
      category: 'Backend & Systems',
      skills: [
        { name: 'Ruby on Rails', highlight: true },
        { name: 'Node.js / Express / NestJS', highlight: true },
        { name: 'Elixir & Phoenix', highlight: true },
        { name: 'C# / Microsoft .NET', highlight: true },
        { name: 'Python (Django, Flask, FastAPI)', highlight: true },
        { name: 'GraphQL & REST APIs' },
        { name: 'Microservices & Background Workers (Oban/Sidekiq)' }
      ]
    },
    {
      category: 'Frontend & Mobile',
      skills: [
        { name: 'React / Next.js', highlight: true },
        { name: 'Flutter & Dart', highlight: true },
        { name: 'React Native', highlight: true },
        { name: 'Vue.js / Nuxt', highlight: true },
        { name: 'Angular' },
        { name: 'TypeScript & JavaScript', highlight: true },
        { name: 'Tailwind CSS' },
        { name: 'Svelte / SvelteKit' }
      ]
    },
    {
      category: 'Cloud, Data & DevOps',
      skills: [
        { name: 'PostgreSQL', highlight: true },
        { name: 'MySQL' },
        { name: 'Redis' },
        { name: 'Offline storage & synchronization (RxDB)' },
        { name: 'Firebase / Firestore', highlight: true },
        { name: 'AWS Cloud Services', highlight: true },
        { name: 'Google Cloud', highlight: true },
        { name: 'Microsoft Azure', highlight: true },
        { name: 'Docker & Containerization', highlight: true },
        { name: 'Prisma ORM' },
        { name: 'Contentful CMS' },
        { name: 'Saleor E-Commerce' }
      ]
    },
    {
      category: 'Applied AI',
      skills: [
        { name: 'LLM Integration & Prompt Pipelines', highlight: true },
        { name: 'Agentic Development (Claude Code, Codex, Copilot), custom skills & rules', highlight: true },
        { name: 'Automated Bot Architecture' }
      ]
    }
  ],

  experiences: [
    {
      company: 'Prototyp Stockholm AB',
      role: 'Full Stack Developer',
      location: 'Barcelona, Spain',
      period: 'August 2019 – Present',
      website: 'https://www.prototyp.se/',
      description:
        'Building web platforms, backend services, and mobile applications in cross-functional teams, from concept to production.',
      projects: [
        {
          id: 'unicef-fundraising',
          featured: true,
          title: 'Fundraising & donation platforms',
          category: 'Enterprise Web & FinTech',
          role: 'Full Stack Developer',
          period: '3 years',
          client: 'UNICEF',
          link: 'https://unicef.se/',
          summary:
            'Long-term development of donation platforms connecting fundraising, e-commerce, donor records, and recurring payments.',
          highlights: [
            'Integrated the donation platforms with Salesforce for donor records, Saleor for e-commerce, Adyen for payments, and Contentful for content.',
            'Built and maintained donation and recurring-giving flows across the platform.',
            'Developed features across Node.js, React, and TypeScript services hosted on Heroku, with image storage on AWS S3.'
          ],
          stack: ['Node.js', 'React.js', 'TypeScript', 'Salesforce', 'Saleor', 'Adyen', 'Contentful CMS', 'Heroku', 'AWS S3']
        },
        {
          id: 'youth-mental-health',
          featured: true,
          title: 'Mental health & AI coaching app',
          category: 'Mobile & Applied AI',
          role: 'Mobile & AI App Developer',
          client: 'PlayWellMinds',
          link: 'https://www.playwellminds.com/en/',
          summary:
            'A Flutter app, live on the App Store, supporting youth athletes with mental health resources and AI-assisted coaching.',
          highlights: [
            'Built an AI coaching chat that draws on each user’s in-app data and follows the app’s coaching guidelines.',
            'Added AI-generated reports, using the Vercel AI SDK with Claude and Gemini models for both chat and reports.',
            'Built the Flutter interface with real-time synchronization through Firestore.'
          ],
          stack: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'Google Cloud', 'TypeScript', 'Vercel AI SDK', 'Claude', 'Gemini', 'Contentful CMS']
        },
        {
          id: 'gapminder-upgrader',
          featured: true,
          title: 'World development education',
          category: 'Interactive Web App',
          role: 'Full Stack Developer',
          client: 'Gapminder',
          link: 'https://upgrader.gapminder.org/',
          summary:
            'An interactive web learning tool that helps people test their understanding of world development.',
          highlights: [
            'Helped build the quiz engine, the Elixir/Phoenix backend API, and the Vue.js frontend.',
            'Worked on the Contentful integration that lets editors update quiz content without code changes.'
          ],
          stack: ['Elixir', 'Phoenix Framework', 'Vue.js', 'Nuxt', 'Contentful CMS', 'Tailwind CSS', 'PostgreSQL']
        },
        {
          id: 'financial-market-data',
          title: 'Financial market data',
          category: 'Enterprise FinTech',
          role: 'Full Stack Developer',
          period: '2 years',
          client: 'Handelsbanken Marknadsinformation',
          link: 'https://www.handelsbanken.se/sv/',
          summary:
            'A financial platform for real-time and historical market data, fund indexes, and analysis, built with .NET and Angular.',
          highlights: [
            'Built financial charts and data tables in Angular for market data and fund information.',
            'Developed backend endpoints in C# and .NET running on Microsoft Azure.'
          ],
          stack: ['.NET', 'C#', 'Angular', 'Contentful CMS', 'Microsoft Azure', 'FTP']
        },
        {
          id: 'recycla-platform',
          title: 'Recycling marketplace',
          category: 'SaaS & Marketplace',
          role: 'Full Stack Developer',
          client: 'Recycla.se',
          link: 'https://recycla.se/',
          summary:
            'A Swedish marketplace connecting businesses and consumers with recycling contractors, with live quote matching and bidding.',
          highlights: [
            'Worked mainly on the back office, built with Phoenix LiveView.',
            'Built push notification features and background jobs with Oban.'
          ],
          stack: ['Elixir', 'Phoenix Framework', 'LiveView', 'PostgreSQL', 'Tailwind CSS', 'Oban']
        },
        {
          id: 'ireno-construction',
          title: 'Home renovation marketplace',
          category: 'Startup Marketplace',
          role: 'Full Stack Developer',
          client: 'Ireno',
          link: 'https://ireno.se/',
          summary:
            'A home renovation marketplace built with Rails and Hotwire.',
          highlights: [
            'Built the main customer flow, including contract generation and an e-signature integration.',
            'Developed server-rendered UI with Ruby on Rails, Stimulus.js, Hotwire, and PostgreSQL.',
            'Set up reproducible containerized development and deployment workflows using Docker.'
          ],
          stack: ['Ruby on Rails', 'PostgreSQL', 'Stimulus.js', 'Hotwire', 'Docker', 'Tailwind CSS']
        }
      ]
    }
  ],

  independentProjects: [
    {
      id: 'tohab',
      title: 'Tohab — tasks & habits',
      category: 'Personal Productivity',
      role: 'Creator & Full Stack Developer',
      repo: 'https://github.com/Cr0s4k/tohab',
      summary:
        'A mobile task and habit journal that works offline and syncs to a self-hosted backend.',
      highlights: [
        'Built an installable SvelteKit app with local data in RxDB and synchronization through Hono and PostgreSQL.',
        'Added natural-language task capture, recurring tasks, and habit streaks that account for schedules and pauses.',
        'Made every change undoable with an activity history, and added Web Push reminders, a calendar feed, JSON backups, and Todoist import.'
      ],
      stack: ['SvelteKit', 'TypeScript', 'RxDB', 'Hono', 'Drizzle', 'PostgreSQL', 'Docker'],
      screenshots: [
        { src: tohabToday, dark: tohabTodayDark, alt: 'Tohab Today view with scheduled tasks and a habit summary' },
        { src: tohabCapture, dark: tohabCaptureDark, alt: 'Tohab quick capture parsing a date, time, priority and project from plain text' },
        { src: tohabHabit, dark: tohabHabitDark, alt: 'Tohab habit detail with streak stats and a 12-week heatmap' }
      ]
    },
    {
      id: 'eba',
      title: 'EBA — headless CMS backups',
      category: 'Developer Tools',
      role: 'Creator & Full Stack Developer',
      summary:
        'A Contentful app that backs up a space’s content and assets on a schedule to the customer’s own Google Drive.',
      screenshots: [
        { src: ebaBackups, alt: 'EBA backups page listing encrypted backup files with download and restore actions' },
        { src: ebaSettings, alt: 'EBA backup settings with a daily schedule and automatic cleanup limits' },
        { src: ebaRestore, alt: 'EBA restore dialog previewing an archive and choosing a destination environment' }
      ],
      highlights: [
        'Built the Contentful app in React with a NestJS API for configuring and restoring backups.',
        'Encrypted backups before upload, so customer content never stays on our servers.',
        'Ran daily and weekly backups on BullMQ queues, with email alerts and Stripe billing.'
      ],
      stack: ['React', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'Stripe']
    },
    {
      id: 'maxims-reminder',
      hideInPrint: true,
      title: 'Maxims Reminder',
      repo: 'https://github.com/Cr0s4k/maxims_reminder',
      category: 'Personal Productivity',
      role: 'Creator',
      summary:
        'A personal reminder tool that turns maxims saved in Notion into Telegram reminders and generated wallpapers.',
      screenshots: [
        { src: maximsWallpaper, alt: 'Maxims Reminder wallpaper with the quote: We suffer more often in imagination than in reality.' }
      ],
      highlights: [
        'Built a Python job that reads the selected maxim from a Notion database, posts it to Telegram, and generates a wallpaper.',
        'Scheduled the job to run every two hours with Docker Compose.'
      ],
      stack: ['Python', 'Notion API', 'Telegram Bot API', 'Docker Compose', 'cron']
    },
    {
      id: 'telegram-automation',
      hideInPrint: true,
      title: 'Other automations',
      category: 'Independent Engineering',
      role: 'Creator',
      period: '2023 – 2025',
      summary:
        'Small self-hosted experiments that bring class availability alerts and voice-note transcriptions to Telegram.',
      highlights: [
        'Wrote a Python job that checks a class’s capacity every five minutes and alerts on Telegram when a spot opens.',
        'Built a Go bot that transcribes voice notes with Whisper.'
      ],
      stack: ['Go', 'Python', 'Telegram Bot API', 'OpenAI API', 'Docker', 'cron']
    }
  ],

  education: [
    {
      degree: "Bachelor's Degree in Informatics Engineering",
      specialization: 'Software Engineering Specialization',
      institution: 'Universitat Politècnica de Catalunya (UPC)',
      period: '2015 – 2019',
      location: 'Barcelona, Spain'
    }
  ]
};
