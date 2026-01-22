'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Gamepad2,
  Glasses,
  Code2,
  Box,
  Mail,
  Phone,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Layers
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight"
          >
            P<span className="text-indigo-500">.</span>
          </motion.div>

          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            HIRE ME
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-indigo-400 text-xs font-medium tracking-wider uppercase"
          >
            Game Developer & AR/VR Specialist
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500"
          >
            Perumal Pothan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Crafting immersive digital worlds and interactive experiences with a passion for cutting-edge technology and creative design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 bg-white text-black hover:bg-neutral-200 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Gamepad2 size={20} />
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-full font-semibold transition-all"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-indigo-500 rounded-full inline-block"></span>
              About Me
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Hello! I'm Perumal, a dedicated developer specializing in creating engaging games and augmented/virtual reality applications. With a strong foundation in C# and extensive experience in 3D content creation using tools like Maya, I bring ideas from concept to reality.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              My journey is driven by a fascination for how technology can create new forms of art and interaction. Whether it's developing game mechanics, modeling complex 3D assets, or building immersive AR worlds, I am committed to delivering high-quality, polished experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 relative group">
              {/* Pattern / Graphic placeholder since no personal image provided */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                  <Code2 className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                  <p className="font-mono text-sm text-neutral-300">Turning Code into Reality</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-neutral-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              My expertise spans across game engines, programming languages, and 3D modeling tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Gamepad2 size={32} className="text-purple-400" />,
                title: "Game Development",
                desc: "Building interactive systems, mechanics, and logic using Unity."
              },
              {
                icon: <Glasses size={32} className="text-blue-400" />,
                title: "AR/VR Development",
                desc: "Creating immersive experiences for Quest, HoloLens, and Mobile AR."
              },
              {
                icon: <Code2 size={32} className="text-green-400" />,
                title: "C# Programming",
                desc: "Writing clean, scalable, and efficient object-oriented code."
              },
              {
                icon: <Box size={32} className="text-orange-400" />,
                title: "Maya & 3D Modeling",
                desc: "Hard-surface modeling, UV mapping, and texturing assets."
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group"
              >
                <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Selected Works</h2>
              <p className="text-neutral-400">A showcase of my recent game and AR/VR projects.</p>
            </div>
            <a href="https://github.com/pepoperumal" target="_blank" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
              View Github <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid gap-12">
            {[
              {
                title: "WithIn These Walls",
                category: "Surreal Escape Game",
                desc: "A creepy, surreal movie-set escape game where the player finds hidden tickets in weird rooms and boxes before time runs out. Each level is inspired by famous thriller movies. Built with Unity, C#, and Maya.",
                image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop", // Placeholder fitting the vibe
                tags: ["Unity", "C#", "Maya", "Game Design"]
              },
              {
                title: "3D Endless Runner",
                category: "Procedural Action Game",
                desc: "A fast-paced prototype featuring procedural level generation, dodging obstacles, and scoring systems. Focuses on responsive controls and performance-optimized 3D assets.",
                image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop", // Placeholder fitting the vibe
                tags: ["Unity", "C#", "Algorithms", "Optimization"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative grid md:grid-cols-2 gap-8 items-center bg-neutral-900/20 rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <div className="text-indigo-400 text-sm font-medium tracking-wide mb-2 uppercase">{project.category}</div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 border-t border-white/5 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to create something immersive?</h2>
            <p className="text-neutral-400 text-lg mb-12">
              I am currently open for freelance opportunities and full-time positions.
              Let's discuss how we can bring your ideas to life.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <a
                href="mailto:pepoperumal262@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors w-full md:w-auto justify-center"
              >
                <Mail size={20} />
                pepoperumal262@gmail.com
              </a>
              <a
                href="tel:+919390203414"
                className="flex items-center gap-3 px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-colors w-full md:w-auto justify-center"
              >
                <Phone size={20} />
                +91 9390203414
              </a>
            </div>

            <div className="flex justify-center gap-8">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-neutral-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Perumal Pothan. All rights reserved.</p>
        <p className="mt-2 text-xs">Designed & Developed with Next.js</p>
      </footer>
    </main>
  );
}
