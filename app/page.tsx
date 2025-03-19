import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/AboutSection";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import IndustryExpertsSection from "@/sections/IndustryExpertsSection";
import LinksSection from "@/sections/LinksSection";
import ReviewSection from "@/sections/ReviewSection";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <IndustryExpertsSection/>
      <ReviewSection/>
      <LinksSection/>
      <FooterSection/>
    </div>
  );
}