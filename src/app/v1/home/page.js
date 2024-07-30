import EventSlider from "@/app/_components/EventSlider";
import { auth } from "@/app/_lib/auth";
import { getEvents } from "@/app/_lib/data_service";

export const metadata = {
  title: "Home",
};

async function Page() {
  const events = await getEvents();

  // console.log(events);

  const sports = events.filter((event) =>
    event.category === "Sports" ? true : false
  ); //done
  const hackathons = events.filter((event) =>
    event.category === "Hackathon" ? true : false
  );
  const workshops = events.filter((event) =>
    event.category === "Workshop" ? true : false
  );
  const games = events.filter((event) =>
    event.category === "Games" ? true : false
  );
  const entertainment = events.filter((event) =>
    event.category === "Entertainment" ? true : false
  );
  const learning = events.filter((event) =>
    event.category === "Learning" ? true : false
  );
  // console.log(sports);

  return (
    <div className="w-full">
      <EventSlider category="Upcoming" />
      <EventSlider category="Sports" events={sports} />
      <EventSlider category="Entertainment" events={entertainment} />
      <EventSlider category="Learning" events={learning} />
      <EventSlider category="Hackathons" events={hackathons} />
      <EventSlider category="Games" events={games} />
    </div>
  );
}

export default Page;
