import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { initFirebase } from "../config/firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

initFirebase;
const auth = getAuth();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [displayImage, setDisplayImage] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(true);
        setDisplayImage(user.photoURL);
        setDisplayName(user.displayName);
        setEmail(user.email);
      } else {
        setSignedIn(false);
      }
    });
  });

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Successfully signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <nav className="bg-red-900 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {" "}
                <Link
                  href="/#"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src="/logo192.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Juara Belajar Indo Logo"
                  />
                  <span className="self-center text-sm sm:text-xl font-semibold whitespace-nowrap text-white">
                    Juara Belajar Indonesia
                  </span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  href="/#about"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tentang Kami
                </Link>

                <Link
                  href="/#kursus"
                  className="hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Kursus
                </Link>

                {/* <Link
                  href="/#blog"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </Link> */}

                <Link
                  href="/#ulasan"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Ulasan
                </Link>

                <Link
                  href="/#faq"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  FAQ
                </Link>
                {signedIn ? (
                  <div className="px-3 py-2">
                    <button
                      type="button"
                      className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                      id="user-menu-button"
                      aria-expanded="false"
                      data-dropdown-toggle="user-dropdown"
                      data-dropdown-placement="bottom"
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src={displayImage}
                        alt="user photo"
                      />
                    </button>
                    {isProfileOpen ? (
                      <div
                        className="z-50 absolute right-20 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                        id="user-dropdown"
                      >
                        <div className="px-4 py-3">
                          <span className="block text-sm text-gray-900">
                            {displayName}
                          </span>
                          <span className="block text-sm font-medium text-gray-500 truncate">
                            {email}
                          </span>
                        </div>
                        <ul className="py-1" aria-labelledby="user-menu-button">
                          <li>
                            <Link
                              href="/profile"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Profile
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={handleSignOut}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Sign out
                            </button>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="bg-white text-red-900 hover:text-white hover:bg-red-500 px-5 py-2 rounded-full text-sm font-bold"
                    >
                      Daftar
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {signedIn ? (
                <div className="px-3 py-2">
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                    onClick={() => {
                      setIsProfileOpen(!isProfileOpen);
                      setIsOpen(false);
                    }}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={displayImage}
                      alt="user photo"
                    />
                  </button>
                  {isProfileOpen ? (
                    <div
                      className="z-50 absolute right-14 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                      id="user-dropdown"
                    >
                      <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900">
                          {displayName}
                        </span>
                        <span className="block text-sm font-medium text-gray-500 truncate">
                          {email}
                        </span>
                      </div>
                      <ul className="py-1" aria-labelledby="user-menu-button">
                        <li>
                          <Link
                            href="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleSignOut}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Sign out
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsProfileOpen(false);
                }}
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
                <Link
                  href="/#about"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Tentang Kami
                </Link>
                <Link
                  href="/#kursus"
                  className="hover:text-white text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Kursus
                </Link>
                {/* <Link
                  href="/#blog"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Blog
                </Link> */}
                <Link
                  href="/#ulasan"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Ulasan
                </Link>
                <Link
                  href="/#faq"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  FAQ
                </Link>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-bold"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Daftar
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
