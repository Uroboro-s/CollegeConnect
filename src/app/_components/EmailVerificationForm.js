"use client";

import { useEffect, useState } from "react";

import VerifyButton from "./VerifyButton";
import { checkEmail, showToast } from "../_utils/utils";

function EmailVerificationForm({ isVerified, setIsVerified, email, setEmail }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(
    function () {
      if (checkEmail(email) == true) setIsDisabled(false);
      else setIsDisabled(true);
    },
    [email]
  );

  async function handleOTPGeneration(formData) {
    const data = await generateOTP(formData.get("email"));
    if (data) {
      showToast("success", "OTP generated!");
      setIsGenerated(true);
    } else {
      showToast("error", "OTP generation failed!");
    }
  }

  async function handleOTPVerification(formData) {
    const data = await verifyOTP(formData.get("email"), formData.get("otp"));

    if (data) {
      showToast("success", "Verification complete!");
      setIsVerified(true);
    } else {
      showToast("error", "OTP incorrect! Please try again");
    }
  }

  return (
    <form action={isGenerated ? handleOTPVerification : handleOTPGeneration}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row">
            <input
              type="email"
              name="email"
              value={email}
              disabled={isGenerated}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@vitbhopal.ac.in"
            />
            {!isGenerated && (
              <VerifyButton disabled={isDisabled}>Get OTP</VerifyButton>
            )}
          </div>
          {isGenerated && (
            <div className="flex flex-row">
              <input
                type="text"
                name="otp"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@vitbhopal.ac.in"
              />
              {!isVerified && <VerifyButton>Verify</VerifyButton>}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default EmailVerificationForm;
