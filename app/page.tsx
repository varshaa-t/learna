import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/AboutSection";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import HeroSectionSlider from "@/sections/HeroSectionSlider";
import IndustryExpertsSection from "@/sections/IndustryExpertsSection";
import LinksSection from "@/sections/LinksSection";
import ReviewSection from "@/sections/ReviewSection";
import ReviewSectionSlider from "@/sections/ReviewSectionSlider";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <Navbar/>
      <HeroSection/>
      <div className="bg-black">
        <HeroSectionSlider/>
      </div>
      <AboutSection/>
      <IndustryExpertsSection/>
      <ReviewSection/>
      <ReviewSectionSlider/>
      <LinksSection/>
      <FooterSection/>
    </div>
  );
}