import Link from "next/link";

export default function SuggestHomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-gradient-to-r from-orange-100 to-orange-300 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="font-bold text-4xl text-center text-orange-950 mb-6">
          Suggest a New Gem
        </h1>

        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <p className="text-xl text-orange-800">
              <strong>1. Name of Business</strong>: Enter the name of the
              business in the "Name of Business" tab.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <p className="text-xl text-orange-800">
              <strong>2. Business Type</strong>: Use "Business Type" to indicate
              the type of business, e.g., Cafe, Hotel, Gym, Museum, Event Space,
              etc.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <p className="text-xl text-orange-800">
              <strong>3. Address/Location</strong>: Provide address/location
              information, such as the street name, postcode, or proximity to
              landmarks.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <p className="text-xl text-orange-800">
              <strong>4. Reason for Suggestion</strong>: Explain why your
              suggestion should be considered a Hidden Gem.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/suggest">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              Make Suggestion
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
