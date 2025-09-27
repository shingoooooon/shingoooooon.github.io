import type { Metadata } from 'next';
import Header from '@/components/Header';
import About from '@/components/About';

export const metadata: Metadata = {
    title: 'About - Shingo Kubomura',
    description: 'Learn more about Shingo Kubomura, a Full-Stack Developer with digital marketing background and expertise in modern web technologies.',
};

export default function AboutPage() {
    return (
        <main>
            <Header />
            <div className="pt-16">
                <About />
            </div>
        </main>
    );
}
