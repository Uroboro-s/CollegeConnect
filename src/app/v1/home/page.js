import {
  getUpcomingEvents,
  getRegistrableEvents,
} from "@/app/_lib/data_service";

import EventSlider from "@/app/_components/EventSlider";
import Searchbar from "@/app/_components/Searchbar";

export const metadata = {
  title: "Home",
};

async function Page() {
  const events = await getUpcomingEvents();
  const eventsToRegister = await getRegistrableEvents();

  // console.log(events);

  const sports = events.filter((event) =>
    event.category === "Sports" ? true : false
  ); //done
  const hackathons = events.filter((event) =>
    event.category === "Hackathon" ? true : false
  ); //done
  const workshops = events.filter((event) =>
    event.category === "Workshop" ? true : false
  ); //done
  const games = events.filter((event) =>
    event.category === "Games" ? true : false
  ); //done
  const entertainment = events.filter((event) =>
    event.category === "Entertainment" ? true : false
  ); //done
  const learning = events.filter((event) =>
    event.category === "Learning" ? true : false
  ); //done

  return (
    <div className="w-full">
      <Searchbar />
      {/* <Suspense fallback={<Spinner />}> */}
      <EventSlider category="Register Now!" events={eventsToRegister} />
      <EventSlider category="Sports" events={sports} />
      <EventSlider category="Entertainment" events={entertainment} />
      <EventSlider category="Learning" events={learning} />
      <EventSlider category="Hackathons" events={hackathons} />
      <EventSlider category="Workshops" events={workshops} />
      <EventSlider category="Games" events={games} />
      {/* </Suspense> */}
    </div>
  );
}

export default Page;
