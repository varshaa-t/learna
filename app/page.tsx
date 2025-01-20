import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}