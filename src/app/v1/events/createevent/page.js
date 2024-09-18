import { getClubs } from "@/app/_lib/data_service";

import CreateEventForm from "@/app/_components/CreateEventForm";

export const metadata = {
  title: "Create Event",
};

async function Page() {
  const clubs = await getClubs();
  // console.log(clubs);

  return (
    <div className="p-8 text-black flex justify-center">
      <CreateEventForm clubs={clubs} />
    </div>
  );
}

export default Page;

//success message component
