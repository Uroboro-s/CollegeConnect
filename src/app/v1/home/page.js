import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Home",
};

async function Page() {
  const session = await auth();
  console.log(session);
  return <div>Home page</div>;
}

export default Page;
