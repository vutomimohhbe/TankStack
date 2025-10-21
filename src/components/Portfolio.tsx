import React, { useState, useEffect } from "react";
import Supermarket from "../assets/SupermarketHome.jpg";
import MedCare from "../assets/Med.jpg";

const projects = [
  {
    image: Supermarket,
  },
  {
    image: MedCare,
  },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&w=400&h=250&fit=crop",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/35550/pexels-photo.jpg?auto=compress&w=400&h=250&fit=crop",
  //   },
];

const Portfolio: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Slideshow of our recent projects.
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className="w-full max-w-5xl bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col items-center">
            <img
              src={projects[current].image}
              alt={`Project ${current + 1}`}
              className="w-full h-[32rem] object-cover" // Larger height and full width
            />
            {/* <div className="p-8 text-center">
              <p className="text-xl text-gray-700 mb-4">
                {projects[current].description}
              </p>
            </div> */}
          </div>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border-2 ${
                current === idx
                  ? "bg-blue-600 border-blue-600"
                  : "bg-gray-300 border-gray-300"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={prevProject}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full"
            aria-label="Previous"
          >
            Previous
          </button>
          <button
            onClick={nextProject}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full"
            aria-label="Next"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
