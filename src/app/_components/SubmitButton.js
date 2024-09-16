"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({ children, pendingLabel, disabled }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-700 px-8 py-4 text-white font-semibold hover:bg-blue-900 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending || disabled}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;
