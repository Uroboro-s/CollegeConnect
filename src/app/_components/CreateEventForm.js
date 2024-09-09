"use client";

import { useState } from "react";
import { createEvent } from "../_lib/actions";
import SubmitButton from "./SubmitButton";
import { generateSignature } from "../_utils/generateSignature";

function CreateEventForm() {
  const [fileMessage, setFileMessage] = useState("");

  // async function handleWidgetClick() {
  //   const widget = window.cloudinary.createUploadWidget(
  //     {
  //       cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  //       uploadSignature: generateSignature,
  //       apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  //       resourceType: "image",
  //     },
  //     (error, result) => {
  //       if (!error && result && result.event === "success") {
  //         console.log("Done! Here is the image info: ", result.info);
  //         setIsImageUploaded(true);
  //       } else if (error) {
  //         console.log(error);
  //       }
  //     }
  //   );
  //   widget.open();
  // }

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
  return (
    <form
      action={createEvent}
      className="bg-gray-200 py-8 px-12 text-lg flex gap-6 flex-col"
      encType="multipart/form-data"
    >
      <div className="space-y-2 flex flex-col">
        <label>Name</label>
        <input
          name="name"
          type="text"
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
        />
      </div>

      <div className="space-y-2 flex flex-col">
        <label>Category</label>
        <input
          name="category"
          type="text"
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
        />
      </div>

      <div className="space-y-2 flex flex-col">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
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

{
  /* <button type="button" onClick={handleWidgetClick}>
        UPload eidget
      </button> */
}

export default CreateEventForm;
