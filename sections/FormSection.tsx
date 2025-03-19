import ContactForm from "@/components/ContactForm";
import { dmSansFont, manropeFont } from "@/fonts/fonts";
import Image from "next/image";

export default function FormSection(){

    return (
        <div className={`bg-tertiary-orange flex justify-between md:items-center lg:items-end 2xl:items-start pt-52 pb-36 px-1 font-semibold ${dmSansFont.className}`}>
            <div className="hidden md:block">
                <Image
                    src={"/images/links-section-1.png"}
                    alt="left-img"
                    width={360}
                    height={670}
                    className="h-auto md:w-[30vw] lg:w-[25vw] xl:w-80 2xl:w-96"
                />
            </div>
            <div className={`flex flex-col items-center mx-auto -mt-36 xs:-mt-28`}>
                <div className="flex flex-col text-center w-72 space-y-20 pb-12 md:pb-28 xs:space-y-16 xs:w-96 md:space-y-12 md:w-[400px] xl:w-[600px]">
                    <div className={`${manropeFont.className} font-light text-3xl xs:text-4xl sm:text-[5vw] xl:text-[4.5vw] 2xl:text-[5vw]`}>Get a Demo</div>
                    <div className={`${dmSansFont.className} font-semibold text-sm xs:tracking-wide xs:text-base md:text-[17px] xl:text-lg`}>See for yourself how Learna can create better workplaces by changing the way people learn.</div>
                </div>
                <ContactForm/>
            </div>
            <div className="hidden md:block">
                <Image
                    src={"/images/links-section-2.png"}
                    alt="right-img"
                    width={360}
                    height={670}
                    className="h-auto md:w-[30vw] lg:w-[25vw] xl:w-80 2xl:w-96"
                />
            </div>
        </div>
    )
}