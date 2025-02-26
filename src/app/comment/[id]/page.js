import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default async function BusinessPage({ params }) {
  const business = await params;
  console.log(business);
  const businessdata = await db.query(
    `SELECT business.id, business.business_name, business.business_address, business.business_picture, business.business_type,business.place_id, business.menu_id FROM business
        JOIN menu ON menu.id = business.menu_id WHERE business.id = $1 `,
    [business.id]
  );
  console.log(businessdata);
  const wrangleData = businessdata.rows;
  async function handleSubmit(formValues) {
    "use server";
    const date = formValues.get("date");
    const userName = formValues.get("username");
    const Comment = formValues.get("comment");
    const businessId = business.id;

    db.query(
      `insert into reviews (date, username,comment,business_id) values ($1, $2, $3,$4)`,
      [date, userName, Comment, businessId]
    );
    revalidatePath(`/foods/${business.id}`);
    redirect(`/foods/${business.id}`);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4 w-full bg-white m-6">
        {wrangleData.map((data) => (
          <div key={data.id}>
            <Image
              className="object-cover"
              src={data.business_picture}
              alt="Business"
              width={500}
              height={500}
              unoptimized
            />
            <h1 className="text-black font-bold">{data.business_name}</h1>
            <p className="text-black font-bold">{data.business_address}</p>
          </div>
        ))}
        <div className="w-[500px]  bg-orange-100 shadow-lg rounded-lg p-10 mt-6 ">
          <form
            action={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <label className="text-black" htmlFor="date">
              Date:
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="text-amber-800  bg-orange-200"
              required
            />
            <label className="text-black" htmlFor="username">
              User Name:
            </label>
            <input
              type="username"
              name="username"
              id="username"
              className="text-amber-800  bg-orange-200"
              required
            />
            <label className="text-black" htmlFor="comment">
              Message :
            </label>
            <textarea
              id="comment"
              name="comment"
              className="text-amber-800 rounded-xl bg-orange-200"
              rows="4"
              cols="40"
              required
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Submit data
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
