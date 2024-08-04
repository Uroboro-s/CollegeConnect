import {
  getUpcomingEvents,
  getRegistrableEvents,
} from "@/app/_lib/data_service";

import EventSlider from "@/app/_components/EventSlider";
import Searchbar from "@/app/_components/Searchbar";

export const metadata = {
  title: "Home",
};

function Page() {
  return (
    <div className="w-full">
      {/* Announcemnt hero section in caase of mega events like AdVitya?? */}
      {/* <Searchbar /> */}
      <EventSlider category="Register Now!" />
      <EventSlider category="Sports" />
      <EventSlider category="Entertainment" />
      <EventSlider category="Learning" />
      <EventSlider category="Hackathons" />
      <EventSlider category="Workshops" />
      <EventSlider category="Games" />
    </div>
  );
}

export default Page;
