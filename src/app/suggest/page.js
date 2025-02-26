import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function suggestPage() {
  async function handleSubmit(formValues) {
    "use server";
    const businessName = formValues.get("business_name");
    const businessType = formValues.get("business_type");
    const location = formValues.get("location");
    const reason = formValues.get("reason");

    db.query(
      `insert into suggest (business_name, business_type, location, reason) values ($1, $2, $3, $4)`,
      [businessName, businessType, location, reason]
    );
    revalidatePath(`/`);
    redirect(`/return`);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 to-orange-300 py-12">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl">
          <h1 className="text-4xl text-center font-bold text-orange-950 mb-8">
            Suggest a New Hidden Gem
          </h1>

          <form action={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="business_name"
                className="text-lg font-semibold mb-2 text-black"
              >
                Name of Business:
              </label>
              <input
                type="text"
                name="business_name"
                id="business_name"
                className="p-3 rounded-xl w-[200px] bg-orange-50 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-600"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="business_type"
                className="text-lg text-black font-semibold mb-2"
              >
                Business Type:
              </label>
              <input
                type="text"
                name="business_type"
                id="business_type"
                className="p-3  text-gray-600 rounded-xl bg-orange-50 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="location"
                className="text-lg text-black font-semibold mb-2"
              >
                Location:
              </label>
              <textarea
                id="location"
                name="location"
                className="p-3  text-gray-600 rounded-xl bg-orange-50 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows="4"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="reason"
                className="text-lg text-black font-semibold mb-2"
              >
                Reason for Suggestion:
              </label>
              <textarea
                id="reason"
                name="reason"
                className="p-3 text-gray-600  rounded-xl bg-orange-50 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows="4"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Submit Suggestion
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
