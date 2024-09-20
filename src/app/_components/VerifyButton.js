"use client";

import { useFormStatus } from "react-dom";

function VerifyButton({ children, pendingLabel, disabled }) {
  const { pending } = useFormStatus();

  console.log(disabled);

  return (
    <button
      className="ml-2 text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed "
      disabled={pending || disabled}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default VerifyButton;
