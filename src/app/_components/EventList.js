import { getRegistrableEvents, getUpcomingEvents } from "../_lib/data_service";

import EventCard from "./EventCard";

async function EventList({ category }) {
  let events;
  if (category === "Register Now!") events = await getRegistrableEvents();
  else events = await getUpcomingEvents(category);

  return (
    <ul className="flex flex-nowrap lg:ml-24 md:ml-20 ml-10 ">
      {events &&
        events.map((event) => (
          <EventCard
            key={event.id}
            name={event.name}
            image={event.image}
            id={event.id}
          />
        ))}
    </ul>
  );
}

export default EventList;
