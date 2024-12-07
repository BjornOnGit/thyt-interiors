import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Architectural & Interior design",
      description:
        "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
      icon: "🏢", // Replace with your actual icon or SVG
    },
    {
      title: "Building Renovation",
      description:
        "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
      icon: "🔨", // Replace with your actual icon or SVG
    },
    {
      title: "Construction Management",
      description:
        "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
      icon: "🚧", // Replace with your actual icon or SVG
    },
  ];

  return (
    <section className="py-16 bg-gray-50 font-playfairdisplay">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h3 className="text-sm text-gray-500 uppercase tracking-wide">
            Our Services
          </h3>
          <h2 className="text-3xl font-semibold text-gray-800">
            We provide the <span className="italic text-teal-600">best solutions</span> for your dream home
          </h2>
        </header>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl text-teal-600 mb-4">{service.icon}</div>
              <h4 className="text-lg font-medium text-gray-700 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
