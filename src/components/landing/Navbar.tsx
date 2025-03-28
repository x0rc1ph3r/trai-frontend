import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tasklogo from "../../assets/tasklogo.svg";
import { RiMenu2Fill } from "react-icons/ri";

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "#Home" },
    { label: "Products", href: "#Products" },
    { label: "Tokenomics", href: "#Tokenomics" },
    { label: "Roadmap", href: "#Roadmap" },
    { label: "Docs", href: "#Docs" },
    { label: "Testnet", href: "#Testnet" },
  ];

  return (
    <div className="flex w-full  mx-auto justify-center items-center">
      <header className="sticky top-0  max-w-6xl mx-auto flex items-center w-full h-[80px] py-4  h-max flex-row justify-between mx-8  z-50">
        {/* Logo */}
        <div className="mx-2" onClick={() => (window.location.href = "/")}>
          <div className="px-2  text-2xl logo py-2">TranscandenceAI</div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex flex-row p-[13px] px-16 shadow-white/30 shadow-inner 
          text-white gap-12 text-xl border-opacity-5 rounded-[25px] backdrop-blur-xl bg-white/5 
          border h-full border-white/20"
        >
          {navItems.map((data, index) => (
            <a
              key={index}
              href={data.href}
              className={`${
                data.label === "Testnet"
                  ? "text-gray-500 font-semibold"
                  : "text-white"
              }`}
            >
              {data.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex text-white text-2xl">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white mx-2 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <RiMenu2Fill size={24} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-2 top-16 backdrop-blur-xl shadow-white/30 shadow-inner bg-gray-900 
              border h-[90vh] border-white/40 bottom-0 w-64 text-white p-4 transform transition-transform 
              duration-300 ease-in-out z-50 lg:hidden overflow-y-auto"
            >
              <nav className="flex flex-col justify-start gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-2 py-2 px-3 rounded-md transition-colors duration-200 
                      ${
                        item.label === "Testnet"
                          ? "text-gray-500 font-semibold"
                          : "text-white"
                      }`}
                    onClick={toggleMobileMenu}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Navbar;
