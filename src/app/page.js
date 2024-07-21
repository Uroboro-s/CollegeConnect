import Image from "next/image";
import "@/app/_styles/globals.css";
import HeroSection from "./_components/HeroSection";

import image from "../../public/VIT_bhopal1-750x375.webp";

export default function Home() {
  return (
    <>
      <div className="relative min-h-full">
        <Image
          src={image}
          fill
          alt="imagenotloaded"
          className="object-cover object-top"
        />
        <HeroSection />
      </div>
    </>
  );
}
