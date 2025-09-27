import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: 'Experience - Shingo Kubomura',
    description: 'Professional experience and career journey of Shingo Kubomura, including work history, achievements, and professional development.',
};

interface Experience {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
    achievements?: string[];
}

const experiences: Experience[] = [
    {
        id: 'current',
        title: 'Full-Stack Developer',
        company: 'Freelance',
        period: '2023 - Present',
        description: 'Developing modern web applications using React, Next.js, Vue.js, and Node.js. Specializing in e-commerce platforms, task management systems, and interactive web applications.',
        technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Firebase', 'Vercel'],
        achievements: [
            'Built multiple full-stack applications from concept to deployment',
            'Implemented modern development practices and CI/CD pipelines',
            'Collaborated with clients to deliver high-quality solutions'
        ]
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing Specialist',
        company: 'Previous Experience',
        period: '2020 - 2023',
        description: 'Led digital marketing campaigns and strategies, focusing on SEO, social media marketing, and conversion optimization. Developed strong analytical skills and user experience understanding.',
        technologies: ['SEO', 'Google Analytics', 'Social Media Marketing', 'Content Strategy', 'A/B Testing'],
        achievements: [
            'Improved website conversion rates by 25% through optimization',
            'Managed successful social media campaigns with 50K+ followers',
            'Developed comprehensive SEO strategies for multiple clients'
        ]
    },
    {
        id: 'education',
        title: 'Web Development Bootcamp',
        company: 'Le Wagon',
        period: '2023',
        description: 'Intensive 9-week full-stack web development bootcamp covering modern web technologies, agile development practices, and real-world project experience.',
        technologies: ['Ruby on Rails', 'JavaScript', 'HTML/CSS', 'PostgreSQL', 'Git', 'Heroku'],
        achievements: [
            'Completed 3 full-stack projects including MVP development',
            'Collaborated in agile development teams',
            'Mastered modern web development workflows'
        ]
    }
];

export default function ExperiencePage() {
    return (
        <main>
            <Header />
            <div className="pt-16 bg-[#2f324a] text-white min-h-screen">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-16">Experience</h1>

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={exp.id} className="relative">
                                    {/* Timeline line */}
                                    {index < experiences.length - 1 && (
                                        <div className="absolute left-8 top-16 w-0.5 h-full bg-[#74fac0] opacity-30"></div>
                                    )}

                                    <div className="flex items-start space-x-6">
                                        {/* Timeline dot */}
                                        <div className="flex-shrink-0 w-16 h-16 bg-[#74fac0] rounded-full flex items-center justify-center">
                                            <span className="text-[#2f324a] font-bold text-lg">{index + 1}</span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 bg-[#3a3d5a] rounded-lg p-6">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-[#74fac0]">{exp.title}</h3>
                                                    <p className="text-xl text-white">{exp.company}</p>
                                                </div>
                                                <span className="text-[#74fac0] font-semibold mt-2 md:mt-0">{exp.period}</span>
                                            </div>

                                            <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                                            {/* Technologies */}
                                            <div className="mb-6">
                                                <h4 className="text-lg font-semibold text-[#74fac0] mb-3">Technologies & Skills</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="bg-[#2f324a] text-[#74fac0] px-3 py-1 rounded-full text-sm"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            {exp.achievements && (
                                                <div>
                                                    <h4 className="text-lg font-semibold text-[#74fac0] mb-3">Key Achievements</h4>
                                                    <ul className="space-y-2">
                                                        {exp.achievements.map((achievement, idx) => (
                                                            <li key={idx} className="text-gray-300 flex items-start">
                                                                <span className="text-[#74fac0] mr-2">•</span>
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-16 bg-[#3a3d5a] rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-[#74fac0] mb-6">Professional Philosophy</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Development Approach</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        I believe in creating user-centered solutions that combine technical excellence with business value.
                                        My background in digital marketing gives me a unique perspective on user experience and conversion optimization.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Technology evolves rapidly, and I&apos;m committed to staying current with the latest trends and best practices.
                                        I regularly contribute to open-source projects and participate in developer communities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
