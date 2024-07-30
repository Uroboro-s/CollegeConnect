import EventSlider from "@/app/_components/EventSlider";
import { auth } from "@/app/_lib/auth";
import { getEvents } from "@/app/_lib/data_service";

export const metadata = {
  title: "Home",
};

async function Page() {
  const events = await getEvents();

  console.log(events);

  return (
    <div className="">
      Home page
      <h2>All events</h2>
      <EventSlider />
    </div>
  );
}

export default Page;
