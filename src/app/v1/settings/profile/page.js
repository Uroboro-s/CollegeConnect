import { auth } from "@/app/_lib/auth";

const {
  default: UpdateProfileForm,
} = require("@/app/_components/UpdateProfileForm");

async function Page() {
  const session = await auth();
  // const user = await getUser(session.user.email);
  // console.log(session);

  return <UpdateProfileForm user={session.curr_user} />;
}

export default Page;
