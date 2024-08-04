import Image from "next/image";

function EventCard({ name, image, id }) {
  return (
    <li className="inline-block px-3">
      <div className="relative w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <Image src={image} fill className="object-cover" alt="genai" />
      </div>
    </li>
  );
}

export default EventCard;
