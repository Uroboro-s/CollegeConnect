import { getAllEventsPaginated } from "@/app/_lib/data_service";

import Searchbar from "@/app/_components/Searchbar";
import Pagination from "@/app/_components/Pagination";

async function Page({ searchParams }) {
  const { data: events, count } = await getAllEventsPaginated();

  // console.log(events);
  // console.log(searchParams);

  return (
    <>
      <Searchbar />
      <ul>
        {events.map((event) => {
          return <li key={event.id}>{event.name}</li>;
        })}
      </ul>
      <Pagination count={count} />
    </>
  );
}

//have to add pagination here with all events

export default Page;
