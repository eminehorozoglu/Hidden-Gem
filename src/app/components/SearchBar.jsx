"use client";
import { Search } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full max-w-lg flex justify-center items-center mt-8 ">
      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-10/12 mr-2 p-3 pl-10 text-lg border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className=" text-gray-400" size={24} />
    </div>
  );
}
