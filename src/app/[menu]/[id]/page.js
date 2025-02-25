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
    

    async function handleSubmit(formValues) {
        "use server";
  const  date = formValues.get("date");
  const  userName = formValues.get("username");
  const Comment = formValues.get("comment");
  const businessId =BusinessParams.id;

  db.query(`insert into reviews (date, username,comment,business_id) values ($1, $2, $3,$4)`,[date,userName,Comment,businessId]);
  revalidatePath(`/foods/${BusinessParams.id}`);
  redirect(`/foods/${BusinessParams.id}`);

}

     return(
<div className="flex flex-col items-center gap-4 w-full bg-slate-300">
{
  wrangleData.map((data)=><div key={data.id}>
    <img src={data.business_picture} alt="Business" width={500}></img>
   <h1>{data.business_name}</h1>
   <p>{data.business_address}</p>
  </div>)
}
<form action={handleSubmit} className="flex flex-col items-center gap-4" >
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" id="date" className="text-amber-800  bg-amber-300" />
            <label htmlFor="username">User Name:</label>
            <input type="username" name="username" id="username" className="text-amber-800  bg-amber-300" />
            <label htmlFor="comment" >Message :</label>
            <textarea id="comment" name="comment" className="text-amber-800 rounded-xl bg-amber-300" rows="4" cols="40"/>
            <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">Submit data</button>
        </form>
<Choise commentdata = {commentdata.rows} mapsKey = {mapsKey} placeId = {wrangleData[0].place_id} />
</div>
     )
    }