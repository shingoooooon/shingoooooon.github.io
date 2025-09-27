export default function About() {
    return (
        <section id="about" className="bg-[#2f324a] text-white py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8">About Me</h2>
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            I&apos;m a passionate <span className="text-[#74fac0] font-semibold">Full-Stack Developer</span> with a strong background in digital marketing.
                            I love creating innovative web applications that solve real-world problems and provide exceptional user experiences.
                        </p>
                        <p>
                            With expertise in modern technologies like <span className="text-[#74fac0] font-semibold">Next.js</span>, <span className="text-[#74fac0] font-semibold">TypeScript</span>,
                            <span className="text-[#74fac0] font-semibold">Vue.js</span>, and <span className="text-[#74fac0] font-semibold">React</span>, I build scalable and performant applications
                            that meet both user needs and business objectives.
                        </p>
                        <p>
                            My digital marketing background gives me a unique perspective on user experience and conversion optimization,
                            allowing me to create not just functional applications, but also user-focused solutions that drive results.
                            Outside of coding, I enjoy raising my one-year-old daughter and spending time on the tennis court, which keep me inspired and balanced.
                        </p>
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-6 text-[#74fac0]">Skills & Technologies</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="bg-[#3a3d5a] p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Frontend</h4>
                                    <p className="text-sm text-gray-300">React, Next.js, Vue.js, TypeScript, Tailwind CSS</p>
                                </div>
                                <div className="bg-[#3a3d5a] p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Backend</h4>
                                    <p className="text-sm text-gray-300">Node.js, NestJS, Ruby on Rails, PostgreSQL</p>
                                </div>
                                <div className="bg-[#3a3d5a] p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Tools</h4>
                                    <p className="text-sm text-gray-300">Git, Firebase, Vercel, Figma</p>
                                </div>
                                <div className="bg-[#3a3d5a] p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Marketing</h4>
                                    <p className="text-sm text-gray-300">SEO, Analytics, UX/UI Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
