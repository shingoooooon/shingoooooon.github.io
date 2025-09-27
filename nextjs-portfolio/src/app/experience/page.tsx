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
    location: string,
    period: string;
    description: string;
    technologies: string[];
    achievements?: string[];
}

const experiences: Experience[] = [
    {
        id: 'sutrix',
        title: 'Web Developer',
        company: 'Sutrix Solutions Japan',
        location: 'Tokyo, Japan',
        period: '2024 Apr - Present',
        description: 'Led multinational development teams for enterprise AEM projects and developed highly customized WordPress community websites. Focused on admin panel enhancements, plugin customization, and front-end architecture.',
        technologies: ['React', 'GraphQL', 'AEM', 'WordPress', 'Docekr'],
        achievements: [
            'Led a team of developers across multiple countries to deliver enterprise-level AEM projects',
            'Developed a community website with advanced admin panel customization and plugin integration',
        ]
    },
    {
        id: 'mango',
        title: 'Web Developer',
        company: 'Mango Byte',
        location: 'Phnom Penh, Cambodia',
        period: '2022 Oct - 2024 Mar',
        description: 'Developed e-commerce and order management systems using modern web technologies. Acted as primary contact for clients, ensuring smooth project delivery for offshore development projects.',
        technologies: ['TypeScript', 'Vue.js', 'Nuxt', 'Node.js', 'NestJS', 'PHP', 'Laravel'],
        achievements: [
            'Developed full-featured e-commerce platform and order management system',
            'Acted as sole engineer in client meetings, providing technical guidance and support',
            'Ensured smooth offshore project delivery through effective communication and team coordination'
        ]
    },
    {
        id: 'adways',
        title: 'Digital Ad Ops',
        company: 'Adways Philippines Inc.',
        location: 'Cebu, Philippines',
        period: '2020 May - 2021 Dec',
        description: 'Managed digital ad campaigns from setup to optimization across Google, Yahoo!, Facebook, Instagram, Twitter, YouTube, and LINE, performing QA, tracking with Google Tag Manager, and achieving client CPA targets.',
        technologies: ['Google Ads (Search/Display)', 'Yahoo! Ads', 'Facebook/Instagram Ads', 'Twitter Ads', 'YouTube Ads', 'LINE Ads', 'Google Analytics', 'Google Tag Manager'],
        achievements: [
            'Achieved client\'s target CPA in a ¥10,000,000/month project',
            'Achieved decreasing client\'s target CPA from ¥14,000 to ¥9,500',
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
                                                    <p className="text-gray-300">{exp.location}</p>
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

                        {/* Education Section */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-[#74fac0] mb-8 text-center">Education</h2>
                            <div className="bg-[#3a3d5a] rounded-lg p-8">
                                <div className="flex items-start space-x-6">
                                    {/* Education Icon */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-[#74fac0] rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-[#2f324a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        </svg>
                                    </div>

                                    {/* Education Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-[#74fac0]">Web Development Bootcamp</h3>
                                                <p className="text-xl text-white">Le Wagon Tokyo</p>
                                                <p className="text-gray-300">Tokyo, Japan</p>
                                            </div>
                                            <span className="text-[#74fac0] font-semibold mt-2 md:mt-0">2022 Apr - 2022 Jun</span>
                                        </div>

                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            Intensive 9-week full-stack web development bootcamp covering modern web technologies,
                                            agile development practices, and real-world project experience. Learned Ruby on Rails,
                                            JavaScript, HTML/CSS, PostgreSQL, Git, and Heroku deployment.
                                        </p>

                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-[#74fac0] mb-3">Key Learnings</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {['Ruby on Rails', 'JavaScript', 'HTML/CSS', 'PostgreSQL', 'Git', 'Heroku', 'Agile Development', 'Team Collaboration'].map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="bg-[#2f324a] text-[#74fac0] px-3 py-1 rounded-full text-sm"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-[#74fac0] mb-3">Projects Completed</h4>
                                            <ul className="space-y-2">
                                                <li className="text-gray-300 flex items-start">
                                                    <span className="text-[#74fac0] mr-2">•</span>
                                                    Developed 3 full-stack applications including MVP development
                                                </li>
                                                <li className="text-gray-300 flex items-start">
                                                    <span className="text-[#74fac0] mr-2">•</span>
                                                    Collaborated in agile development teams using modern workflows
                                                </li>
                                                <li className="text-gray-300 flex items-start">
                                                    <span className="text-[#74fac0] mr-2">•</span>
                                                    Mastered version control, testing, and deployment practices
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
