import { auth } from "@/app/_lib/auth";

const {
  default: UpdateProfileForm,
} = require("@/app/_components/UpdateProfileForm");

async function Page() {
  const session = await auth();

  return <UpdateProfileForm user={session.user} />;
}

export default Page;
