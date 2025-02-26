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
import SearchBar from "../components/SearchBar";

const navLinks = [
  {
    label: "Food & Drinks",
    href: "/foods",
    icon: <Utensils size={40} />,
    gradient: "from-orange-100 to-orange-500",
  },
  {
    label: "Hotels",
    href: "/hotels",
    icon: <Hotel size={40} />,
    gradient: "from-indigo-100 to-indigo-500",
  },
  {
    label: "Arts",
    href: "/arts",
    icon: <Palette size={40} />,
    gradient: "from-purple-100 to-pink-500",
  },
  {
    label: "Services",
    href: "/services",
    icon: <Briefcase size={40} />,
    gradient: "from-green-100 to-teal-500",
  },
  {
    label: "Parks",
    href: "/parks",
    icon: <TreePalm size={40} />,
    gradient: "from-green-100 to-green-600",
  },
  {
    label: "Events",
    href: "/events",
    icon: <Calendar size={40} />,
    gradient: "from-orange-100 to-yellow-500",
  },
  {
    label: "Retails",
    href: "/retails",
    icon: <ShoppingBag size={40} />,
    gradient: "from-green-100 to-green-800",
  },
  {
    label: "Education",
    href: "/education",
    icon: <GraduationCap size={40} />,
    gradient: "from-red-100 to-red-500",
  },
];

const CategoryCard = ({ link }) => (
  <Link
    href={link.href}
    className={`flex flex-col items-center justify-center h-[120px] w-[100px] sm:h-[180px] sm:w-[220px] text-center 
               text-white border border-gray-300 rounded-xl shadow-md font-semibold 
               transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
               bg-gradient-to-r ${link.gradient} hover:brightness-110`}
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
    <div className=" w-full bg-white flex flex-col items-center">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

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
    </div>
  );
}
