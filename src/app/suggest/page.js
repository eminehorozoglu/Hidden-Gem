import {db} from "@/utils/dbConnection"

export default function suggestPage(){
     async function handleSubmit(formValues) {
            "use server";
      const  businessName = formValues.get("business_name");
      const  businessType = formValues.get("business_type");
      const location = formValues.get("location");
      const reason = formValues.get("reason");
    
      db.query(`insert into reviews (business_name, business_type,location,reason) values ($1, $2, $3,$4)`,[date,userName,Comment,businessId]);
      revalidatePath(`/foods/${BusinessParams.id}`);
      redirect(`/foods/${BusinessParams.id}`);
    
    }


    return(
      <>
      <form>
      <form action={handleSubmit} className="flex flex-col items-center gap-4" >
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" id="date" className="text-amber-800  bg-amber-300" />
            <label htmlFor="username">User Name:</label>
            <input type="username" name="username" id="username" className="text-amber-800  bg-amber-300" />
            <label htmlFor="comment" >Message :</label>
            <textarea id="comment" name="comment" className="text-amber-800 rounded-xl bg-amber-300" rows="4" cols="40"/>
            <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">Submit data</button>
        </form>
      </form>
      </>
    )
}