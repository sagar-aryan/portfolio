import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AchievementsEducation = () => {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const dividerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(
                leftRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
            )
                .fromTo(
                    dividerRef.current,
                    { scaleY: 0 },
                    { scaleY: 1, duration: 0.8, transformOrigin: 'top center', ease: "power3.inOut" },
                    "-=0.6"
                )
                .fromTo(
                    rightRef.current,
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
                    "-=0.6"
                );

            // Underline animations
            gsap.utils.toArray('.anim-underline').forEach(line => {
                gsap.fromTo(
                    line,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 0.8,
                        transformOrigin: 'left center',
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: line,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[60vh] bg-black py-20 px-6 flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-stretch gap-12 md:gap-0">

                {/* Left Side: Achievements */}
                <div ref={leftRef} className="w-full md:w-[45%] flex flex-col items-center md:items-end md:text-right pr-0 md:pr-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest mb-2 uppercase text-center md:text-right">Experience & Achievements</h2>
                    <div className="anim-underline h-1 w-24 bg-matrix-green shadow-glow-green mb-10 rounded"></div>

                    <div className="space-y-8 w-full">
                        {/* Internship Item */}
                        <div className="group border border-gray-800 p-6 rounded-xl hover:border-matrix-green/50 hover:bg-gray-900/40 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-matrix-green scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                            <h3 className="text-xl font-bold text-white mb-1 md:text-right group-hover:text-matrix-green transition-colors">Summer Internship - NextGen Networking</h3>
                            <h4 className="text-matrix-green font-mono text-sm mb-3 md:text-right">June-July 2025</h4>
                            <ul className="text-gray-300 md:text-right space-y-2 text-sm leading-relaxed">
                                <li>Configured and tested multiple small-scale network topologies using Cisco Packet Tracer.</li>
                                <li>Learned TCP/IP model, IP addressing, subnetting, VLANs, routing protocols, and line coding.</li>
                                <li>Designed multi-router topology and validated connectivity through end-to-end testing.</li>
                            </ul>
                        </div>
                        {/* Achievement Item */}
                        <div className="group border border-gray-800 p-6 rounded-xl hover:border-matrix-green/50 hover:bg-gray-900/40 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-matrix-green scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                            <h3 className="text-xl font-bold text-white mb-1 md:text-right group-hover:text-matrix-green transition-colors">Achievements & Certificates</h3>
                            <ul className="text-gray-300 md:text-right space-y-2 text-sm leading-relaxed mt-2">
                                <li>Received <strong className="text-white">University Honor Roll</strong> for academic excellence.</li>
                                <li>Certified in <strong className="text-white">Learn with PLC Technology</strong> | Lovely Professional University.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Center Divider */}
                <div className="hidden md:flex w-[10%] justify-center items-stretch py-10">
                    <div ref={dividerRef} className="w-px bg-matrix-green/50 shadow-[0_0_10px_rgba(0,255,65,0.3)] min-h-[200px] h-full rounded-full"></div>
                </div>

                {/* Right Side: Education */}
                <div ref={rightRef} className="w-full md:w-[45%] flex flex-col items-center md:items-start pl-0 md:pl-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest mb-2 uppercase">Education</h2>
                    <div className="anim-underline h-1 w-24 bg-matrix-green shadow-glow-green mb-10 rounded"></div>

                    <div className="space-y-8 w-full border-l border-gray-800 pl-6 relative">

                        {/* Education Item */}
                        <div className="group relative">
                            <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-black border-2 border-matrix-green group-hover:bg-matrix-green group-hover:shadow-glow-green transition-all duration-300"></div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-matrix-green transition-colors">Lovely Professional University</h3>
                            <h4 className="text-gray-300 text-sm mb-1">B.Tech – Electronics and Communication Engineering</h4>
                            <h4 className="text-matrix-green font-mono text-sm mb-2">2023 - 2027 | <span className="text-white">CGPA: 8.88</span></h4>
                        </div>

                        {/* Education Item */}
                        <div className="group relative">
                            <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-black border-2 border-gray-600 group-hover:border-matrix-green group-hover:bg-matrix-green group-hover:shadow-glow-green transition-all duration-300"></div>
                            <h3 className="text-xl font-bold text-gray-300 mb-1">Aagmik Sr Sec School</h3>
                            <h4 className="text-gray-400 text-sm mb-1">Intermediate</h4>
                            <h4 className="text-gray-500 font-mono text-sm mb-2">2022 - 2023 | <span className="text-gray-400">79.6%</span></h4>
                        </div>

                        {/* Education Item */}
                        <div className="group relative">
                            <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-black border-2 border-gray-600 group-hover:border-matrix-green group-hover:bg-matrix-green group-hover:shadow-glow-green transition-all duration-300"></div>
                            <h3 className="text-xl font-bold text-gray-300 mb-1">Jawahar Navodaya Vidyalaya</h3>
                            <h4 className="text-gray-400 text-sm mb-1">Matriculation</h4>
                            <h4 className="text-gray-500 font-mono text-sm mb-2">2019 - 2020 | <span className="text-gray-400">85.6%</span></h4>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AchievementsEducation;
