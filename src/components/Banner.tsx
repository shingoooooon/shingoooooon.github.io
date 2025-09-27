'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
    return (
        <div id="home" className="min-h-screen flex items-center bg-[#2f324a] text-white pt-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-8">
                        <h1 className="text-5xl lg:text-6xl font-bold">
                            Hi, I&apos;m <span className="text-[#74fac0]">Shingo</span>
                        </h1>
                        <h3 className="text-2xl lg:text-3xl">
                            <span className="text-[#74fac0]">Full-Stack Developer</span> with Digital marketing background
                        </h3>
                        <Link
                            href="/projects"
                            className="inline-block border-2 border-white text-white px-6 py-3 hover:bg-[#74fac0] hover:text-[#2f324a] transition-all duration-500"
                        >
                            View Projects
                        </Link>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src="/images/LW-Profile-Green.jpg"
                            alt="Shingo Kubomura"
                            width={500}
                            height={600}
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
