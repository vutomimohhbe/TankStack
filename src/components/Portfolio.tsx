import React, { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Supermarket from "../assets/SupermarketHome.jpg";
import MedCare from "../assets/Med.jpg";
import InmedScreenshot from "../assets/Inmed_photo.jpg";

interface Project {
  image: string | null;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    image: Supermarket,
    title: "Supermarket E-Commerce Platform",
    category: "Web Development",
    description:
      "A modern online grocery storefront with intuitive browsing, cart, and checkout — built for speed and conversions.",
    tags: ["React", "E-Commerce", "Responsive"],
  },
  {
    image: MedCare,
    title: "MedCare Health Platform",
    category: "Web Development",
    description:
      "A clean, trustworthy healthcare website with appointment booking and service information, designed around patients.",
    tags: ["React", "Healthcare", "UI/UX"],
  },
  {
    image: InmedScreenshot,
    title: "INMED South Africa",
    category: "Website Development",
    description:
      "Building pathways to wellbeing & self-reliance for every child & family. A professional nonprofit website highlighting programs, impact, and community engagement.",
    tags: ["Website", "Nonprofit", "Community"],
  },
];

const AUTOPLAY_MS = 7000;

const Portfolio: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextProject = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-play, paused while hovering
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextProject, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused, nextProject]);

  const project = projects[current];

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-28 bg-slate-950 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-blue-700/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 w-[30rem] h-[30rem] bg-teal-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal-400 uppercase tracking-[0.25em] mb-3">
            Our Work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4">
            Selected Projects
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-sky-400 to-teal-400 mx-auto mb-5" />
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A glimpse of what we build — crafted with care, designed to
            perform.
          </p>
        </div>

        {/* Showcase */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-blue-950/50">
              {projects.map((p, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  aria-hidden={current !== idx}
                >
                  {p.image ? (
                    <>
                      <img
                        src={p.image}
                        alt={p.title}
                        className={`w-full h-full object-cover ${
                          current === idx ? "animate-ken-burns" : ""
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-slate-300 text-sm font-medium">Image coming soon</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Counter */}
              <div className="absolute top-5 right-6 z-20 text-white/90 text-sm font-medium tracking-widest">
                {String(current + 1).padStart(2, "0")}
                <span className="text-white/40">
                  {" "}
                  / {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="lg:col-span-5">
            <div key={current} className="animate-fade-in-up">
              <span className="font-display text-6xl sm:text-7xl font-semibold text-white/10 leading-none select-none">
                {String(current + 1).padStart(2, "0")}
              </span>
              <p className="text-xs font-semibold text-teal-400 uppercase tracking-[0.25em] mt-4 mb-3">
                {project.category}
              </p>
              <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4 leading-tight">
                {project.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 text-xs font-medium text-slate-200 rounded-full ring-1 ring-white/15 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevProject}
                aria-label="Previous project"
                className="w-12 h-12 rounded-full ring-1 ring-white/20 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextProject}
                aria-label="Next project"
                className="w-12 h-12 rounded-full ring-1 ring-white/20 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Indicators */}
              <div className="flex items-center gap-2.5 ml-4">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to project ${idx + 1}`}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      current === idx
                        ? "w-10 bg-gradient-to-r from-sky-400 to-teal-400"
                        : "w-4 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
