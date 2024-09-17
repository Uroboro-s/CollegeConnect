import { auth } from "@/app/_lib/auth";

import UpdateSecurityForm from "@/app/_components/UpdateSecurityForm";

async function Page() {
  const session = await auth();

  return <UpdateSecurityForm user={session.curr_user} />;
}

export default Page;
