import { getPaginatedEvents } from "@/app/_lib/data_service";

import Searchbar from "@/app/_components/Searchbar";
import Pagination from "@/app/_components/Pagination";
import Link from "next/link";
import { auth } from "@/app/_lib/auth";

const PAGE_SIZE = 10;

async function Page({ searchParams }) {
  const session = await auth();
  // console.log(session);
  const currentPage = !searchParams.page ? 1 : Number(searchParams.page);

  const { data: events, count } = await getPaginatedEvents(
    currentPage,
    PAGE_SIZE
  );

  return (
    <>
      <div className="flex justify-end items-center p-6">
        <Searchbar />
        {session.user.isAdmin && (
          <Link
            href="/v1/events/createevent"
            className="h-full p-2 rounded-md ml-4 bg-slate-50 hover:bg-blue-700 hover:text-white"
            prefetch={false}
          >
            Create event
          </Link>
        )}
      </div>
      <div className="flex flex-col justify-center p-6">
        <table className="border border-1 text-lg">
          <thead>
            <tr>
              <th className="w-[100px]">S.No.</th>
              <th className="w-[350px]">Name</th>
              <th className="w-[200px]">Category</th>
              <th className="w-[200px]">Start Date</th>
              <th className="w-[200px]">End Date</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => {
              return (
                <tr key={event.id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{event.name}</td>
                  <td className="text-center">{event.category}</td>
                  <td className="text-center">{event.start_date}</td>
                  <td className="text-center">{event.end_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination count={count} PAGE_SIZE={PAGE_SIZE} />
    </>
  );
}

//have to add pagination here with all events

export default Page;
