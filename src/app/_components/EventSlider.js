import Image from "next/image";

function EventSlider({ category, events }) {
  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-24 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        {category}
      </h1>
      <div className="flex max-w-screen-2xl overflow-x-scroll no-scrollbar pb-10 ">
        <ul className="flex flex-nowrap lg:ml-24 md:ml-20 ml-10 ">
          {/* <li className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </li> */}
          {events &&
            events.map((event) => (
              <li className="inline-block px-3" key={event.id}>
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  {event.name}
                  {event.id == 6 && (
                    <Image
                      src={event.image}
                      width={48}
                      height={48}
                      alt="genai"
                    />
                  )}
                </div>
              </li>
            ))}
          {/* <li className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </li>
          <li className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </li>
          <li className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </li>
          <li className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </li>
          <li className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </li>
          <li className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </li>
          <li className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </li> */}
        </ul>
      </div>
      {/* <styl>
  .hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scroll-bar::-webkit-scrollbar {
    display: none;
  } */}
    </div>
  );
}

export default EventSlider;
