// src/components/Hero.jsx
// src/components/Hero.jsx
import React from "react";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="relative font-playfairdisplay">
      {/* Hero Text Section */}
      <div className="text-center py-20 bg-white">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Make <span className="italic text-gray-900">your home</span> an ode to joy
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We turn your empty house into a lovely home, making compact spaces functional with 
          space-saving furniture. Let’s bring your unique taste to life!
        </p>
      </div>

      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src={heroImage}
          alt="Interior Design"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
