import Image from "next/image";
import Card from "./Card";

function EventSlider({ category, events }) {
  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-24 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        {category}
      </h1>
      <div className="flex max-w-screen-2xl overflow-x-scroll no-scrollbar pb-10 ">
        <ul className="flex flex-nowrap lg:ml-24 md:ml-20 ml-10 ">
          {events &&
            events.map((event) => <Card key={event.id} event={event} />)}
        </ul>
      </div>
    </div>
  );
}

export default EventSlider;
