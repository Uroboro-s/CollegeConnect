"use client";

import { Suspense, useState } from "react";

import { createUpdateAction } from "../_lib/actions";
import { getCurrentDate } from "../_utils/utils";

import Spinner from "./Spinner";
import {
  ArrowDownIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function UpdatesSection({ eventId, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const createUpdateActionWithEventId = createUpdateAction.bind(null, eventId);
  //so that event id as well as default props
  //formData can be passes to the action

  function handleRefresh() {
    router.refresh();
  }

  return (
    <section className="px-4 py-4">
      <div className="flex flex-row gap-6">
        <h1 className="text-3xl font-bold">Updates</h1>
        <button onClick={handleRefresh}>
          <ArrowPathIcon className="w-8 h-8" />
        </button>
      </div>
      <Suspense fallback={<Spinner />}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && <PlusCircleIcon className="w-8 h-8" />}
          {isOpen && <MinusCircleIcon className="w-8 h-8 transition-all" />}
          {/* Add update
          <span>
            {!isOpen && <ArrowRightIcon className="w-8 h-8" />}
            {isOpen && <ArrowDownIcon className="w-8 h-8" />}
          </span> */}
        </button>
        {isOpen && (
          <form
            action={createUpdateActionWithEventId}
            className="bg-blue-200 flex flex-row mb-2"
          >
            <div className="border-r-2 border-black p-2 flex flex-col justify-center w-52 ">
              <input type="date" name="date" defaultValue={getCurrentDate()} />
              <input type="time" step="1" name="time" defaultValue="00:00:00" />
            </div>
            <div className="p-2 pl-4 ">
              <textarea name="message" placeholder="Write your message here!" />
            </div>
            <button type="submit">Create</button>
          </form>
        )}
        {children}
      </Suspense>
    </section>
  );
}

export default UpdatesSection;
