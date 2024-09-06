import { getAllEventsPaginated } from "@/app/_lib/data_service";

import Searchbar from "@/app/_components/Searchbar";
import Pagination from "@/app/_components/Pagination";

const PAGE_SIZE = 10;

async function Page({ searchParams }) {
  console.log(searchParams);

  const currentPage = !searchParams.page ? 1 : Number(searchParams.page);

  console.log(currentPage);

  const { data: events, count } = await getAllEventsPaginated(currentPage, PAGE_SIZE);

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
      <Pagination count={count} PAGE_SIZE={PAGE_SIZE} />
    </>
  );
}

//have to add pagination here with all events

export default Page;
