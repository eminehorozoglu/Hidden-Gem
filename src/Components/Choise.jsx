"use client"
import { useState } from "react"

export default function Choise ({commentdata}){
    const [show,setshow] = useState(0);


return(
    <>
    <div>
    <button onClick={()=>{setshow(0)}} className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">Location</button>
    <button onClick={()=>{setshow(1)}} className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">Reviews</button>
    </div>
    <div>
        {
            show===0 && "location"
        }
        {
            show===1 &&  commentdata.map((data)=><div key={data.id}>
            <h1>{data.date}</h1>
            <h2>{data.username}</h2>
            <p>{data.comment}</p>
           </div>)
        }
    </div>
    </>
)
}