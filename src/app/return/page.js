import Link from "next/link"
export default function ReturnPage (){
    return(
        <main className="flex min-h-screen flex-col justify-evenly p-10 items-center">
        <h1 className=" text-4xl text-amber-950">Your suggestion submitted. Thanks for your suggestion.</h1>
        <p className="flex flex-row  justify-evenly">
        <Link href={"/"}><button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full"> Return Home</button></Link>
        <Link href={"/suggest"}><button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full"> Give Another Suggest</button></Link>
        </p>
        </main>
    )
}