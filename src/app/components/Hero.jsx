import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-blue-600 text-white py-20 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold">Discover Hidden Gems</h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        Explore unique places, experiences, and services in your city.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block text-white font-semibold underline hover:text-gray-200"
      >
        Go to Home
      </Link>
    </div>
  );
}
