"use client";

import { useEffect, useState } from "react";

import { updateProfileAction } from "../_lib/actions";

import SubmitButton from "./SubmitButton";
import { showToast } from "../_utils/utils";

function UpdateProfileForm({ user }) {
  // console.log(user);
  const splitArray = user.name ? user.name.split(" ") : [];
  const first = splitArray[0];
  const last = splitArray[splitArray.length - 1];
  let middle = "";
  splitArray.forEach((element, index) => {
    if (index != 0 && index != splitArray.length - 1) middle = middle + element;
  });
  // console.log(splitArray);
  // console.log(first);
  // console.log(middle);
  // console.log(last);

  const [firstName, setFirstName] = useState(first);
  const [middleName, setMiddleName] = useState(middle);
  const [lastName, setLastName] = useState(last);
  const [fileMessage, setFileMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  // console.log(user);

  useEffect(
    function () {
      if (first !== firstName) setIsDisabled(false);
      else if (middle !== middleName) setIsDisabled(false);
      else if (last !== lastName) setIsDisabled(false);
      else setIsDisabled(true);
    },
    [first, middle, last, firstName, middleName, lastName]
  );

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
        setIsDisabled(true);
    }
  }

  async function handleFormSubmit(formData) {
    const data = await updateProfileAction(formData);

    showToast(data.type, data.message);
  }

  return (
    <form
      action={handleFormSubmit}
      className="bg-gray-200 py-8 px-12 text-lg flex gap-6 flex-col"
      // encType="multipart/form-data"
    >
      <div className="space-y-2 flex flex-col">
        <label htmlFor="name">First Name:</label>
        <input
          name="first_name"
          type="text"
          defaultValue={first}
          onChange={(e) => setFirstName(e.target.value)}
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
        />
      </div>
      <div className="space-y-2 flex flex-col">
        <label htmlFor="name">Middle Name:</label>
        <input
          name="middle_name"
          type="text"
          defaultValue={middle}
          onChange={(e) => setMiddleName(e.target.value)}
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
        />
      </div>

      <div className="flex flex-row gap-4">
        <div className="space-y-2 flex flex-col">
          <label htmlFor="reg_cost">Last Name:</label>
          <input
            name="last_name"
            type="text"
            defaultValue={last}
            onChange={(e) => setLastName(e.target.value)}
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
      <input type="hidden" name="user_id" value={user.id} />
      <input type="hidden" name="folder_name" value="profile" />

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating..." disabled={isDisabled}>
          Save changes
        </SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
