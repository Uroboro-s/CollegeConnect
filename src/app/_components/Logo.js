import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
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
