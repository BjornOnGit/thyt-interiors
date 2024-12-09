import React from "react";
import { works } from "../content/constants";
import workImage1 from "../assets/recent-work-image-1.png"
import workImage2 from "../assets/recent-work-image-2.png"
const RecentWorks = () => {
  
  return (
    <section className="py-16 bg-white font-playfairdisplay">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <header className="text-center mb-12">
          <h3 className="text-sm text-gray-500 uppercase tracking-wide">
            Recent Works
          </h3>
          <h2 className="text-3xl font-semibold text-gray-800">
            Some of <span className="italic text-teal-600">our crafts</span>{" "}
            made with love
          </h2>
        </header>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* First Item */}
          <div className="lg:col-span-2 flex flex-col md:flex-row items-center gap-6">
            <img
              src={workImage1}
              alt={works[0].title}
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <div>
              <h4 className="text-xl font-medium text-gray-800">
                {works[0].title}
              </h4>
              <p className="text-gray-500 mb-4">{works[0].description}</p>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700">
                Contact Us
              </button>
            </div>
          </div>

          {/* Second and Third Items */}
          <div className="flex flex-col gap-8">
            {works.slice(1).map((work, index) => (
              <div key={index} className="flex items-center gap-6">
                <img
                  src={workImage2}
                  alt={work.title}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-lg shadow-md"
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    {work.title}
                  </h4>
                  <p className="text-gray-500">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
