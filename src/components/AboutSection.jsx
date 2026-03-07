import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const dividerRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.fromTo(
                headingRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
            )
            .fromTo(
                dividerRef.current,
                { scaleY: 0 },
                { scaleY: 1, duration: 0.8, ease: 'power3.inOut', transformOrigin: 'top center' },
                "-=0.4"
            )
            .fromTo(
                contentRef.current.children,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out' },
                "-=0.6"
            )
            .fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
                { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out' },
                "-=0.8"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[80vh] flex items-center justify-center bg-black py-20 overflow-hidden">
            <div className="max-w-7xl w-full mx-auto px-6 h-full flex flex-col md:flex-row items-stretch">
                
                {/* Left Side: Heading and Content */}
                <div className="w-full md:w-1/2 flex flex-col md:pr-10 mb-10 md:mb-0 justify-center">
                    <div className="flex items-start justify-start md:justify-end mb-10">
                        <h2 ref={headingRef} className="text-4xl md:text-6xl font-bold text-white tracking-wider flex flex-col items-start md:items-end">
                            <span>ABOUT</span>
                            <span className="text-matrix-green text-glow">ME</span>
                        </h2>
                    </div>

                    <div ref={contentRef} className="flex flex-col space-y-6 text-gray-300 leading-relaxed md:text-lg">
                        <p>
                            Aryan Sagar is an aspiring semiconductor engineer with a strong foundation in transistor-level CMOS design. His academic and project work centers around digital and analog circuit implementation using industry-standard tools such as Cadence Virtuoso and Spectre.
                        </p>
                        
                        <p>
                            He has hands-on experience in designing complete subsystems including phase-locked loops (PLL), digital arithmetic blocks, and combinational logic at the transistor level. His approach emphasizes:
                        </p>

                        <ul className="list-disc pl-5 space-y-3 text-white font-medium">
                            <li className="pl-2 marker:text-matrix-green">Device-level understanding</li>
                            <li className="pl-2 marker:text-matrix-green">Stability and frequency-domain analysis</li>
                            <li className="pl-2 marker:text-matrix-green">Power-delay optimization</li>
                            <li className="pl-2 marker:text-matrix-green">Architectural trade-off evaluation</li>
                        </ul>

                        <p>
                            In addition to VLSI design, he has practical experience in embedded systems using 8051 microcontrollers and register-level programming in C.
                        </p>

                        <p className="text-matrix-green font-semibold">
                            His long-term objective is to contribute to core semiconductor design, particularly in analog and mixed-signal integrated circuits.
                        </p>
                    </div>
                </div>

                {/* Center: Animated Vertical Divider */}
                <div className="hidden md:flex w-px justify-center items-start mx-4">
                    <div ref={dividerRef} className="w-0.5 h-full min-h-[500px] bg-matrix-green shadow-glow-green rounded"></div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center md:pl-10 mt-10 md:mt-0">
                    <div ref={imageRef} className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-glow-green-strong border border-matrix-green/30 group">
                        <img 
                            src="/data/aryan_sagar_portrait.jpeg" 
                            alt="Aryan Sagar Portrait" 
                            className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
