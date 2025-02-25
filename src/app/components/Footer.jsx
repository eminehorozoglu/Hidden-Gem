"use client";
import { Home, CirclePlus, CircleUser } from "lucide-react";

import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/", icon: <Home size={40} /> },
  { label: "Add", href: "/ContributeForm", icon: <CirclePlus size={40} /> },
  { label: "Profile", href: "/profile", icon: <CircleUser size={40} /> },
];

const FooterCard = ({ link }) => (
  <Link
    href={link.href}
    className="flex flex-col items-center justify-centerw-[full] shadow-md font-semibold
                 hover:bg-blue-800 hover:text-white transition-all duration-300
                 transform hover:scale-105"
  >
    {link.icon}
  </Link>
);

export default function Footer() {
  return (
    <div className="w-full bg-blue-300 text-white py-4 px-4 fixed bottom-0">
      <div className="flex justify-around max-w-lg mx-auto">
        {footerLinks.map((link) => (
          <FooterCard link={link} key={link.label} />
        ))}
      </div>
    </div>
  );
}
