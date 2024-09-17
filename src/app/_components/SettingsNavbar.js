"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function SettingsNavbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-16 bg-[#f4f4f5] w-fit p-3 rounded-lg text-gray-600 no-underline">
      <Link
        href="/v1/settings/profile"
        className={pathname === "/v1/settings/profile" && "underline"}
      >
        Profile
      </Link>
      <Link
        href="/v1/settings/appearance"
        className={pathname === "/v1/settings/appearance" && "underline"}
      >
        Appearance
      </Link>
      <Link
        href="/v1/settings/security"
        className={pathname === "/v1/settings/security" && "underline"}
      >
        Security
      </Link>
      <Link
        href="/v1/settings/favorites"
        className={pathname === "/v1/settings/favorites" && "underline"}
      >
        Favorites
      </Link>
      <Link
        href="/v1/settings/notifications"
        className={pathname === "/v1/settings/notificaions" && "underline"}
      >
        Notifications
      </Link>
    </nav>
  );
}

export default SettingsNavbar;
