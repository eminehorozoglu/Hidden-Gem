import {db} from "@/utils/dbConnection"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; 

export default function suggestPage(){
     async function handleSubmit(formValues) {
            "use server";
      const  businessName = formValues.get("business_name");
      const  businessType = formValues.get("business_type");
      const location = formValues.get("location");
      const reason = formValues.get("reason");
    
      db.query(`insert into suggest (business_name, business_type,location,reason) values ($1, $2, $3,$4)`,[ businessName,businessType ,location,reason]);
      revalidatePath(`/`);
      redirect(`/return`);

    }


    return(
      <>
 
      <form action={handleSubmit} className="flex flex-col items-center gap-4" >
            <label htmlFor="business_name">Name of Business:</label>
            <input type="text" name="business_name" id="business_name" className="text-amber-800  bg-amber-300" />
            <label htmlFor="business_type">Business Type:</label>
            <input type="business_type" name="business_type" id="business_type" className="text-amber-800  bg-amber-300" />
            <label htmlFor="location">Location: </label>
            <textarea id="location" name="location" className="text-amber-800  bg-amber-300"rows="2" cols="40   " />
            <label htmlFor="reason" >Reason for Suggestion:</label>
            <textarea id="reason" name="reason" className="text-amber-800 rounded-xl bg-amber-300" rows="4" cols="40"/>
            <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">Submit data</button>
        </form>

      </>
    )
}