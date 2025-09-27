import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
    return (
        <section id="projects" className="bg-[#2F324A] text-white py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-center mb-16">Projects</h1>
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div key={project.id}>
                            <ProjectCard project={project} />
                            {index < projects.length - 1 && (
                                <div className="h-0.5 bg-white my-16"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
