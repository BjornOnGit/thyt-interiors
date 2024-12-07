import React from "react";

const Stats = () => {
  const statsData = [
    { value: "100%", label: "Satisfaction Clients" },
    { value: "250", label: "Employees Worldwide" },
    { value: "3469", label: "Projects Completed in 60 Countries" },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-200 font-playfairdisplay">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        {/* Optional Divider */}
        <div className="mt-8 border-t border-gray-300"></div>
      </div>
    </section>
  );
};

export default Stats;
