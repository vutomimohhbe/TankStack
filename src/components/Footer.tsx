import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-white py-14">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="font-display text-3xl font-semibold bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent mb-4">
              TankStack
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Modern tech solutions for growing businesses. We solve your
              technology challenges so you can focus on what matters most - your
              growth and success.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full ring-1 ring-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full ring-1 ring-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:tankstackinfo@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full ring-1 ring-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("portfolio")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("solutions")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Website Development</span>
              </li>
              <li>
                <span className="text-gray-400">Security & Vulnerability</span>
              </li>
              <li>
                <span className="text-gray-400">Support & Bug Fixes</span>
              </li>
              <li>
                <span className="text-gray-400">Performance Optimization</span>
              </li>
              <li>
                <span className="text-gray-400">SEO & Analytics</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} TankStack. All rights reserved. Built with passion
            for technology and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
