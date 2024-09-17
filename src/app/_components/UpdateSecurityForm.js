"use client";

import { useEffect, useState } from "react";

import SubmitButton from "@/app/_components/SubmitButton";
import { checkPassword } from "../_utils/utils";

function UpdateSecurityForm({ user }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(
    function () {
      if (!checkPassword(password)) {
        setMessage(
          "Password must contain at least a lowercase, an uppercase, a digit and a special character(#, _, @) and be 8 - 24 characters long!"
        );
        setIsDisabled(true);
      } else if (password != confirmPassword) {
        setMessage("Passwords do not match!");
        setIsDisabled(true);
      } else {
        setMessage("");
        setIsDisabled(false);
      }
    },
    [password, confirmPassword]
  );

  function updateSecurityAction() {
    console.log("here");
  }

  return (
    <form
      action={updateSecurityAction}
      className="bg-gray-200 py-8 px-12 text-lg flex gap-6 flex-col"
      // encType="multipart/form-data"
    >
      <div className="space-y-2 flex flex-col">
        <label htmlFor="name">New Password:</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
        />
      </div>
      <div className="space-y-2 flex flex-col">
        <label htmlFor="name">Confirm New Password:</label>
        <input
          name="confirm_password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
        />
      </div>
      <p className="text-xs text-red-600">{message}</p>
      {/* <input type="hidden" name="user_id" value={user.id} /> */}

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating..." disabled={isDisabled}>
          Save changes
        </SubmitButton>
      </div>
    </form>
  );
}

export default UpdateSecurityForm;
