import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default  async function MenuPage ({params}){
    const menuparams = (await params).menu;
    console.log(menuparams);
    const menu = await db.query (`select * from menu where title_name = $1`,[menuparams]);
    console.log(menu);
    const menuRow = menu.rows[0].id;
    const business = await db.query (`select * from business where menu_id = $1`,[menuRow]);
    console.log(business);
    const wrangleData = business.rows;
    console.log(wrangleData);
return(
    <>
    <h1>{menuparams}</h1>
    {
        wrangleData.length > 0 ? "Data received" : "No data"
    }
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