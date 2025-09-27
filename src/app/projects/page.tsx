import type { Metadata } from 'next';
import Header from '@/components/Header';
import Projects from '@/components/Projects';

export const metadata: Metadata = {
    title: 'Projects - Shingo Kubomura',
    description: 'Explore my portfolio of web development projects including e-commerce platforms, task managers, and interactive applications.',
};

export default function ProjectsPage() {
    return (
        <main>
            <Header />
            <div className="pt-16">
                <Projects />
            </div>
        </main>
    );
}
