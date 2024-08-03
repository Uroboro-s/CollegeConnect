import Image from "next/image";

function Card({ event }) {
  const { name, image, id } = event;

  return (
    <li className="inline-block px-3" key={event.id}>
      <div className="relative w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <Image src={event.image} fill className="object-cover" alt="genai" />
      </div>
      {/* <caption>{event.name}</caption> */}
    </li>
  );
}

export default Card;
