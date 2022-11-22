import Image from "next/image";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-red-900 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {" "}
                <a
                  href="#"
                  class="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src="/logo192.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Juara Belajar Indo Logo"
                  />
                  <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
                    Juara Belajar Indonesia
                  </span>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tentang Kami
                </a>

                <a
                  href="#kursus"
                  className="hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Kursus
                </a>

                {/* <a
                  href="#blog"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </a> */}

                <a
                  href="#ulasan"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Ulasan
                </a>

                <a
                  href="#faq"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  FAQ
                </a>
                {/* {!isAuth ? (
                  <Link to="/login"> Login </Link>
                ) : (
                  <>
                    <Link to="/createpost"> Create Post </Link>
                    <button onClick={signUserOut}> Log Out</button>
                  </>
                )} */}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-red-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Tentang Kami
                </a>

                <a
                  href="#kursus"
                  className="hover:text-white text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Kursus
                </a>

                {/* <a
                  href="#blog"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Blog
                </a> */}

                <a
                  href="#ulasan"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Ulasan
                </a>

                <a
                  href="#faq"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  FAQ
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
