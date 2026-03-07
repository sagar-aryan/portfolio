import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Github, Linkedin, ArrowUpRight, Phone } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(
                textRef.current,
                { opacity: 0, y: 30, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
            )
                .fromTo(
                    buttonsRef.current.children,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(1.5)' },
                    "-=0.5"
                );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <footer ref={sectionRef} className="relative min-h-[50vh] flex flex-col items-center justify-center bg-black py-20 px-6 border-t border-gray-900/50">

            {/* Background radial gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-matrix-green/5 blur-[150px] pointer-events-none rounded-full"></div>

            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">

                <h2
                    ref={textRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-16 max-w-3xl"
                >
                    Let’s Build <span className="text-matrix-green text-glow-strong block mt-2">Semiconductor Systems.</span>
                </h2>

                <div ref={buttonsRef} className="flex flex-wrap justify-center gap-6">

                    <a href="mailto:aryan20052018@gmail.com" className="group flex items-center gap-3 px-8 py-4 bg-matrix-green/10 text-matrix-green border border-matrix-green rounded hover:bg-matrix-green/20 hover:shadow-glow-green transition-all duration-300">
                        <Mail className="w-5 h-5" />
                        <span className="font-medium tracking-widest uppercase text-sm">Email Me</span>
                    </a>

                    <a href="tel:+918352070321" className="group flex items-center gap-3 px-8 py-4 bg-transparent text-white border border-white/20 rounded hover:border-matrix-green hover:text-matrix-green hover:shadow-glow-green transition-all duration-300">
                        <Phone className="w-5 h-5" />
                        <span className="font-medium tracking-widest uppercase text-sm">+91-8352070321</span>
                    </a>

                    <a href="/data/aryan sagar .pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 bg-transparent text-white border border-white/20 rounded hover:border-matrix-green hover:text-matrix-green hover:shadow-glow-green transition-all duration-300">
                        <span className="font-medium tracking-widest uppercase text-sm">Resume</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>

                    <a href="https://linkedin.com/in/sagar-aryan" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-4 bg-transparent text-gray-400 border border-transparent rounded hover:text-matrix-green hover:shadow-[0_4px_15px_rgba(0,255,65,0.2)] transition-all duration-300">
                        <Linkedin className="w-6 h-6" />
                    </a>

                    <a href="https://github.com/sagar-aryan" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-4 bg-transparent text-gray-400 border border-transparent rounded hover:text-matrix-green hover:shadow-[0_4px_15px_rgba(0,255,65,0.2)] transition-all duration-300">
                        <Github className="w-6 h-6" />
                    </a>

                </div>

            </div>

            <div className="absolute bottom-8 text-gray-700 text-xs font-mono">
                © {new Date().getFullYear()} Aryan Sagar. Designed at the transistor level.
            </div>

        </footer>
    );
};

export default ContactSection;
