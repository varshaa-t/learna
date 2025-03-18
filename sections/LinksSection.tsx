import Button from "@/components/Button";
import LinkImage from "@/components/LinkImage";
import StoreButton from "@/components/Store-Button";
import { manropeFont } from "@/fonts/fonts";
import AppleIcon from "@/icons/AppleIcon";
import GooglePlayIcon from "@/icons/GooglePlayIcon";
import Image from "next/image";
import Link from "next/link";

export default function LinksSection(){

    return (
        <div>
            <div className="bg-tertiary-orange">
                <div className="flex justify-between items-center pl-10 pb-16 xs:pl-[12vw] sm:pl-[10vw] sm:pb-14 md:pl-5 md:pr-10 md:pb-10 lg:pb-0">
                    <div className="hidden md:block">
                        <Image
                            src={"/images/links-section-1.png"}
                            alt="people-img-1"
                            width={350}
                            height={350}
                            className="h-auto md:w-44 lg:w-60 xl:w-[300px] 2xl:w-[360px]"
                        />
                    </div>
                    <div className="flex flex-col items-center space-y-8 pt-10 xs:pt-12 sm:pt-16 md:pt-28 lg:pt-20 xl:pt-14 xl:space-y-10 2xl:pt-0"> 
                        <div className={`text-center w-48 text-3xl leading-loose xs:w-60 sm:leading-normal sm:w-72 sm:text-4xl md:w-72 md:text-4xl md:leading-normal lg:w-96 lg:text-[52px] lg:leading-normal xl:text-6xl xl:leading-normal 2xl:text-[70px] 2xl:w-[500px] 2xl:leading-normal ${manropeFont.className}`}>
                            Learn better,
                            work better.
                        </div>
                        <Link href={'/demo'}>
                            <Button
                                text="Get a Demo"
                                size="2xl"
                                variant="primary"
                            />
                        </Link>
                        <div className="flex pt-10 space-x-3 pb-12 md:space-x-2 lg:space-x-3 xl:pb-0 2xl:space-x-2">
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
                    <div className="hidden md:block">
                        <Image
                            src={"/images/links-section-2.png"}
                            alt="people-img-2"
                            width={350}
                            height={350}
                            className="h-auto md:w-44 lg:w-60 xl:w-72 2xl:w-80"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-tertiary-orange grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 place-items-end w-full">
                <LinkImage
                    src="/images/links-section-3.png"
                    alt="img-1"
                />
                <LinkImage
                    src="/images/links-section-4.png"
                    alt="img-2"
                />
                <LinkImage
                    src="/images/links-section-5.png"
                    alt="img-3"
                />
                <LinkImage
                    src="/images/links-section-6.png"
                    alt="img-4"
                />
                <LinkImage
                    src="/images/links-section-7.png"
                    alt="img-5"
                />
                <LinkImage
                    src="/images/links-section-8.png"
                    alt="img-6"
                />
            </div>
        </div>
    )
}