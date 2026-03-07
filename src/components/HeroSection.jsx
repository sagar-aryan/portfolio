import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDownToLine, Github, Linkedin, ArrowRight } from 'lucide-react';

const HeroSection = () => {
    const containerRef = useRef(null);
    const nameRef = useRef(null);
    const descRef = useRef(null);
    const lineRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                nameRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2, delay: 0.2 }
            )
                .fromTo(
                    lineRef.current,
                    { scaleX: 0 },
                    { scaleX: 1, duration: 0.8, transformOrigin: 'left center' },
                    "-=0.6"
                )
                .fromTo(
                    descRef.current.children,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
                    "-=0.4"
                )
                .fromTo(
                    buttonsRef.current.children,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
                    "-=0.4"
                );

            // Parallax effect on scroll
            gsap.to(containerRef.current, {
                yPercent: 30,
                scale: 0.95,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Animated Circuit Grid Background */}
            <div className="absolute inset-0 z-0 bg-circuit-grid bg-circuit-grid-size opacity-20"></div>

            <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">

                {/* Name Prefix */}
                <div ref={nameRef} className="mb-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
                        ARYAN SAGAR
                    </h1>
                    <div ref={lineRef} className="h-1 w-full bg-matrix-green shadow-glow-green rounded"></div>
                </div>

                {/* Subheadings */}
                <div ref={descRef} className="mb-10 flex flex-col items-center space-y-4">
                    <h2 className="text-2xl md:text-3xl font-mono text-matrix-green text-glow">
                        VLSI Design Student
                    </h2>
                    <h3 className="text-xl md:text-2xl font-light text-gray-300">
                        Analog/Digital CMOS Design Enthusiast
                    </h3>

                    <p className="max-w-2xl text-gray-400 mt-6 leading-relaxed text-sm md:text-base">
                        Aryan Sagar is an Electronics and Communication Engineering undergraduate specializing
                        in transistor-level CMOS design and mixed-signal circuit simulation. His work focuses
                        on optimizing performance, analyzing power-delay trade-offs, and validating circuit
                        stability using industry-standard EDA tools.
                    </p>
                </div>

                {/* Action Buttons */}
                <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4 mt-4">

                    <a href="#projects-intro" className="group flex items-center gap-2 px-6 py-3 bg-matrix-green/10 text-matrix-green border border-matrix-green/50 rounded hover:bg-matrix-green/20 hover:shadow-glow-green transition-all duration-300">
                        <span>View Projects</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a href="/data/aryan%20sagar%20.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-transparent text-white border border-white/20 rounded hover:border-matrix-green hover:text-matrix-green hover:shadow-glow-green transition-all duration-300">
                        <ArrowDownToLine className="w-4 h-4" />
                        <span>Download Resume</span>
                    </a>

                    <a href="https://github.com/sagar-aryan" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-3 bg-transparent text-gray-400 border border-white/10 rounded hover:border-matrix-green hover:text-matrix-green hover:shadow-glow-green transition-all duration-300">
                        <Github className="w-5 h-5" />
                    </a>

                    <a href="https://linkedin.com/in/sagar-aryan" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-3 bg-transparent text-gray-400 border border-white/10 rounded hover:border-matrix-green hover:text-matrix-green hover:shadow-glow-green transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                    </a>

                </div>

            </div>
        </section>
    );
};

export default HeroSection;
