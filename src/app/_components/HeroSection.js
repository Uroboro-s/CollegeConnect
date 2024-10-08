import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-black bg-opacity-80 dark:bg-gray-900 absolute bottom-0 top-0 left-0 right-0">
      <div className="grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto ml-6 mt-12 col-span-12 place-self-center lg:col-span-12">
          <h1 className="max-w-5xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl text-white">
            Your Gateway to Campus Happenings
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Your one-stop destination for real-time college updates, event news,
            and notifications. Connect, engage, and succeed with CollegeConnect!
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
          </Link>
          <Link
            href="/v1/about"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
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
    </section>
  );
}
