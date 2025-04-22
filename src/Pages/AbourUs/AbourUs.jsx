import React from 'react';

const AboutUs = () => {
  return (
    <div className="px-4 py-12 md:py-20 max-w-7xl mx-auto space-y-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About CloudCore Fashion</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          At CloudCore Fashion, we blend modern trends with local craftsmanship to deliver sustainable and stylish clothing for all of Bangladesh.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="lg:w-1/2 space-y-6 order-2 lg:order-1">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-1 rounded-full">
            <span className="text-white font-medium">Our Purpose</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Mission That Drives Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to empower fashion-forward individuals across Bangladesh by offering high-quality, affordable, and eco-conscious clothing. We focus on ethical production, supporting local communities, and creating confidence through fashion.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Locally sourced fabrics</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Eco-friendly packaging</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Supporting skilled artisans</span>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2 relative">
          <img
            src="https://i.ibb.co.com/v6bFBsrv/asside-1.png"
            alt="Our Mission"
            className="w-full h-auto rounded-none shadow-xl transform hover:scale-105 transition duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-gray-600">Bangladeshi Made</div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mt-32">
        <div className="lg:w-1/2 relative">
          <img
            src="https://i.ibb.co.com/PZsMnVY8/banner-2-1.png"
            alt="Our Vision"
            className="w-full h-auto rounded-none shadow-xl transform hover:scale-105 transition duration-500"
          />
          <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
            <div className="text-2xl font-bold text-pink-500">50+</div>
            <div className="text-gray-600">Districts Reached</div>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 px-4 py-1 rounded-full">
            <span className="text-white font-medium">Our Future</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Vision That Inspires</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At CloudCore Fashion, our vision is to become Bangladesh’s most trusted fashion brand by promoting ethical practices, encouraging local talent, and making sustainable fashion accessible to all.
          </p>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-blue-800 text-lg mb-2">Our 2025 Goals</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-blue-600 font-bold">100%</div>
                <div className="text-sm text-gray-600">Local Fabric Use</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-blue-600 font-bold">1M+</div>
                <div className="text-sm text-gray-600">Satisfied Customers</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-blue-600 font-bold">0</div>
                <div className="text-sm text-gray-600">Plastic Waste</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-blue-600 font-bold">500+</div>
                <div className="text-sm text-gray-600">Jobs Created in BD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
