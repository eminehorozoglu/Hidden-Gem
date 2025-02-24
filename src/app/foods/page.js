import { db } from "@/utils/dbConnection";
import Link from "next/link";


export default async function AllBusinessPage(){
    console.log('menu page loading')
    const menu = await db.query(`SELECT business.id, business.business_name, business.business_address, business.business_picture, business.business_type, business.menu_id FROM business
JOIN menu ON menu.id = business.menu_id WHERE menu.id = $1 `,['1'])
    console.log(menu)
    const wrangleData = menu.rows;
    console.log(wrangleData);
return(
    <>
    <h1>Menu Page</h1>
     {
  wrangleData.map((data)=><div key={data.id}>
    <img src={data.business_picture} alt="Business" width={250}></img>
   <h1>{data.business_name}</h1>
   <Link href={`/foods/${data.id}`}>See More</Link>
  </div>)
} 

    </>
)
}