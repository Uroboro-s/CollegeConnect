import Link from "next/link";

import UserDropdown from "./UserDropdown";

export default async function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/v1/home"
            className="hover:underline transition-colors font-semibold"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/v1/about"
            className="hover:underline transition-colors font-semibold"
          >
            About
          </Link>
        </li>

        <UserDropdown />
      </ul>
    </nav>
  );
}
{
  /* <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/home"
            className="hover:text-accent-400 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <Link
          href="/settings"
          className="hover:text-accent-400 transition-colors"
        >
          <UserIcon className="h-6 w-6" />
        </Link>
      </ul>
    </nav> */
}
