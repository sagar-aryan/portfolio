import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: "Transistor-Level Phase Locked Loop (PLL)",
        image: "/data/pll 2.4 complete.png",
        overview: "Designed and simulated a transistor-level PLL achieving a stable frequency lock across the target operating range through phase-frequency detector, charge pump, loop filter and VCO architecture.",
        architecture: [
            "Phase-Frequency Detector",
            "Charge Pump",
            "Loop Filter",
            "Voltage-Controlled Oscillator (VCO)"
        ],
        architectureNote: "Implemented in Cadence Virtuoso using analog/mixed-signal VLSI techniques.",
        objectives: [
            "Achieve stable frequency lock across operating range",
            "Characterize loop stability and lock dynamics",
            "Evaluate power-performance trade-offs across operating corners"
        ],
        validation: [
            "DC operating point analysis",
            "Transient analysis for lock dynamics",
            "Frequency-domain simulations"
        ],
        outcome: "Successfully achieved stable frequency lock and thoroughly characterized loop stability, control voltage behavior, and lock dynamics."
    },
    {
        title: "Carry Select Adder (CSA)",
        image: "/data/carry selsct adderpng.png",
        overview: "Designed a transistor-level Carry Select Adder using CMOS, achieving significantly lower propagation delay compared to ripple carry adder architecture.",
        architecture: [
            "CMOS Transistor-level implementation",
            "Carry Selection logic",
            "Ripple Carry Adders (baseline comparison)"
        ],
        architectureNote: "Implemented and simulated using Cadence Virtuoso for Digital VLSI Design.",
        objectives: [
            "Lower propagation delay compared to standard RCA",
            "Evaluate speed, area and power trade-offs",
            "Verify functionality at transistor level"
        ],
        validation: [
            "Delay propagation analysis",
            "Power consumption measurement",
            "Baseline comparison with Ripple Carry Adder"
        ],
        outcome: "Achieved significantly lower propagation delay while successfully evaluating architectural trade-offs between speed, area and power."
    },
    {
        title: "3:8 Decoder",
        image: "/data/3_8 decoder.png",
        overview: "Designed and optimised a 3:8 CMOS decoder at the transistor level using NMOS/PMOS logic, reducing propagation delay by 18% compared to baseline implementation along with lower power consumption.",
        architecture: [
            "Transistor-level CMOS implementation",
            "NMOS/PMOS logic gates",
            "Built using NOR and NOT gates",
            "Realized in SOP form using 54-transistor realization"
        ],
        architectureNote: "Optimized at the transistor level for digital logic characteristics.",
        objectives: [
            "Reduce propagation delay",
            "Lower power consumption",
            "Optimize logic using purely NOR and NOT gates"
        ],
        validation: [
            "DC and Transient simulations",
            "Static and dynamic behaviour analysis",
            "Delay and power characteristics validation"
        ],
        outcome: "Successfully reduced propagation delay by 18% while simultaneously lowering power consumption compared to baseline."
    },
    {
        title: "Visitor Counter using 8051 Microcontroller",
        image: "/data/visitor counter.jpeg",
        overview: "Implemented an 8051-based bidirectional visitor counter with interrupt-driven LCD interfacing for real-time occupancy tracking.",
        architecture: [
            "8051 Microcontroller",
            "Bidirectional counting logic",
            "LCD interface module"
        ],
        architectureNote: "Developed bare-metal firmware in Embedded C with register-level programming.",
        objectives: [
            "Real-time occupancy tracking",
            "Interrupt-driven peripheral interfacing",
            "Bi-directional counting capability"
        ],
        validation: [
            "Interrupt handling verification",
            "LCD control handling in real-time operation",
            "Peripheral interfacing validation"
        ],
        outcome: "Successfully developed a robust embedded system with register-level firmware capable of real-time data updates and accurate tracking."
    }
];

const ProjectsSection = () => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const introRef = useRef(null);
    const slidesRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const numSlides = slidesRef.current.length;
            const scrollDistanceVW = -100 * (numSlides - 1); // e.g., -300vw
            
            // Intro Screen Animation - runs exactly once when pinning starts
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                once: true,
                onEnter: () => {
                    gsap.to(introRef.current, { 
                        yPercent: -100, 
                        opacity: 0, 
                        scale: 1.05, 
                        duration: 1.2, 
                        ease: "power3.inOut" 
                    });
                }
            });

            // Horizontal Scroll with Buffer
            // 300% for translation (each slide is 100vh of scroll distance)
            // 150% buffer (1.5x of a project slide)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${100 * (numSlides - 1) + 150}%`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });

            // The translation part
            tl.to(wrapperRef.current, {
                x: `${scrollDistanceVW}vw`,
                ease: "none",
                duration: (numSlides - 1) // e.g., 3 units of time
            });

            // The buffer part - keeps pinned but doesn't translate
            tl.to({}, { duration: 1.5 }); // 1.5 units of time

            // Animate contents of each slide
            slidesRef.current.forEach((slide) => {
                const image = slide.querySelector('.project-image');
                const content = slide.querySelector('.project-content');
                const divider = slide.querySelector('.project-divider');
                const listItems = slide.querySelectorAll('li');

                gsap.fromTo(
                    image,
                    { x: -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: (numSlides - 1) * 0.3,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: slide,
                            containerAnimation: tl,
                            start: "left 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                gsap.fromTo(
                    divider,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        duration: (numSlides - 1) * 0.3,
                        transformOrigin: "top center",
                        ease: "power3.inOut",
                        scrollTrigger: {
                            trigger: slide,
                            containerAnimation: tl,
                            start: "left 70%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                gsap.fromTo(
                    [content.querySelector('h3'), content.querySelector('.overview')],
                    { x: 50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: (numSlides - 1) * 0.3,
                        stagger: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: slide,
                            containerAnimation: tl,
                            start: "left 60%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                gsap.fromTo(
                    listItems,
                    { opacity: 0, x: 20 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: (numSlides - 1) * 0.2,
                        stagger: 0.05,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: slide,
                            containerAnimation: tl,
                            start: "left 50%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects-intro" ref={containerRef} className="relative bg-black h-screen overflow-hidden">
            
            {/* Intro Overlay Screen */}
            <div ref={introRef} className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-circuit-grid bg-circuit-grid-size text-matrix-green">
                <div className="absolute inset-0 z-0 bg-black/50"></div>
                <h2 className="relative z-10 w-full text-center text-[10vw] md:text-[8vw] tracking-[0.2em] md:tracking-[0.3em] font-light animate-pulse opacity-20 text-glow whitespace-nowrap overflow-visible">
                    PR<span className="text-white">O</span>JECTS
                </h2>
            </div>

            {/* Horizontal Scroll Wrapper */}
            <div
                ref={wrapperRef}
                className="flex flex-row flex-nowrap h-screen w-[400vw] shrink-0"
            >
                {projectsData.map((project, idx) => (
                    <div
                        key={idx}
                        ref={el => slidesRef.current[idx] = el}
                        className="w-screen h-screen shrink-0 flex flex-col md:flex-row items-center px-6 md:px-12 py-10 relative"
                    >
                        {/* Slide Index Marker */}
                        <div className="absolute top-10 right-10 md:top-20 md:right-20 text-6xl md:text-9xl font-bold text-white/[0.03] select-none pointer-events-none font-mono">
                            0{idx + 1}
                        </div>

                        {/* Left: Image */}
                        <div className="project-image w-full md:w-[45%] h-[40vh] md:h-[80vh] bg-gray-900 rounded-xl overflow-hidden relative group border border-gray-800">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                            {/* Fallback to dark block if image fails */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-700 bg-gray-950 -z-10">
                                [ Image Offline / {project.title} ]
                            </div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>

                        {/* Center: Divider */}
                        <div className="hidden md:flex w-[10%] justify-center items-center h-full">
                            <div className="project-divider w-1 md:w-0.5 h-[60%] bg-matrix-green shadow-glow-green rounded-full"></div>
                        </div>

                        {/* Right: Content */}
                        <div className="project-content w-full md:w-[45%] h-[50vh] md:h-[80vh] flex flex-col justify-center overflow-y-auto pr-4 no-scrollbar mt-6 md:mt-0">

                            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-6 pb-4 border-b border-gray-800">
                                {project.title}
                            </h3>

                            <div className="space-y-8 text-gray-300">

                                <div className="overview group">
                                    <h4 className="text-matrix-green font-mono mb-2 uppercase tracking-widest text-sm opacity-80 group-hover:opacity-100 group-hover:text-glow transition-all">Overview</h4>
                                    <p className="leading-relaxed text-sm md:text-base">{project.overview}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-white font-mono mb-3 uppercase tracking-widest text-sm border-l-2 border-matrix-green pl-2">System Architecture</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-sm">
                                            {project.architecture.map((item, i) => (
                                                <li key={i} className="marker:text-matrix-green/50">{item}</li>
                                            ))}
                                        </ul>
                                        <p className="mt-3 text-xs text-gray-500 italic">{project.architectureNote}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-mono mb-3 uppercase tracking-widest text-sm border-l-2 border-matrix-green pl-2">Design Objectives</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-sm">
                                            {project.objectives.map((item, i) => (
                                                <li key={i} className="marker:text-matrix-green/50">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-white font-mono mb-3 uppercase tracking-widest text-sm border-l-2 border-matrix-green pl-2">Simulation & Validation</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-sm">
                                            {project.validation.map((item, i) => (
                                                <li key={i} className="marker:text-matrix-green/50">{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-matrix-green font-mono mb-3 uppercase tracking-widest text-sm border-l-2 border-matrix-green pl-2">Engineering Outcome</h4>
                                        <p className="text-sm leading-relaxed">{project.outcome}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
