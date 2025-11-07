import { Project, SocialLink } from '@/types';

export const projects: Project[] = [
    {
        id: 'omoide',
        title: 'Omoide',
        description: 'Omoide is an AI-powered child growth tracking application that transforms everyday photos into beautiful storybooks. Built with Next.js 15 and React 19, it integrates Firebase for authentication and storage, OpenAI for story generation, and Google Cloud services for image analysis and text-to-speech. Deployed on Vercel with Turbopack for optimal performance.',
        technologies: ['TypeScript', 'React', 'Next.js', 'Firebase', 'OpenAI', 'Google Cloud Vision', 'Google Cloud TTS', 'Tailwind CSS', 'Vercel'],
        images: ['omoide1.png', 'omoide2.png', 'omoide3.png', 'omoide4.png'],
        liveUrl: 'https://omoide-app.vercel.app/',
        githubUrl: 'https://github.com/shingoooooon/omoide'
    },
    {
        id: 'e-book-commerce',
        title: 'e-Book Commerce',
        description: 'e-Book Commerce is a modern platform for digital books and articles built with Next.js 15 and TypeScript. It integrates Stripe for payments, Supabase for data management, and microCMS for article content. Deployed on Vercel\'s edge network.',
        technologies: ['TypeScript', 'Next.js', 'Stripe', 'Supabase', 'Vercel'],
        images: ['ebookcommerce.png', 'ebookcommerce2.png', 'ebookcommerce3.png'],
        liveUrl: 'https://next-e-book-commerce.vercel.app/',
        githubUrl: 'https://github.com/shingoooooon/next-e-book-commerce'
    },
    {
        id: 'pinia-task-manager',
        title: 'Pinia task manager',
        description: 'Pinia Task Manager is a task management application built with Vue 3 and Pinia. It utilizes Vite for a fast development environment. The project is deployed on Vercel and integrates Firebase for backend services.',
        technologies: ['TypeScript', 'Vue.js', 'Firebase', 'Vite', 'Vercel'],
        images: ['piniataskmanager.png'],
        liveUrl: 'https://pinia-task-manager.vercel.app/',
        githubUrl: 'https://github.com/shingoooooon/pinia-task-manager'
    },
    {
        id: 'pokemon-store',
        title: 'Pokémon Store',
        description: 'Pokemon Store is a shopping cart application to buy Pokémon using Node.js/NestJS and Vue3/Nuxt3.',
        technologies: ['TypeScript', 'Vue.js', 'Nuxt.js', 'Node.js', 'NestJS'],
        images: ['pokemon1.jpg', 'pokemon2.jpg', 'pokemon3.jpg'],
        githubApiUrl: 'https://github.com/shingoooooon/pokemon-store-api',
        githubWebUrl: 'https://github.com/shingoooooon/pokemon-store-web'
    },
    //{
    //    id: 'react-gif-searcher',
    //    title: 'React-Gif-Seacher',
    //    role: 'Front End Developer',
    //    description: 'React-Gif-Seacher is a React app that lets you search for Gifs from GIPHY API.',
    //    technologies: ['HTML5', 'CSS3', 'React'],
    //    images: ['React-Gif-Seacher.jpg', 'React-Gif-Seacher2.jpg'],
    //    githubUrl: 'https://github.com/shingoooooon/React-Gif-Seacher'
    //},
    // {
    //    id: 'nurture',
    //    title: 'Nurture',
    //    role: 'Front End Developer',
    //   description: 'Nurture is a platform for helping tutors engage with students and guide their progress. For this class project, my team and I completed the MVP in two weeks.',
    //    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Ruby', 'PostgreSQL', 'Figma'],
    //    images: ['Nurture_home.jpg', 'Nurture_dashboard.jpg', 'Nurture_chatroom.jpg'],
    //    liveUrl: 'https://nurture-lw.herokuapp.com/',
    //    githubUrl: 'https://github.com/shingoooooon/nurture'
    //},
    //{
    //    id: 'snoared',
    //    title: 'Snoared',
    //    role: 'Front End Developer',
    //    description: 'Snoared is a market place for snowboard gear rental. For this class project, my team and I focused on building a marketplace application to serve users in Hakuba area. We completed the MVP in one week.',
    //    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Ruby', 'PostgreSQL', 'Figma'],
    //    images: ['Snoared _home.jpg', 'Snoared _index.jpg', 'Snoared _show.jpg'],
    //   liveUrl: 'https://snoard.herokuapp.com/',
    //    githubUrl: 'https://github.com/shingoooooon/snoared'
    //},
    //{
    //    id: 'watch-list',
    //    title: 'Watch-list',
    //    role: 'UX Design + Full Stack Developer',
    //    description: 'Watch-list is a web application for you to be able to create lists in which you will save your favorite movies. Completed the MVP in 3 days.',
    //    technologies: ['HTML5', 'CSS3', 'Ruby', 'PostgreSQL'],
    //    images: ['Watch-iist-home.jpg', 'Watch-list-show.jpg'],
    //    liveUrl: 'https://watch-list-sk.herokuapp.com',
    //    githubUrl: 'https://github.com/shingoooooon/rails-watch-list'
    //},
    //{
    //    id: 'longest-word-game',
    //    title: 'Longest-Word-Game',
    //    role: 'UX Design + Full Stack Developer',
    //    description: 'Longest-Word-Game is a simple web application to make the longest word from only 10 letters. Completed the MVP in 1 day.',
    //    technologies: ['HTML5', 'CSS3', 'Ruby', 'PostgreSQL'],
    //    images: ['longest-word-game-home.jpg', 'longest-word-game-result.jpg'],
    //    liveUrl: 'https://longest-word-game-sk.herokuapp.com/',
    //   githubUrl: 'https://github.com/shingoooooon/rails-longest-word-game'
    //},
    //{
    //    id: 'task-manager',
    //    title: 'Task-Manager',
    //    role: 'UX Design + Full Stack Developer',
    //    description: 'Task-Manager is a simple web application to make your own To-Do list. Completed the MVP in 1 day.',
    //    technologies: ['HTML5', 'CSS3', 'Ruby', 'PostgreSQL'],
    //    images: ['Task-manager_home.jpg', 'Task-manager_new.jpg'],
    //    liveUrl: 'https://task-manager-shingo.herokuapp.com/',
    //    githubUrl: 'https://github.com/shingoooooon/rails-task-manager'
    //}
];

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/shingoooooon',
        icon: 'fab fa-github'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/shingokubomura/',
        icon: 'fab fa-linkedin'
    }
];
