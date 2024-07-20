import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.jpg";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image src={logo} quality={100} height="60" width="60" alt="VIT logo" />
      <span className="text-xl font-semibold text-primary-700">VIT Events</span>
    </Link>
  );
}

export default Logo;
