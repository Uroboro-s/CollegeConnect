import { auth } from "@/app/_lib/auth";

import UpdateSecurityForm from "@/app/_components/UpdateSecurityForm";

async function Page() {
  const session = await auth();
  // console.log(session);

  return <UpdateSecurityForm user={session.user} />;
}

export default Page;
