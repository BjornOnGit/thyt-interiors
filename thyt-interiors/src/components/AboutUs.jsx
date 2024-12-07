import React from "react";
import image1 from "../assets/kitchen.png"; // Replace with your actual image paths
import image2 from "../assets/bedroom.png"; // Replace with your actual image paths

const AboutUs = () => {
  return (
    <section className="font-playfairdisplay py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-2">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-6">
            We help to bring your <span className="italic">dream home</span> to reality
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla 
            dui amet faucibus nam. Etati id laoreet posuere etiam morbi.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris 
            posuere auctor justo. Habitant proin aliquet volutpat leo ultricies.
          </p>
        </div>

        {/* Right Images Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src={image1}
            alt="Kitchen design"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={image2}
            alt="Bedroom design"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
