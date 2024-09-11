import { getPaginatedEvents } from "../_lib/data_service";
import Pagination from "./Pagination";

async function EventTable({ PAGE_SIZE, searchParams }) {
  const currentPage = !searchParams.page ? 1 : Number(searchParams.page);

  const { data: events, count } = await getPaginatedEvents(
    currentPage,
    PAGE_SIZE
  );

  return (
    <>
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

export default EventTable;
