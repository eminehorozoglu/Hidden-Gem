"use client"
import { useState } from "react"
import Link from "next/link";

export default function Choise ({commentdata,mapsKey,placeId}){
    const [show,setshow] = useState(0);
    console.log(mapsKey,placeId);


return(
    <>
    <div>
    <button onClick={()=>{setshow(0)}} className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">Location</button>
    <button onClick={()=>{setshow(1)}} className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">Reviews</button>
    <Link href={"/return"}><button onClick={()=>{setshow(2)}} className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">Sent Comment</button></Link>
    </div>
    <div>
        {
            show===0 && <iframe
            width="600"
            height="450"
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=${mapsKey}`}
          ></iframe>
        }
        {
            show===1 &&  commentdata.map((data)=><div key={data.id}>
            <h1 className="text-2xl text-amber-950">{data.date}</h1>
            <h2 className="text-xl text-amber-700">{data.username}</h2>
            <p className="text-xl text-amber-700">{data.comment}</p>
           </div>)
        }
      
    </div>
    </>
)
}