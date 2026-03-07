import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const skillsData = [
        {
            title: "Design Tools",
            items: ["Cadence Virtuoso (Spectre)", "NC-Sim (Incisive)", "Xilinx Vivado"]
        },
        {
            title: "Languages",
            items: ["C", "C++", "Verilog HDL"]
        },
        {
            title: "Hardware & Platforms",
            items: ["8051 Microcontroller", "Keil µVision"]
        },
        {
            title: "Soft Skills",
            items: ["Problem Solving", "Team Collaboration", "Analytical Thinking"]
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal cards staggerly
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[70vh] w-full bg-black py-20 px-6 flex items-center justify-center">
            <div className="max-w-6xl w-full mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
                        TECHNICAL <span className="text-matrix-green text-glow">SKILLS</span>
                    </h2>
                    <div className="h-1 w-24 bg-matrix-green shadow-glow-green mx-auto mt-4 rounded"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((category, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="group relative p-6 bg-gray-900/50 border border-matrix-green/20 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-matrix-green hover:shadow-glow-green flex flex-col items-center text-center"
                        >
                            <h3 className="text-xl font-semibold w-full text-white mb-6 pb-2 border-b border-gray-700/50 group-hover:text-matrix-green transition-colors duration-300">
                                {category.title}
                            </h3>

                            <ul className="space-y-3 w-full">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SkillsSection;
