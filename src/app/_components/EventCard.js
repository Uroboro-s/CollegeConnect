import Image from "next/image";
import Link from "next/link";

import NoImage from "../../../public/noimagefound.jpg";

function EventCard({ name, image, id }) {
  return (
    <Link href={`/v1/events/${id}`}>
      <li className="inline-block px-3">
        <div className="relative w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
          {image ? (
            <Image src={image} fill className="object-cover" alt={name} />
          ) : (
            <Image src={NoImage} fill className="object-cover" alt={name} />
          )}
        </div>
      </li>
    </Link>
  );
}

export default EventCard;
