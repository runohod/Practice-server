import { Link } from "react-router-dom";
import { useState } from "react";

import { logo, chat, phone } from "@/shared/assets/home";

const nav_links = [
  { label: "About Us", href: "#" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "#" },
  { label: "News", href: "#" },
  { label: "Contacts", href: "#" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full bg-white relative z-50">
      <div className="container-custom py-4 min-[768px]:my-5 flex justify-between items-center gap-4 flex-wrap min-[768px]:flex-nowrap">
        <div className="flex items-center gap-6 min-[1200px]:gap-12">
          <div className="shrink-0">
            <Link to="/">
              <img src={logo} alt="logo" className="w-32.5 h-5.5" />
            </Link>
          </div>

          <nav className="font-bold hidden min-[768px]:block">
            <ul className="flex gap-5 min-[1200px]:gap-10 text-sm min-[1200px]:text-base whitespace-nowrap">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>

          <div className="min-[768px]:hidden">
            <button
              type="button"
              className="block cursor-pointer p-1"
              onClick={toggleMenu}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    d="M7.5 7.5L22.5 22.5M7.5 22.5L22.5 7.5"
                    stroke="#4C5866"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.6875 21.5625C4.6875 21.3139 4.78627 21.0754 4.96209 20.8996C5.1379 20.7238 5.37636 20.625 5.625 20.625H24.375C24.6236 20.625 24.8621 20.7238 25.0379 20.8996C25.2137 21.0754 25.3125 21.3139 25.3125 21.5625C25.3125 21.8111 25.2137 22.0496 25.0379 22.2254C24.8621 22.4012 24.6236 22.5 24.375 22.5H5.625C5.37636 22.5 5.1379 22.4012 4.96209 22.2254C4.78627 22.0496 4.6875 21.8111 4.6875 21.5625ZM4.6875 14.0625C4.6875 13.8139 4.78627 13.5754 4.96209 13.3996C5.1379 13.2238 5.37636 13.125 5.625 13.125H24.375C24.6236 13.125 24.8621 13.2238 25.0379 13.3996C25.2137 13.5754 25.3125 13.8139 25.3125 14.0625C25.3125 14.3111 25.2137 14.5496 25.0379 14.7254C24.8621 14.9012 24.6236 15 24.375 15H5.625C5.37636 15 5.1379 14.9012 4.96209 14.7254C4.78627 14.5496 4.6875 14.3111 4.6875 14.0625ZM4.6875 6.5625C4.6875 6.31386 4.78627 6.0754 4.96209 5.89959C5.1379 5.72377 5.37636 5.625 5.625 5.625H24.375C24.6236 5.625 24.8621 5.72377 25.0379 5.89959C25.2137 6.0754 25.3125 6.31386 25.3125 6.5625C25.3125 6.81114 25.2137 7.0496 25.0379 7.22541C24.8621 7.40123 24.6236 7.5 24.375 7.5H5.625C5.37636 7.5 5.1379 7.40123 4.96209 7.22541C4.78627 7.0496 4.6875 6.81114 4.6875 6.5625Z"
                    fill="#4C5866"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-4 min-[1200px]:gap-9 shrink-0 items-center">
          <div className="flex gap-3 items-center">
            <img src={phone} alt="phone" className="w-10 h-10" />
            <a
              href="tel:4055550128"
              className="font-bold text-sm leading-tight hidden min-[992px]:block"
            >
              <p className="text-gray-text font-normal text-xs">Call us</p>
              <p className="text-dark whitespace-nowrap">(405) 555-0128</p>
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <img src={chat} alt="chat" className="w-10 h-10" />
            <a
              href="mailto:hello@createx.com"
              className="font-bold text-sm leading-tight hidden min-[992px]:block"
            >
              <p className="text-gray-text font-normal text-xs">Talk to us</p>
              <p className="text-dark whitespace-nowrap">hello@createx.com</p>
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="min-[768px]:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl px-4 py-6 transition-all">
          <ul className="flex flex-col gap-4 font-bold text-base text-center">
            {nav_links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.label}
                  className="block py-2 text-dark hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};