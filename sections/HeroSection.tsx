import Button from "@/components/Button";
import StoreButton from "@/components/Store-Button";
import AppleIcon from "@/icons/AppleIcon";
import GooglePlayIcon from "@/icons/GooglePlayIcon";
import Image from "next/image";
import { dmSansFont, manropeFont } from "@/fonts/fonts";
import Link from "next/link";

export default function HeroSection(){

    return (
        <div className="bg-tertiary-orange flex items-end justify-between pl-36 pt-14 pr-20 pb-44">
            <div className="flex flex-col justify-between space-y-20">
                <div className="flex flex-col space-y-16">
                    <div className={`text-[65px] w-[500px] ${manropeFont.className}`}>Work smarter, not harder</div>
                    <div className={`w-[500px] text-xl tracking-wide font-semibold ${dmSansFont.className}`}>Learna is a microlearning app designed to transform how people learn, grow and engage at work. Focused on the most in-demand soft skills and supported by actionable insights, Learna makes it simple to build a future-fit workforce.</div>
                </div>
                <Link href={'/demo'}>
                    <Button
                        text="Get a Demo"
                        size="xl"
                        variant="primary"
                    />
                </Link>
            </div>
            <div>
                <Image
                    src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/774c0669-a9de-4d04-9218-48b9e7bb7370/Learna+Hero.png?format=1500w"}
                    alt="explore-section-on-app"
                    width={670}
                    height={633}
                />
            </div>
            <div className="absolute top-[900px] flex space-x-4">
                <StoreButton
                    icon={<AppleIcon/>}
                    textOne="GET IT ON"
                    textTwo="App Store"
                />
                <StoreButton
                    icon={<GooglePlayIcon/>}
                    textOne="GET IT ON"
                    textTwo="Google Play"
                />
            </div>
        </div>
    )
}