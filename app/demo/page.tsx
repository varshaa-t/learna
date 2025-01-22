import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import FormSection from "@/sections/FormSection";

export default function Demo(){

    return (
        <div className={`bg-tertiary-orange flex flex-col`}>
            <Navbar/>
            <FormSection/>
            <FooterSection/>
        </div>
    )
}