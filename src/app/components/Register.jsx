"use client";
import { useState } from "react";

export default function Register() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    console.log("Form Data Submitted:", formData);
    alert("Registration Successful!");

    // Reset form after submission
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      {!showForm ? (
        // Register Button
        <button
          className="flex items-center justify-center w-[180px] h-[60px] m-8 border-2 border-gray-400 rounded-lg 
                     transition-all duration-300 ease-in-out transform hover:shadow-lg hover:bg-blue-500 hover:text-white"
          onClick={() => setShowForm(true)}
        >
          Register
        </button>
      ) : (
        // Registration Form
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a strong password"
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>

          <button
            className="mt-4 w-full p-2 border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
