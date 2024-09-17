import { redirect } from "next/navigation";

function Page() {
  redirect("/v1/settings/profile");

  return <div>Settings</div>;
}

export default Page;
