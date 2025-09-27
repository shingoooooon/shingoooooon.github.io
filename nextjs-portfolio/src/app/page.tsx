import type { Metadata } from 'next';
import Header from '@/components/Header';
import Banner from '@/components/Banner';

export const metadata: Metadata = {
  title: 'Shingo Kubomura - Full-Stack Developer',
  description: 'Portfolio of Shingo Kubomura, a Full-Stack Developer with Digital marketing background. Explore my projects and learn about my skills.',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
    </main>
  );
}