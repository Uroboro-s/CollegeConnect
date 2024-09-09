import CreateEventForm from "@/app/_components/CreateEventForm";

export const metadata = {
  title: "Create Event",
};

function Page() {
  // function handleSubmit(formData) {
  //   console.log(formData);
  // }

  return (
    <div className="p-8 text-black">
      <CreateEventForm />
    </div>
  );
}

export default Page;

//success message component
