import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.jpg";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src={logo} quality={100} height="60" width="60" alt="VIT logo" /> */}
      <h1 className="text-6xl font-extrabold ">
        <span className="text-blue-700">Co</span>
        llege
        <span className="text-blue-700">Co</span>
        nnect
      </h1>
    </Link>
  );
}

export default Logo;
