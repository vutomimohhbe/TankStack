import React, { useState, useEffect } from "react";
import logo from "../assets/tankstacklogo.jpg";

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "portfolio", label: "Portfolio" },
    { id: "solutions", label: "Solutions" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              <span className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="TankStack logo"
                  className="h-11 w-11 object-cover rounded-full ring-2 ring-white/30 shadow-md"
                />
                <span
                  className={`font-display text-xl font-semibold tracking-tight ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  TankStack
                </span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-gradient-to-r after:from-blue-600 after:to-teal-500 after:transition-all after:duration-300 ${
                  activeSection === item.id
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                } ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-blue-700"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-700"
                  : "text-white hover:text-blue-200"
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
