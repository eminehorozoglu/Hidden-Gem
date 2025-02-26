"use client";
import { useState } from "react";
import Link from "next/link";
import { User } from "lucide-react";

export default function Choise({ commentdata, mapsKey, placeId, businessId }) {
  const [show, setshow] = useState(0);
  console.log(mapsKey, placeId);

  return (
    <>
      <div className=" flex gap-2">
        <button
          onClick={() => {
            setshow(0);
          }}
          className="bg-amber-600 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Location
        </button>
        <button
          onClick={() => {
            setshow(1);
          }}
          className="bg-amber-600 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Reviews
        </button>
        <Link href={`/comment/${businessId}`}>
          <button className="bg-amber-600 m-2  hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
            comment
          </button>
        </Link>
      </div>
      <div>
        {show === 0 && (
          <iframe
            width="600"
            height="450"
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=${mapsKey}`}
          ></iframe>
        )}
        <div className="w-[500px]  bg-orange-100 shadow-lg rounded-lg p-10 mt-6 ">
          {show === 1 &&
            commentdata.map((data) => (
              <div className="" key={data.id}>
                <h1 className="text-xl text-red-950 font-bold flex items-center">
                  <span className="mr-2">
                    <User />
                  </span>
                  {data.username}:
                </h1>
                <h2 className=" text-amber-700">"{data.comment}"</h2>
                <p className="text-2xl text-amber-950 text-[7px]">
                  {data.date}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
