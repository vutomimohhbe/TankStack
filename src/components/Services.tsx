import React from 'react';
import { Wrench, ShieldCheck, Bug, Gauge, Search, Puzzle } from 'lucide-react';

interface SolutionsSectionProps {
  company?: {
    name: string;
    whatsapp: string;
    email: string;
  };
  pricing?: {
    quickFix: string;
    carePlan: string;
  };
  onQuickFix?: () => void;
  onRequestAudit?: () => void;
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  company = {
    name: 'TankStack',
    whatsapp: '+27 78 349 8265',
    email: 'tankstackinfo@gmail.com'
  },
  pricing = {
    quickFix: '500',
    carePlan: '1,200'
  },
  onQuickFix,
  onRequestAudit
}) => {
  const handleQuickFix = () => {
    if (onQuickFix) {
      onQuickFix();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestAudit = () => {
    if (onRequestAudit) {
      onRequestAudit();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Website Design & Development",
      blurb: "Beautiful, fast sites built with modern stacks and best practices.",
      bullets: [
        "Landing pages, blogs, and small e-commerce",
        "SEO-friendly, mobile-first",
        "Deployed with CI/CD for reliability"
      ],
      cta: "Start a build"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Site Security & Vulnerability Check",
      blurb: "We scan, harden, and patch to keep your site safe.",
      bullets: [
        "OWASP-style checks & simple reports",
        "TLS, headers, auth & roles review",
        "Backup/restore & update strategy"
      ],
      cta: "Run a security check"
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Ongoing Support & Bug Fixes",
      blurb: "On-demand troubleshooting for errors, broken pages, and weird bugs.",
      bullets: [
        "Emergency fixes & quick turnarounds",
        "Plugin/theme conflicts resolved",
        "Email/SSL/domain issues sorted"
      ],
      cta: "Fix this now",
      badge: "24–72h turnaround"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance Optimisation",
      blurb: "Speed wins. We tune your site for fast loads and better conversions.",
      bullets: [
        "Core Web Vitals improvements",
        "Image & asset optimisation",
        "Caching & CDN setup"
      ],
      cta: "Make it faster"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO & Analytics Setup",
      blurb: "Be discoverable and know what's working.",
      bullets: [
        "On-page basics & sitemap",
        "Google Analytics & Search Console",
        "Event tracking & dashboards"
      ],
      cta: "Set up tracking"
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Tech Stack Advice & Integrations",
      blurb: "Choose the right tools and connect them cleanly.",
      bullets: [
        "CMS, hosting, and database choices",
        "Payment, email, chat integrations",
        "Migrations without downtime"
      ],
      cta: "Get advice"
    }
  ];

  const trustChips = [
    "Freelance & flexible",
    "Clear, upfront pricing",
    "Remote or on-site",
    "No long contracts"
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header block */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Solutions we provide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A flexible, freelance team that jumps in to build, secure, and fix your tech — fast.
          </p>
        </div>

        {/* Grid of 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative"
            >
              {solution.badge && (
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {solution.badge}
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {solution.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {solution.blurb}
              </p>

              <ul className="space-y-2 mb-6">
                {solution.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>

              <button className="text-blue-700 font-medium hover:text-blue-800 transition-colors duration-200 group-hover:underline text-sm">
                {solution.cta} →
              </button>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {trustChips.map((chip, index) => (
            <div key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              {chip}
            </div>
          ))}
        </div>

        {/* Pricing teaser */}
        <div className="text-center mb-8 text-sm text-gray-600">
          <p className="mb-1">
            <span className="font-medium">Quick Fix:</span> once-off from R{pricing.quickFix}
          </p>
          <p>
            <span className="font-medium">Care Plan:</span> monthly from R{pricing.carePlan} (updates, backups, monitoring)
          </p>
        </div>

        {/* Bottom CTAs */}
        <div className="text-center">
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-4">
            <button
              onClick={handleQuickFix}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get a quick fix
            </button>
            
            <button
              onClick={handleRequestAudit}
              className="w-full sm:w-auto text-blue-700 font-semibold hover:text-blue-800 transition-colors duration-200 hover:underline"
            >
              Request a free audit
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Prefer WhatsApp? Message us at{' '}
            <a href={`https://wa.me/${company.whatsapp.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline">
              {company.whatsapp}
            </a>
            {' '}or email{' '}
            <a href={`mailto:${company.email}`} className="text-blue-600 hover:underline">
              {company.email}
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;