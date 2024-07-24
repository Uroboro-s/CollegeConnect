import { redirect } from "next/navigation";

function Page() {
  redirect("/v1");

  return <div></div>;
}

export default Page;
