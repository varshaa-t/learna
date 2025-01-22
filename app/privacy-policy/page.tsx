import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import PrivacyPolicySection from "@/sections/PrivacyPolicySection";

export default function PrivacyPolicy(){

    return (
        <div className="flex flex-col">
            <Navbar/>
            <PrivacyPolicySection/>
            <FooterSection/>
        </div>
    )
}