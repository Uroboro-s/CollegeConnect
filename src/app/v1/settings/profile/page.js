"use client";

import { useState } from "react";
// import { createEventAction } from "../_lib/actions";
import SubmitButton from "../../../_components/SubmitButton";

function Page({ clubs }) {
  const [fileMessage, setFileMessage] = useState("");

  function changeFile(e) {
    // console.log(e);
    let ext = e.match(/\.([^\.]+)$/)[1];
    // console.log(ext);
    switch (ext) {
      case "jpg":
      case "bmp":
      case "png":
      case "tif":
        setFileMessage("");
        break;
      default:
        setFileMessage("*Invalid file type");
    }
  }

  const createEventAction = () => {
    console.log("1");
  };
  return (
    <form
      action={createEventAction}
      className="bg-gray-200 py-8 px-12 text-lg flex gap-6 flex-col"
      // encType="multipart/form-data"
    >
      <div className="space-y-2 flex flex-col">
        <label htmlFor="name">First Name</label>
        <input
          name="name"
          type="text"
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
        />
      </div>

      <div className="flex flex-row gap-4">
        <div className="space-y-2 flex flex-col">
          <label htmlFor="reg_cost">Last Name:</label>
          <input
            name="reg_cost"
            type="text"
            className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
          />
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        <label htmlFor="image">Upload image</label>
        <input
          name="image"
          type="file"
          onChange={(e) => changeFile(e.target.value)}
          accept="image/*"
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm"
        />
        <p className="text-xs text-red-600">{fileMessage}</p>
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">Create Event</SubmitButton>
      </div>
    </form>
  );
}

export default Page;
