"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

import { checkPassword, showToast } from "../_utils/utils";
import { createUserAccountAction } from "../_lib/actions";

import EmailVerificationForm from "./EmailVerificationForm";

function SignupForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const [isVerified, setIsVerified] = useState(false);
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

  async function handleCreateAccountForm(formData) {
    const data = await createUserAccountAction(formData);

    if (data.type && data.type === "success") {
      showToast("success", data.message);
      router.push("/login");
    } else {
      showToast("error", data.message);
    }
  }

  return (
    <>
      <EmailVerificationForm
        isVerified={isVerified}
        setIsVerified={setIsVerified}
        email={email}
        setEmail={setEmail}
      />
      <form className="space-y-4 md:space-y-6" action={handleCreateAccountForm}>
        <input type="hidden" name="email" value={email} />
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="terms"
              className="font-light text-gray-500 dark:text-gray-300"
            >
              I accept the{" "}
              <a
                className="font-medium text-blue-700 hover:underline dark:text-primary-500"
                href="#"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <CreateAccountButton
          pendingLabel="Creating..."
          disabled={isDisabled || !isVerified}
        >
          Create an account
        </CreateAccountButton>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-700 hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
      </form>
    </>
  );
}

function CreateAccountButton({ children, pendingLabel, disabled }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending || disabled}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default SignupForm;
