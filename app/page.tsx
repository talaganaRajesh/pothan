'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Gamepad2,
  Glasses,
  Code2,
  Box,
  Mail,
  Phone,
  ChevronDown,
  ExternalLink,
  Linkedin,
  Sun,
  Moon
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {

  const [, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // setMounted and setTheme asynchronously to avoid synchronous setState inside an effect
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTimeout(() => {
      setMounted(true);
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, 0);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-(--background) text-(--foreground) selection:bg-indigo-500/30 overflow-x-hidden transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${theme === 'dark' ? 'bg-black/50 border-white/5' : 'bg-white/70 border-neutral-200'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight"
          >
            P<span className="text-indigo-500">p</span>
          </motion.div>

          <div className="hidden md:flex gap-8 items-center">
            {['Home', 'About', 'Skills', 'Projects', 'Videos', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}
                aria-label={`Scroll to ${item}`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/10 text-neutral-400' : 'hover:bg-neutral-200 text-neutral-600'}`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
            className="md:hidden px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-xs font-semibold tracking-wide transition-all text-white"
          >
            HIRE ME
          </motion.button>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/10 text-neutral-400' : 'hover:bg-neutral-200 text-neutral-600'}`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Gradients */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black transition-opacity duration-500"
          style={{ opacity: theme === 'dark' ? 0.5 : 0 }}
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent transition-opacity duration-500"
          style={{ opacity: theme === 'dark' ? 0 : 1 }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-block mb-4 px-3 py-1 border rounded-full text-xs font-medium tracking-wider uppercase transition-colors ${theme === 'dark' ? 'bg-white/5 border-white/10 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600'}`}
          >
            Game Developer & AR/VR Specialist
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-5xl md:text-8xl font-bold tracking-tight mb-6 transition-colors ${theme === 'dark' ? 'text-transparent bg-clip-text bg-linear-to-b from-white to-neutral-500' : 'text-neutral-900'}`}
          >
            Perumal Pothan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}
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
              className={`px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${theme === 'dark' ? 'bg-white text-black hover:bg-neutral-200 shadow-none' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
            >
              <Gamepad2 size={20} />
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className={`px-8 py-4 bg-transparent border rounded-full font-semibold transition-all ${theme === 'dark' ? 'border-white/20 hover:bg-white/5 text-white' : 'border-neutral-300 hover:bg-neutral-100 text-neutral-900'}`}
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'}`}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative border-t border-(--card-border) transition-colors">
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
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
              I am a Game Developer specializing in Unity and Virtual Reality development, with a strong foundation in C# programming and game development fundamentals. As a final-year Game Design and Development student, I have experience building interactive 2D, 3D, and VR applications, focusing on clean architecture, scalable systems, and optimized performance. I am passionate about creating immersive gameplay experiences and continuously improving my technical and creative skills to contribute to innovative game projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className={`aspect-square rounded-3xl overflow-hidden bg-(--card-bg) border border-(--card-border) relative group transition-colors ${theme === 'dark' ? 'shadow-none' : 'shadow-2xl'}`}>
              <div className="absolute inset-0 bg-[url('/pothan-photo.jpeg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" role="img" aria-label="Perumal Pothan" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-t border-(--card-border) bg-(--secondary-bg) transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
            <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
              My expertise spans across game engines, programming languages, and 3D modeling tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Gamepad2 size={32} className={`${theme === 'dark' ? 'text-purple-400' : 'text-purple-500'}`} />,
                title: "Game Development",
                desc: "Building interactive systems, mechanics, and logic using Unity."
              },
              {
                icon: <Glasses size={32} className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`} />,
                title: "AR/VR Development",
                desc: "Creating immersive experiences for Quest, HoloLens, and Mobile AR."
              },
              {
                icon: <Code2 size={32} className={`${theme === 'dark' ? 'text-green-400' : 'text-green-500'}`} />,
                title: "C# Programming",
                desc: "Writing clean, scalable, and efficient object-oriented code."
              },
              {
                icon: <Box size={32} className={`${theme === 'dark' ? 'text-orange-400' : 'text-orange-500'}`} />,
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
                className={`p-8 rounded-2xl border bg-(--card-bg) border-(--card-border) transition-all group ${theme === 'dark' ? 'hover:border-white/10 hover:bg-white/10' : 'hover:border-indigo-500/50 hover:shadow-lg'}`}
              >
                <div className={`mb-6 p-4 rounded-xl w-fit group-hover:scale-110 transition-transform ${theme === 'dark' ? 'bg-black/50' : 'bg-neutral-100'}`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 border-t border-(--card-border) transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Selected Works</h2>
              <p className={`${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>A showcase of my recent game and AR/VR projects.</p>
            </div>
          </div>

          <div className="grid gap-12">
            {[
              {
                title: "WithIn These Walls",
                category: "Surreal Escape Game",
                desc: "A creepy, surreal movie-set escape game where the player finds hidden tickets in weird rooms and boxes before time runs out. Each level is inspired by famous thriller movies. Built with Unity, C#, and Maya.",
                image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
                tags: ["Unity", "C#", "Maya", "Game Design"]
              },
              {
                title: "3D Endless Runner",
                category: "Procedural Action Game",
                desc: "A fast-paced prototype featuring procedural level generation, dodging obstacles, and scoring systems. Focuses on responsive controls and performance-optimized 3D assets.",
                image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
                tags: ["Unity", "C#", "Algorithms", "Optimization"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group relative grid md:grid-cols-2 gap-8 items-center rounded-3xl p-6 md:p-8 border border-(--card-border) bg-(--card-bg) transition-all ${theme === 'dark' ? 'hover:border-white/10 shadow-none' : 'hover:border-indigo-500/30 hover:shadow-xl'}` }
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner">
                  <div className={`absolute inset-0 transition-colors z-10 ${theme === 'dark' ? 'bg-indigo-900/20 group-hover:bg-transparent' : 'bg-indigo-500/10 group-hover:bg-transparent'}`} />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <div className={`text-sm font-medium tracking-wide mb-2 uppercase ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-500'}`}>{project.category}</div>
                  <h3 className={`text-3xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'group-hover:text-indigo-300' : 'group-hover:text-indigo-600'}`}>{project.title}</h3>
                  <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border ${theme === 'dark' ? 'bg-white/5 text-neutral-300 border-transparent' : 'bg-neutral-100 text-neutral-600 border-neutral-200'}`}>
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

      {/* Videos Section */}
      <section id="videos" className="py-32 border-t border-(--card-border) transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured Videos</h2>
              <p className={`${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>Watch my latest game development and AR/VR breakdowns.</p>
            </div>
            <a href="https://youtube.com/@pepoperumal" target="_blank" className={`flex items-center gap-2 transition-colors ${theme === 'dark' ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-600'}`}>
              Visit Channel <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Game Development Showcase 2024",
                desc: "A compilation of my best game mechanics, level designs, and shader experiments from the past year.",
                url: "dQw4w9WgXcQ"
              },
              {
                title: "AR/VR Interaction Demo",
                desc: "Demonstrating hand-tracking interactions and spatial UI elements in a mixed reality environment.",
                url: "LXb3EKWsInQ"
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden border border-(--card-border) bg-(--card-bg) transition-all ${theme === 'dark' ? 'hover:border-white/10 shadow-none' : 'hover:border-neutral-300 hover:shadow-xl'}` }
              >
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.url}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 transition-colors ${theme === 'dark' ? 'group-hover:text-indigo-300' : 'group-hover:text-indigo-600'}`}>{video.title}</h3>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-32 border-t border-(--card-border) bg-(--secondary-bg) transition-colors`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to create something immersive?</h2>
            <p className={`text-lg mb-12 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
              I am currently open for freelance opportunities and full-time positions.
              Let&apos;s discuss how we can bring your ideas to life.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <a
                href="mailto:pepoperumal262@gmail.com"
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-colors w-full md:w-auto justify-center shadow-lg ${theme === 'dark' ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
              >
                <Mail size={20} />
                pepoperumal262@gmail.com
              </a>
              <a
                href="tel:+919390203414"
                className={`flex items-center gap-3 px-8 py-4 bg-transparent border rounded-full font-bold transition-colors w-full md:w-auto justify-center ${theme === 'dark' ? 'border-white/10 text-white hover:bg-white/5' : 'border-neutral-300 text-neutral-900 hover:bg-neutral-200'}`}
              >
                <Phone size={20} />
                +91 9390203414
              </a>
            </div>

            <div className="flex justify-center gap-8">
              <a href="http://linkedin.com/in/perumal-pothan-3730563a2" target="_blank" rel="noopener noreferrer" className={`transition-colors ${theme === 'dark' ? 'text-neutral-500 hover:text-white' : 'text-neutral-500 hover:text-blue-600'}`}>
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-(--card-border) text-center text-sm transition-colors text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Perumal Pothan. All rights reserved.</p>
        <p className="mt-2 text-xs">
          Designed &amp; Developed by{' '}
          <a href="https://webcros.in" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">
            Webcros
          </a>
        </p>
      </footer>
    </main>
  );
}
