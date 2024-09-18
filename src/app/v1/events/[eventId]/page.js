import { auth } from "@/app/_lib/auth";
import Image from "next/image";

import NoImage from "../../../../../public/noimagefound.jpg";

import { getBannerName, getClub, getEvent } from "@/app/_lib/data_service";
import { TrashIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import UpdatesSection from "@/app/_components/UpdatesSection";
import UpdatesList from "@/app/_components/UpdatesList";

export async function generateMetadata({ params }) {
  // const { name } = await getCabin(params.cabinId);
  return { title: `Event ${params.eventId}` };
}

async function Page({ params }) {
  const eventId = params.eventId;

  const session = await auth();

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

  const club = await getClub(organized_by);

  console.log(club);

  let bannerObj;
  if (banner) bannerObj = await getBannerName(banner);

  return (
    <div className="h-full">
      <section className="flex flex-1 px-4 py-4">
        <div className="relative w-[544px] h-[544px] overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
          {image ? (
            <Image src={image} fill className="object-cover" alt={name} />
          ) : (
            <Image src={NoImage} fill className="object-cover" alt="no-image" />
          )}
        </div>
        <div className="ml-8 mt-1">
          {banner && <span>Part of {bannerObj.name}</span>}
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-sm">Organized by {club.name}</p>
          <p>
            From {start_date} to {end_date}
          </p>
          <p>Team members: {member_count}</p>
          <p>Register at: {reg_link}</p>
          <p>Registration cost: {reg_cost}</p>
          <p>Last date to register: {reg_deadline}</p>
          <div className="flex flex-1 px-4 py-4">
            {<TrashIcon className="h-12 w-12 fill-red-600 m-4" />}
            <WrenchScrewdriverIcon className="h-12 w-12 fill-yellow-600 m-4" />
          </div>
        </div>
      </section>
      <section className="px-4 py-4">
        <h1 className="text-3xl font-bold">Description</h1>
        <p className="text-xl">{description}</p>
      </section>
      <UpdatesSection eventId={eventId} currentUser={session.user} club={club}>
        <UpdatesList eventId={eventId} />
      </UpdatesSection>
    </div>
  );
}

//have to add link to the bannerObj.name(AdVITya) part
//have to add link to the clubname part
//add link at reg_link part
//add suspense inside updates after establishing (websocket??) connection

export default Page;
