import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function UserDropdown() {
  return (
    <>
      <details className="dropdown relative">
        <summary className="btn m-1 relative block">
          <UserIcon className="h-8 w-8 border-2 rounded-2xl border-black" />
        </summary>
        <ul className=" bg-gray-100 border  border-gray-300 rounded-box z-[1] shadow-inner rounded-md w-52  absolute top-10 -right-8">
          <li className="transition ease-in-out delay-150 duration-150 text-base p-3 rounded-t-md hover:bg-blue-700 hover:text-white">
            <Link href="/settings">Settings</Link>
          </li>
          <hr />
          <li className="transition ease-in-out delay-150 duration-150 text-base p-3 rounded-b-md hover:bg-blue-700 hover:text-white">
            <Link href="/signout">Sign out</Link>
          </li>
        </ul>
      </details>
    </>
  );
}

export default UserDropdown;
