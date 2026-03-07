import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EngineeringSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const introRef = useRef(null);
    const listRef = useRef(null);
    const emphasisRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(
                headingRef.current,
                { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
                { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
            )
                .fromTo(
                    introRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                    "-=0.5"
                )
                .fromTo(
                    listRef.current.children,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(1.2)' },
                    "-=0.4"
                )
                .fromTo(
                    emphasisRef.current,
                    { opacity: 0, filter: 'blur(5px)' },
                    { opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' },
                    "-=0.2"
                );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[70vh] flex flex-col items-center justify-center bg-black py-24 px-6 overflow-hidden">

            {/* Background accents */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/20 to-black pointer-events-none z-0"></div>

            <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">

                <h2 ref={headingRef} className="text-4xl md:text-6xl font-bold text-center tracking-widest text-matrix-green text-glow mb-12">
                    ENGINEERING APPROACH
                </h2>

                <div className="w-full bg-gray-900/40 border-l-[3px] border-matrix-green p-8 md:p-12 rounded-r-2xl backdrop-blur-sm shadow-2xl">

                    <p ref={introRef} className="text-xl md:text-2xl font-light text-gray-200 mb-8 leading-relaxed">
                        Aryan approaches circuit design from a <span className="text-white font-medium">device-level perspective</span>. His workflow includes:
                    </p>

                    <ul ref={listRef} className="space-y-4 mb-10 text-lg text-gray-400 font-mono">
                        <li className="flex items-center group">
                            <span className="text-matrix-green mr-4 group-hover:scale-150 transition-transform">▸</span>
                            <span className="group-hover:text-white transition-colors duration-300">Architectural planning</span>
                        </li>
                        <li className="flex items-center group">
                            <span className="text-matrix-green mr-4 group-hover:scale-150 transition-transform">▸</span>
                            <span className="group-hover:text-white transition-colors duration-300">Device sizing and bias strategy</span>
                        </li>
                        <li className="flex items-center group">
                            <span className="text-matrix-green mr-4 group-hover:scale-150 transition-transform">▸</span>
                            <span className="group-hover:text-white transition-colors duration-300">Simulation across operating conditions</span>
                        </li>
                        <li className="flex items-center group">
                            <span className="text-matrix-green mr-4 group-hover:scale-150 transition-transform">▸</span>
                            <span className="group-hover:text-white transition-colors duration-300">Stability and power-performance analysis</span>
                        </li>
                        <li className="flex items-center group">
                            <span className="text-matrix-green mr-4 group-hover:scale-150 transition-transform">▸</span>
                            <span className="group-hover:text-white transition-colors duration-300">Design validation through waveform inspection</span>
                        </li>
                    </ul>

                    <div ref={emphasisRef} className="pt-8 border-t border-gray-800">
                        <p className="text-xl md:text-2xl text-center text-matrix-green/90 font-light tracking-wide italic">
                            "He emphasizes <strong className="text-white font-semibold">robustness</strong>, <strong className="text-white font-semibold flex-inline">efficiency</strong>, and <strong className="text-white font-semibold">scalability</strong> in semiconductor systems."
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default EngineeringSection;
