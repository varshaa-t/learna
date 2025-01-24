import ContactForm from "@/components/ContactForm";
import { dmSansFont, manropeFont } from "@/fonts/fonts";
import Image from "next/image";

export default function FormSection(){

    return (
        <div className={`bg-tertiary-orange flex justify-between pt-52 pb-36 px-1 font-semibold ${dmSansFont.className}`}>
            <div>
                <Image
                    src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/59f62cad-e52f-4e77-9a1f-03a833bee70b/CTA_Left.png?format=2500w"}
                    alt="left-img"
                    width={360}
                    height={670}
                />
            </div>
            <div className={`flex flex-col items-center -mt-28`}>
                <div className="flex flex-col text-center w-[600px] space-y-3 pb-28">
                    <div className={`${manropeFont.className} font-light text-[65px]`}>Get a Demo</div>
                    <div className={`${dmSansFont.className} text-xl tracking-wide font-semibold`}>See for yourself how Learna can create better workplaces by changing the way people learn.</div>
                </div>
                <ContactForm/>
            </div>
            <div>
                <Image
                    src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/baadd734-cd66-4c4e-920f-766f0fa6aafd/CTA_Right.png?format=2500w"}
                    alt="right-img"
                    width={360}
                    height={670}
                />
            </div>
        </div>
    )
}