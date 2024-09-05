import { getBannerName, getClub, getEvent } from "@/app/_lib/data_service";
import Image from "next/image";

export async function generateMetadata({ params }) {
  // const { name } = await getCabin(params.cabinId);
  return { title: `Event ${params.eventId}` };
}

async function Page({ params }) {
  const eventId = params.eventId;
  console.log(eventId);

  const {
    name,
    image,
    description,
    start_date,
    end_date,
    reg_deadline,
    reg_link,
    reg_cost,
    member_count,
    organized_by,
    banner,
  } = await getEvent(eventId);

  const { clubName } = await getClub(organized_by);

  let bannerObj;
  if (banner) bannerObj = await getBannerName(banner);
  // console.log(event);

  return (
    <div className="h-full">
      <section className="flex flex-1 px-4 py-4">
        <div className="relative w-[544px] h-[544px] overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Image src={image} fill className="object-cover" alt={name} />
        </div>
        <div className="ml-8 mt-1">
          {banner && <span>Part of {bannerObj.name}</span>}
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-sm">Organized by {clubName}</p>
          <p>
            From {start_date} to {end_date}
          </p>
          <p>Team members: {member_count}</p>
          <p>Register at: {reg_link}</p>
          <p>Registration cost: {reg_cost}</p>
          <p>Last date to register: {reg_deadline}</p>
        </div>
      </section>
      <section className="px-4 py-4">
        <h1 className="text-3xl font-bold">Description</h1>
        <p className="text-xl">{description}</p>
      </section>
      <section className="px-4 py-4">
        <h1 className="text-3xl font-bold">Updates</h1>
        <ul className="text-xl">
          <li>event 10pm</li>
          <li>event 6pm</li>
          <li>event 3pm</li>
          <li>event 9am</li>
          <li>event 4am</li>
        </ul>
      </section>
    </div>
  );
}

//have to add link to the bannerObj.name(AdVITya) part
//have to add link to the clubname part
//add suspense inside updates after establishing websocket connection

export default Page;
