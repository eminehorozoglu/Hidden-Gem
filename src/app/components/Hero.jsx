export default function Hero() {
  return (
    <div className="relative w-full p-3 text-white overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-800">
      {/* Background circles */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute rounded-full w-[100vw] h-[100vw] bg-circleRadial animate-pulse opacity-40"></div>
        <div className="absolute rounded-full w-[80vw] h-[80vw] bg-circleRadial animate-pulse opacity-30"></div>
        <div className="absolute rounded-full w-[60vw] h-[60vw] bg-circleRadial animate-pulse opacity-20"></div>
        <div className="absolute rounded-full w-[40vw] h-[40vw] bg-circleRadial animate-pulse opacity-10"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-12">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4 text-shadow-lg">
          Hidden Gems
        </h1>
        <p className="text-lg sm:text-2xl mx-auto max-w-3xl mb-6 opacity-80">
          Discover unique places, experiences, and services in your city.
          Explore hidden gems that you won’t find anywhere else.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition duration-300 transform ease-in-out">
          Start Exploring
        </button>
      </div>
    </div>
  );
}
