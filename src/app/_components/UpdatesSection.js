"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
// import {useFormState } from "react-dom";

import { createUpdateAction } from "../_lib/actions";
import { getCurrentDate, showToast } from "../_utils/utils";

import Spinner from "./Spinner";
import {
  ArrowPathIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Bounce, toast } from "react-toastify";
import CreateUpdateForm from "./CreateUpdateForm";

function UpdatesSection({ eventId, children, currentUser, club }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [state, formAction] = useFormState(createUpdateAction, initialState);
  //not working smh

  const router = useRouter();

  // const createUpdateActionWithEventId = createUpdateAction.bind(null, eventId);
  //so that event id as well as default props
  //formData can be passes to the action

  function handleRefresh() {
    router.refresh();
    showToast("success", "Refreshed!");
    // toast.success("Refreshed!");
  }

  // , {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  //   transition: Bounce,
  // }

  const updateAdditionAllowed =
    currentUser.id === club.president || currentUser.id === club.vice_president;
  // console.log(club.vice_president);

  return (
    <section className="px-4 py-4">
      <div className="flex flex-row gap-6">
        <h1 className="text-3xl font-bold">Updates</h1>
        <button onClick={handleRefresh}>
          <ArrowPathIcon className="w-8 h-8" />
        </button>
      </div>
      <Suspense fallback={<Spinner />}>
        {updateAdditionAllowed && (
          <button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen && <PlusCircleIcon className="w-8 h-8" />}
            {isOpen && <MinusCircleIcon className="w-8 h-8 transition-all" />}
          </button>
        )}
        {isOpen && <CreateUpdateForm eventId={eventId} />}
        {children}
      </Suspense>
    </section>
  );
}

export default UpdatesSection;
