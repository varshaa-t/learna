import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import IndustryExpertsSection from "@/sections/IndustryExpertsSection";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <IndustryExpertsSection/>
    </div>
  );
}