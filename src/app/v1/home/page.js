import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Home",
};

async function Page() {
  const session = await auth();
  return <div>Home page</div>;
}

export default Page;
