import Image from "next/image";

import HeroSection from "../_components/HeroSection";

import image from "../../../public/hero_bg.webp";

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
