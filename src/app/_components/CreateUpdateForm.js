import { createUpdateAction } from "../_lib/actions";
import { getCurrentDate, showToast } from "../_utils/utils";
import SubmitButton from "./SubmitButton";

function CreateUpdateForm({ eventId }) {
  async function handleFormSubmit(formData) {
    const data = await createUpdateAction(formData);
    showToast(data.type, data.message);
  }

  return (
    <form action={handleFormSubmit} className="bg-blue-200 flex flex-row mb-2">
      <div className="border-r-2 border-black p-2 flex flex-col justify-center w-52 ">
        <input type="date" name="date" defaultValue={getCurrentDate()} />
        <input type="time" step="1" name="time" defaultValue="00:00:00" />
      </div>
      <div className="p-2 pl-4 ">
        <textarea name="message" placeholder="Write your message here!" />
      </div>
      <input type="hidden" name="eventId" value={eventId} />

      <SubmitButton>Create</SubmitButton>
    </form>
  );
}

// function SubmitButton() {
//   const { pending, data } = useFormStatus();

//   return (
//     <button type="submit" disabled={pending}>
//       {pending ? "Submitting..." : "Submit"}
//     </button>
//   );
// }

export default CreateUpdateForm;
