import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;

    //If user scrolls down and the scroll position is greater than the navheight
    //and the mobile menu is not open, hide the navbar
    if (
      prevScrollPosition < currentScrollPosition &&
      currentScrollPosition > 100 &&
      !mobileMenuOpen
    ) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setPrevScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`flex items-center shadow-lg left-0 py-4 z-50 transform transition-transform duration-300 ${
        isHidden ? '-translate-y-full fixed top-0 w-full' : 'fixed top-0 w-full'
      }`}
    >
      <div className="max-w-5xl w-full mx-auto px-6 tablet:px-10 desktop:px-20">
        <div className="w-full flex flex-row-reverse justify-between items-center">
          <a href="#" className=" text-xl font-bold whitespace-nowrap">
            Tim Ferrari
          </a>
          <div className="md:hidden h-6">
            <button
              className=" hover:text-gray-300 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`mobile-menu ${
              mobileMenuOpen ? 'block' : 'hidden'
            } absolute top-full left-0 w-full md:static md:bg-transparent md:flex space-y-4 tablet:space-x-4 tablet:space-y-0`}
          >
            <a
              href="#hero"
              className="block py-2 pr-4  hover:text-gray-300 md:inline-block"
            >
              Home
            </a>
            <a
              href="#projects"
              className="block py-2 pr-4  hover:text-gray-300 md:inline-block"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block py-2 pr-4  hover:text-gray-300 md:inline-block"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block py-2 pr-4  hover:text-gray-300 md:inline-block"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
