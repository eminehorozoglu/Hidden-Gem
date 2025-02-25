import { db } from "@/utils/dbConnection";
export default async function RewiewsPage({ params }) {

    const CommentParams = await params;
    console.log(CommentParams.id);
    const commentdata = await db.query(`SELECT reviews.id, reviews.date, reviews.username, reviews.comment,reviews.business_id FROM reviews
JOIN business on business.id = reviews.business_id WHERE business.id = $1 order by reviews.date desc `, [
    CommentParams.id,
    ]);
    console.log(commentdata);
    const wrangleData = commentdata.rows;
    console.log(wrangleData);

     return(
<>
{
  wrangleData.map((data)=><div key={data.id}>
   <h1>{data.date}</h1>
   <h2>{data.username}</h2>
   <p>{data.comment}</p>
  </div>)
}

</>
     )
    }