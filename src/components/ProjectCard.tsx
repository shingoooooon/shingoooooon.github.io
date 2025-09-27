'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

const technologyIcons: { [key: string]: string } = {
    'TypeScript': 'devicon-typescript-plain',
    'Next.js': 'devicon-nextjs-plain',
    'Stripe': 'fab fa-stripe',
    'Supabase': 'devicon-supabase-plain',
    'Vercel': 'devicon-vercel-original',
    'Vue.js': 'devicon-vuejs-plain',
    'Firebase': 'devicon-firebase-plain',
    'Vite': 'devicon-vitejs-plain',
    'Nuxt.js': 'devicon-nuxtjs-plain',
    'Node.js': 'fab fa-node',
    'NestJS': 'devicon-nestjs-original',
    'HTML5': 'fab fa-html5',
    'CSS3': 'fab fa-css3-alt',
    'React': 'fab fa-react',
    'JavaScript': 'fab fa-js-square',
    'Ruby': 'ruby-icon',
    'PostgreSQL': 'postgresql-icon',
    'Figma': 'figma-icon'
};

export default function ProjectCard({ project }: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="bg-[#2F324A] text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image Carousel */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-lg">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            >
                                {project.images.map((image, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <Image
                                            src={`/images/${image}`}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Navigation arrows */}
                            {project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all hover:scale-110"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all hover:scale-110"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Image indicators */}
                        {project.images.length > 1 && (
                            <div className="flex justify-center mt-4 space-x-2">
                                {project.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex
                                            ? 'bg-[#74FAC0]'
                                            : 'bg-gray-500 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Project Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold">{project.title}</h2>
                        <p className="text-[#74FAC0] text-lg">{project.role}</p>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>

                        {/* Technology Icons */}
                        <div className="flex flex-wrap gap-4">
                            {project.technologies.map((tech) => (
                                <div key={tech} className="flex items-center">
                                    {technologyIcons[tech] ? (
                                        <i className={`${technologyIcons[tech]} text-2xl text-white`}></i>
                                    ) : (
                                        <span className="text-white text-sm">{tech}</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-white text-white px-6 py-3 hover:bg-[#74FAC0] hover:text-[#2F324A] transition-all duration-500"
                                >
                                    Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-white text-white px-6 py-3 hover:bg-[#74FAC0] hover:text-[#2F324A] transition-all duration-500"
                                >
                                    Github
                                </a>
                            )}
                            {project.githubApiUrl && (
                                <a
                                    href={project.githubApiUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-white text-white px-6 py-3 hover:bg-[#74FAC0] hover:text-[#2F324A] transition-all duration-500"
                                >
                                    View Code (API)
                                </a>
                            )}
                            {project.githubWebUrl && (
                                <a
                                    href={project.githubWebUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-white text-white px-6 py-3 hover:bg-[#74FAC0] hover:text-[#2F324A] transition-all duration-500"
                                >
                                    View Code (WEB)
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
