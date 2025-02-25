import Link from "next/link"

export default function SuggestHomePage(){

    return(
        <main className="flex min-h-screen flex-col justify-evenly p-10 items-center">
        <h1 className="font-bold text-4xl text-amber-950">Suggest New Gem</h1>
        <p className="text-2xl text-amber-700 items-start ">1. Enter the name of the business in the "Name of Business" tab.</p>
        <p className="text-2xl text-amber-700 items-start ">2. Use "Business Type" to indicate what kind of business it e.g. Cafe, Hotel, Gym, Museum, Event Space etc.</p>
        <p className="text-2xl text-amber-700 items-start ">3. Provide address/location information, such as; the street name, post code or proximity to landmarks.</p>
        <p className="text-2xl text-amber-700 items-start ">4. Explain why you suggestion should be a Hidden Gem.</p>
     <Link href="/suggest">  <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-2 rounded-full">Make Suggestion</button>
     </Link>
      </main>
    )
}