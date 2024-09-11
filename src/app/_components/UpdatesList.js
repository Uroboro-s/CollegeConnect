import { getUpdates } from "../_lib/data_service";
import { convertDate, sortDatesDesc } from "../_utils/utils";

async function UpdatesList({ eventId }) {
  const updates = await getUpdates(eventId);
  updates.sort(sortDatesDesc);

  // console.log(updates);

  return (
    <ul className="text-xl flex flex-col gap-2 mb-4 justify-center">
      {updates.map((update) => {
        return (
          <li key={update.id} className=" bg-blue-200 flex flex-row">
            <div className="border-r-2 border-black p-2 flex flex-col justify-center w-52 ">
              <p>{convertDate(update.date)}</p>
              <p>{update.time}</p>
            </div>
            <p className="p-2 pl-4">{update.message}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default UpdatesList;
