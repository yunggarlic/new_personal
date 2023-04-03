import React, { useState, useEffect } from 'react';

interface NavProps {
  className?: string;
}

const Navbar: React.FC<NavProps> = ({ className }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition, mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`left-0 z-50 flex transform items-center shadow-lg transition-transform duration-300 ${className} ${
        isHidden ? 'fixed top-0 w-full -translate-y-full' : 'fixed top-0 w-full'
      }`}
    >
      <div className="mx-auto w-full max-w-5xl px-6 tablet:px-10">
        <div className="flex w-full flex-row-reverse items-center justify-between">
          <a href="#" className=" whitespace-nowrap text-xl font-bold">
            Tim Ferrari
          </a>
          <div className="h-6 md:hidden">
            <button
              className=" hover:text-gray-300 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6"
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
            } absolute top-full left-0 w-full space-y-4 md:static md:flex md:bg-transparent tablet:space-x-4 tablet:space-y-0`}
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
