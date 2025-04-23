import React, { useState, useEffect } from "react";
import { Menu, Pencil, User, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Mock user - replace with actual auth logic
  const { user, logOut } = useAuth();

  const logout = () => {
    logOut();
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("mobile-menu");
      const button = document.getElementById("menu-button");

      if (
        menu &&
        !menu.contains(event.target) &&
        button &&
        !button.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const menus = (
    <>
      <NavLink
        className="navlink"
        to="/"
      >
        home
      </NavLink>
      <NavLink
        className="navlink whitespace-nowrap"
        to="/posts"
      >
        All Posts
      </NavLink>
      <NavLink
        className="navlink"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className="navlink"
        to="/contact"
      >
        Contact
      </NavLink>
    
    </>
  );

  return (
    <>
      <div className="bg-black fixed w-full top-0 z-50 py-[10px]">
        <div className="w-full container mx-auto">
          <div className="flex justify-between items-center py-2 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <button
                id="menu-button"
                onClick={toggleMenu}
                className="p-2 lg:hidden text-white"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
              <a
                href="/"
                className="ml-2 flex items-center"
              >
                <img src="https://i.ibb.co.com/3YSLQvPF/crime360-lopo.png" className="w-10" alt="" />
                <h4 className="text-2xl font-semibold px-1 rounded-md text-white uppercase">
                  Crime<span className=" text-red-600">360</span>
                </h4>
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <ul className="hidden lg:flex space-x-6 text-base capitalize text-white">
                {menus}
              </ul>
              {user ? (
                <>
                  <div className="btn1 g6">
                    <a
                      href="/report-crime"
                      className="hidden sm:flex items-center gap-2 hover:text-white"
                    >
                      <Pencil size={20} />
                      <span className="hidden md:inline text-base">
                        Post a Crime
                      </span>
                    </a>
                    <a
                      href="/report-crime"
                      className="sm:hidden hover:text-white"
                      aria-label="Post a crime"
                    >
                      <Pencil size={20} />
                    </a>
                  </div>
                  <div className="relative">
                    <button
                      onClick={toggleProfile}
                      aria-label="Open profile menu"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 overflow-hidden">
                        <User className="h-full w-full p-1 text-gray-700" />
                      </div>
                    </button>
                    {isProfileOpen && (
                      <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        <li>
                          <a
                            href="/crimes"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            Explore
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            My Posts
                          </a>
                        </li>
                        <li>
                          <button
                            onClick={logOut}
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                </>
              ) : (
                <a
                  href="/login"
                  className="text-white border-2 border-white/60 hover:border-white px-3 py-1 rounded-sm text-sm font-bold uppercase"
                >
                  Log in
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay - behind the menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40 lg:hidden" />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <img
            src="https://i.ibb.co/3YSLQvPF/crime360-lopo.png"
            alt="Crime360 Logo"
            className="h-8 w-auto"
          />
          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:text-red-500"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="py-4">
          <ul className="space-y-1  flex flex-col">{menus}</ul>
        </div>
      </div>
    </>
  );
}

export default Header;
