import Image from "next/image";
import Link from "next/link";

import svg from "../../../public/real_logo.svg";
import SignupForm from "../_components/SignupForm";

export const metadata = {
  title: "Signup",
};

function Page() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/v1"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image className="w-8 h-8 mr-2" src={svg} alt="logo" />
          <span className="text-blue-700 font-bold">Co</span>llege{" "}
          <span className="text-blue-700 font-bold">Co</span>nnect
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <SignupForm />
          </div>
          <hr className="mx-8" />
          <div className="flex items-center justify-center mt-5 mb-5 dark:bg-gray-800">
            <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
              <Image
                className="w-6 h-6"
                src={"https://www.svgrepo.com/show/475656/google-color.svg"}
                width={6}
                height={6}
                loading="lazy"
                alt="google logo"
              />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
