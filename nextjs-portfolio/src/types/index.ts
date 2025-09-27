export interface Project {
    id: string;
    title: string;
    role: string;
    description: string;
    technologies: string[];
    images: string[];
    liveUrl?: string;
    githubUrl?: string;
    githubApiUrl?: string;
    githubWebUrl?: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}
