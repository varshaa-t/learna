import Button from "@/components/Button";
import FooterIcon from "@/components/FooterIcon";
import { dmSansFont } from "@/fonts/fonts";
import LinkedinIcon from "@/icons/LinkedinIcon";
import MailIcon from "@/icons/MailIcon";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection(){

    return (
        <div className={`bg-light-peach flex justify-between pr-40 pl-20 pb-4 pt-10 font-semibold ${dmSansFont.className}`}>
            <div className="flex flex-col space-y-14">
                <Image
                    src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/0dbe9630-e839-41f7-bcf7-1b57644c514d/Learna+Logo-Black.png?format=300w"}
                    alt="footer-logo"
                    width={120}
                    height={40}
                />
                <div className="w-[550px] flex flex-col space-y-4">
                    <div className="">Learna wishes to acknowledge the Traditional Custodians of the land on which we work and gather, Naarm (Melbourne, Australia), on Wurundjeri Woi Wurrung Country. </div>
                    <div>We pay our respects to the Wurundjeri Woi Wurrung people, as well as their Elders, past, present, and emerging.</div>
                </div>
                <Link href={"/privacy-policy"} className="underline underline-offset-4">Privacy Policy</Link>
            </div>
            <div className="flex space-x-16">
                <div className="flex pt-6 space-x-3">
                    <div>
                        <FooterIcon
                            icon={<LinkedinIcon/>}
                        />
                    </div>
                    <div>
                        <FooterIcon
                            icon={<MailIcon/>}
                        />
                    </div>
                </div>
                <Link href={'/demo'}>
                    <Button
                        text="Get a Demo"
                        size="2xl"
                        variant="secondary"
                    />
                </Link>
            </div>
        </div>
    )
}