import { Suspense } from "react";

import EventList from "./EventList";
import Spinner from "./Spinner";

function EventSlider({ category }) {
  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-24 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        {category}
      </h1>
      <div className="flex max-w-screen-2xl overflow-x-scroll no-scrollbar pb-10 ">
        <Suspense fallback={<Spinner />}>
          <EventList category={category} />
        </Suspense>
      </div>
    </div>
  );
}

export default EventSlider;
