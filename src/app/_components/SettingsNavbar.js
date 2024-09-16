import Link from "next/link";

function SettingsNavbar() {
  return (
    <nav className="flex gap-16 bg-[#f4f4f5] w-fit p-3 rounded-lg text-gray-600 no-underline">
      <Link href="/v1/settings/profile">Profile</Link>
      <Link href="/v1/settings/appearance">Appearance</Link>
      <Link href="/v1/settings/security">Security</Link>
      <Link href="/v1/settings/favorites">Favorites</Link>
      <Link href="/v1/settings/notifications">Notifications</Link>
    </nav>
  );
}

export default SettingsNavbar;
