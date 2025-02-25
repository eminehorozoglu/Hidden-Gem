"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Utensils,
  Hotel,
  Palette,
  Briefcase,
  TreePalm,
  Calendar,
  ShoppingBag,
  GraduationCap,
  Search,
} from "lucide-react";

// Navigation Links Data
const navLinks = [
  { label: "Food & Drinks", href: "/foods", icon: <Utensils size={40} /> },
  { label: "Hotels", href: "/hotels", icon: <Hotel size={40} /> },
  { label: "Arts", href: "/arts", icon: <Palette size={40} /> },
  { label: "Services", href: "/services", icon: <Briefcase size={40} /> },
  { label: "Parks", href: "/parks", icon: <TreePalm size={40} /> },
  { label: "Events", href: "/events", icon: <Calendar size={40} /> },
  { label: "Retails", href: "/retails", icon: <ShoppingBag size={40} /> },
  { label: "Education", href: "/education", icon: <GraduationCap size={40} /> }, // Education Added
];

// Category Card Component
const CategoryCard = ({ link }) => (
  <Link
    href={link.href}
    className="flex flex-col items-center justify-center h-[180px] w-[220px] text-center 
               text-gray-700 bg-white border border-gray-300 rounded-xl shadow-md font-semibold 
               hover:bg-blue-500 hover:text-white transition-all duration-300 
               transform hover:scale-105"
  >
    {link.icon}
    <span className="mt-3 text-lg">{link.label}</span>
  </Link>
);

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter categories based on search input
  const filteredLinks = navLinks.filter((link) =>
    link.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center">
      {/* Search Bar */}
      <div className="w-full max-w-lg mt-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 text-lg border rounded-lg shadow-sm focus:outline-none 
                       focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={24} />
        </div>
      </div>

      {/* Category Grid */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-10 mt-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Explore by Category
        </h2>

        {filteredLinks.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {filteredLinks.map((link) => (
              <CategoryCard link={link} key={link.label} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-6">No categories found.</p>
        )}
      </div>

      {/* Call to Action */}
      <div className="w-full text-center mt-16 mb-10">
        <h3 className="text-2xl font-semibold text-gray-800">
          Want to contribute?
        </h3>
        <p className="text-gray-600 mt-2">
          Help us improve this project and add more hidden gems.
        </p>
        <Link
          href="/ContributeForm"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
                    shadow-lg hover:bg-blue-700 transition"
        >
          Contribute
        </Link>
      </div>
    </div>
  );
}
