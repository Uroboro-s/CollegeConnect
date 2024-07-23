import Link from "next/link";

function NotFound() {
  return (
    <div className="relative min-h-full">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold m-8">
          Error 404: This page could not be found
        </h1>
        <Link
          href="/"
          className="inline-flex justify-center items-center bg-blue-700 text-white px-6 py-3 text-lg"
        >
          Go back home
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fillRule="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
