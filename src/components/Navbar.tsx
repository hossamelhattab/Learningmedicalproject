"use client";
import DropdownButton from "@/components/DropdownButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AccordionButtonList from "./AccordionButtonList";

const NavbarLinks = [
  {
    label: "Find Care",
    items: [
      { label: "Find a Provider", href: "#" },
      { label: "Find a Location", href: "#" },
      { label: "ER / Urgent Care", href: "#" },
      { label: "Virtual Urgent Care", href: "#" },
      { label: "Schedule Care Online", href: "#" },
    ],
  },
  {
    label: "Patient Tools",
    items: [
      { label: "Patient Portal", href: "#" },
      { label: "Pay My Bill", href: "#" },
      { label: "Financial Assistance & Hospital Discounted Care", href: "#" },
      { label: "Pricing & Estimates", href: "#" },
      { label: "Medical Records", href: "#" },
      { label: "Classes & Events", href: "#" },
      { label: "Patient Rights & Policies", href: "#" },
      { label: "COVID-19", href: "#" },
      { label: "More Patient Tools", href: "#" },
    ],
  },
  {
    label: "Our Services",
    items: [
      { label: "Cancer Care", href: "#" },
      { label: "Heart & Vascular", href: "#" },
      { label: "Neurosciences", href: "#" },
      { label: "Orthopedics", href: "#" },
      { label: "Primary Care", href: "#" },
      { label: "More Health Services", href: "#" },
    ],
  },
  {
    label: "Who We Are",
    items: [
      { label: "Our Care System", href: "#" },
      { label: "Community Impact", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Social Justice & Health Equality", href: "#" },
      { label: "Stories & Newsroom", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 z-10 w-full transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex lg:flex-col flex-col-reverse">
        <div className="bg-gray-100 w-full py-1 flex ">
          <div className="ml-auto text-ppink flex gap-2 font-medium nav-container">
            <Link href="/" className="hover:underline">
              Username
            </Link>
            <Link href="/" className="hover:underline">
              Signout
            </Link>
          </div>
        </div>

        <div className="w-full bg-slate-50 flex justify-between items-center nav-container">
          <Link href="/" className="min-w-44">
            <Image src="/logo_2.png" alt="logo" width={200} height={200} />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex gap-3">
              {NavbarLinks.map((link, index) => (
                <DropdownButton
                  key={index}
                  id={index.toString()}
                  buttonText={link.label}
                  items={link.items}
                />
              ))}
            </div>
            <div className="flex gap-2 items-center">
              <Link
                href="/"
                className="text-ppink text-center font-medium border-2 border-ppink rounded-full px-3 py-2.5 hover:bg-ppink hover:text-white transition-colors duration-300"
              >
                Schedule Appointment
              </Link>
              <Link
                href={""}
                className="text-ppink text-center font-medium border-2 border-ppink rounded-full ml-3 p-3 hover:bg-ppink hover:text-white transition-colors duration-300 flex items-center"
              >
                <FaMagnifyingGlass />
              </Link>
            </div>
          </div>

          {/* Mobile */}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200400 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-7 h-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 14"
            >
              <path
                className="stroke-ppink"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="items-center justify-between w-full hidden"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50">
          <AccordionButtonList data={NavbarLinks} />
        </ul>
      </div>
    </nav>
  );
}
