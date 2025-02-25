import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import Choise from "@/app/components/Choise";

export default async function BusinessPage({ params }) {
const mapsKey = process.env.MAPS_API_KEY;
    const BusinessParams = await params;
    const businessdata = await db.query(`SELECT business.id, business.business_name, business.business_address, business.business_picture, business.business_type,business.place_id, business.menu_id FROM business
JOIN menu ON menu.id = business.menu_id WHERE business.id = $1 `, [
    BusinessParams.id,
    ]);
    console.log(businessdata);
    const wrangleData = businessdata.rows;
  
    const commentdata = await db.query(`SELECT reviews.id, reviews.date, reviews.username, reviews.comment,reviews.business_id,business.business_address FROM reviews  
      JOIN business on business.id = reviews.business_id WHERE business.id = $1 order by reviews.date desc `, [
        BusinessParams.id,
          ]); 
    

    
     return(
<div className="flex flex-col items-center gap-4 w-full bg-slate-300">
{
  wrangleData.map((data)=><div key={data.id}>
    <img src={data.business_picture} alt="Business" width={500}></img>
   <h1>{data.business_name}</h1>
   <p>{data.business_address}</p>
  </div>)
}

<Choise commentdata = {commentdata.rows} mapsKey = {mapsKey} placeId = {wrangleData[0].place_id} businessId= {wrangleData[0].id} />
</div>
     )
    }