import Link from "next/link"
export default function ReturnPage (){
    return(
        <main className="flex min-h-screen flex-col justify-evenly p-10 items-center">
        <h1 className=" text-4xl text-amber-950">Your suggestion submitted. Thanks for your suggestion.</h1>
        <p className="flex flex-row  justify-evenly">
        <Link href={"/"}><button className="text-gray-800 text-center text-sm bg-gray-400 p-3 m-3 hover:bg-yellow-500 hover:scale-105 hover:brightness-110"> Return Home</button></Link>
        <Link href={"/suggest"}><button className="text-gray-800 text-center text-sm bg-gray-400 p-3 m-3 hover:bg-yellow-500 hover:scale-105 hover:brightness-110"> Give Another Suggest</button></Link>
        </p>
        </main>
    )
}