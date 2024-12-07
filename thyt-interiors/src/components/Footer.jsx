import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200 font-playfairdisplay">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          {/* Left: Heading */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800">
              Kick-start your dream home with us
            </h2>
            <p className="text-teal-600 text-xl font-medium mt-2 cursor-pointer hover:underline">
              Send us a hi
            </p>
          </div>

          {/* Right: Contact Info */}
          <div className="text-gray-600">
            <p className="font-medium text-lg">Brooklyn, New York</p>
            <p className="text-sm">
              902 Fifth Avenue St, 3rd Floor - Trump Building NY 10006, United
              States.
            </p>
            <p className="mt-4">
              <span className="font-medium">Email us at</span> <br />
              <a
                href="mailto:hello@landify.design"
                className="text-teal-600 hover:underline"
              >
                hello@landify.design
              </a>
            </p>
            <p className="mt-4">
              <span className="font-medium">
                If you’re in a hurry, quick call us
              </span>{" "}
              <br />
              <a
                href="tel:+86631250859"
                className="text-teal-600 font-semibold hover:underline"
              >
                +8(663)125-08-59
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
          {/* Left: Copyright */}
          <p className="text-sm text-gray-500">
            © 2022 Inteo - Award winning studio. Made with love by{" "}
            <a href="#" className="text-teal-600 hover:underline">
              Landify
            </a>
          </p>

          {/* Right: Social Media */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
