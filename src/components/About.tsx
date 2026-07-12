import React from "react";
import VutomiPortfolio from "./VutomiPortfolio";
import AthiPic from "../assets/AthiPic.jpg";
import Vutomi_Pic from "../assets/Vutomi_Pic.jpg";
import HloniPic from "../assets/HloniPic.jpg";

const About: React.FC = () => {
  const [showVutomiPortfolio, setShowVutomiPortfolio] = React.useState(false);

  if (showVutomiPortfolio) {
    return <VutomiPortfolio onBack={() => setShowVutomiPortfolio(false)} />;
  }

  const teamMembers = [
    {
      name: "Athi Mngqundaniso",
      title: "Team Member",
      image: AthiPic,
      onClick: null,
    },
    {
      name: "Hloni Letsatsi",
      title: "Team Member",
      image: HloniPic,
      onClick: null,
    },
    {
      name: "Vutomi Mohube",
      title: "Team Member",
      image: Vutomi_Pic,
      onClick: () => setShowVutomiPortfolio(true),
    },
    // {
    //   name: "Cameron",
    //   title: "Team Member",
    //   image:
    //     "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    //   onClick: null,
    // },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-[0.2em] mb-3">
            Who We Are
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-5" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We help businesses grow through smart, scalable web solutions. From
            sleek websites to custom applications, we bring clarity, creativity,
            and technical know-how to every project. Whether you need a sleek
            portfolio, a custom app, or help fixing up your current site, we’ve
            got the skills and flexibility to make it happen. No fluff—just
            solid code, smart design, and reliable service.
          </p>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl ring-1 ring-gray-900/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-6 h-6 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Innovation First
              </h3>
              <p className="text-gray-600">
                We stay ahead of technology trends to deliver cutting-edge
                solutions.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl ring-1 ring-gray-900/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-6 h-6 text-teal-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Reliability
              </h3>
              <p className="text-gray-600">
                Our solutions are built to last and scale with your business
                needs.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl ring-1 ring-gray-900/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-6 h-6 text-orange-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Partnership
              </h3>
              <p className="text-gray-600">
                We work closely with you to understand and solve your unique
                challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Meet the TankStack Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team blends fresh thinking with solid expertise to solve
            real-world tech challenges. Each member brings a unique skill set,
            from frontend finesse to backend muscle, so together, we deliver
            clean code, intuitive design, and dependable results. We’re
            passionate about what we do, and even more passionate about helping
            you succeed.
          </p>
          <p></p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-2xl ring-1 ring-gray-900/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center ${
                member.onClick ? "cursor-pointer" : ""
              }`}
              onClick={member.onClick || undefined}
            >
              <div className="w-28 h-28 mx-auto mb-5 overflow-hidden rounded-full ring-2 ring-gray-100 ring-offset-4 ring-offset-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-teal-600 font-medium tracking-wide">
                {member.title}
              </p>
              {member.onClick && (
                <p className="text-sm text-blue-600 font-medium mt-3 group-hover:underline underline-offset-4">
                  View portfolio →
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
