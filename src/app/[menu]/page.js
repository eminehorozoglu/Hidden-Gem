import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function MenuPage({ params }) {
  console.log("params in whole are", await params);
  const menuparams = (await params).menu;
  console.log("menu params are", menuparams);
  const menu = await db.query(`select * from menu where title_name = $1`, [
    menuparams,
  ]);
  console.log("individual menu is", menu);
  const menuRow = menu.rows[0].id;
  const business = await db.query(`select * from business where menu_id = $1`, [
    menuRow,
  ]);
  console.log("all business results", business);
  const wrangleData = business.rows;
  console.log(wrangleData);
  return (
    <div className="h-auto m-6 mb-50 bg-white">
      <h1 className="items-center text-center capitalize text-black text-[40px] font-bold">
        {menuparams}
      </h1>
      <div>
        <h2 className="text-left capitalize text-[40px] text-black font-bold">
          Popular Gems
        </h2>
        <div className="bg-white flex flex-row overflow-scroll">
          {wrangleData.length > 0 ? "" : "Sorry! There is no Gems to show"}
          {wrangleData.map((data) => (
            <div
              className=" flex flex-col items-center gap-4 m-6 p-6 bg-gray-100"
              key={data.id}
            >
              <div className="w-[250px] h-[250px]">
                <img
                  className="h-full w-full object-cover"
                  src={data.business_picture}
                  alt="Business"
                ></img>
              </div>
              <h1 className="text-gray-800 bg-white ">{data.business_name}</h1>
              <Link
                className="text-gray-800 text-center text-sm bg-white p-3 m-3 hover:bg-yellow-500 hover:scale-105 hover:brightness-110"
                href={`/foods/${data.id}`}
              >
                Discover More!
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="m-6">
        <h2 className=" text-left capitalize text-[40px] text-black font-bold">
          Local Gems
        </h2>
        <div className="bg-white flex flex-row overflow-scroll">
          {wrangleData.length > 0 ? "" : "Sorry! There is no Gems to show"}
          {wrangleData.map((data) => (
            <div
              className=" flex flex-col items-center gap-4 m-6 p-6 bg-gray-100"
              key={data.id}
            >
              <div className="w-[250px] h-[250px]">
                <img
                  className="h-full w-full object-cover"
                  src={data.business_picture}
                  alt="Business"
                ></img>
              </div>
              <h1 className="text-gray-800 bg-white ">{data.business_name}</h1>
              <Link
                className="text-gray-800 text-center text-sm p-3 m-3 bg-white hover:bg-yellow-500 hover:scale-105 hover:brightness-110"
                href={`/foods/${data.id}`}
              >
                Discover More!
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
