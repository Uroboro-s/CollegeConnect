import SettingsNavbar from "@/app/_components/SettingsNavbar";

function RootLayout({ children }) {
  return (
    <div className="flex flex-col gap-7 overflow-scroll overflow-x-hidden p-4">
      <div className="flex flex-col gap-0">
        <h2 className="text-5xl font-semibold">Settings</h2>
        <p className="text-base font-extralight text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>
      <div className="overflow-scroll overflow-x-hidden">
        <SettingsNavbar />
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export default RootLayout;
