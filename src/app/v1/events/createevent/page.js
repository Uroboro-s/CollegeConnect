import SubmitButton from "@/app/_components/SubmitButton";

export const metadata = {
  title: "Create Event",
};

function Page() {
  return (
    <div className="p-8 text-black">
      <form
        action="#"
        className="bg-gray-200 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2 flex flex-col">
          <label>Name</label>
          <input
            name="name"
            type="text"
            className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
          />
        </div>

        <div className="space-y-2 flex flex-col">
          <label>Category</label>
          <input
            name="category"
            type="text"
            className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
          />
        </div>

        <div className="space-y-2 flex flex-col">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
          </div>
        </div>

        <div className="space-y-2 flex flex-col">
          <label htmlFor="nationalID">National ID number</label>
          <input
            name="nationalID"
            className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">Create Event</SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default Page;

//success message component
