import React from "react";

const RecentWorks = () => {
  const works = [
    {
      title: "Villa Furnishing & Interior",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
      image: "https://via.placeholder.com/500x300", // Replace with your actual image URL
    },
    {
      title: "Luxury Hotel Renovation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      image: "https://via.placeholder.com/200x200", // Replace with your actual image URL
    },
    {
      title: "Residence Swimming Pool",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      image: "https://via.placeholder.com/200x200", // Replace with your actual image URL
    },
  ];

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
              src={works[0].image}
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
                  src={work.image}
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
