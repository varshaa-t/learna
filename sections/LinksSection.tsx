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
                <div className="flex justify-between items-center pl-10 xs:pl-[10vw] pb-16 sm:pl-16 sm:pb-14 md:pl-5 md:pr-10 md:pb-10 lg:pb-0">
                    <div className="hidden md:block">
                        <Image
                            src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/186d8da8-0cb3-4b89-ad90-0375b3067e10/CTA_Left.png?format=1000w"}
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
                        <div className="flex pt-10 space-x-3 md:space-x-2 lg:space-x-3 2xl:space-x-2">
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
                            src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/b33701e0-d921-4a09-bdd3-4fe6ef527d5b/CTA_Right.png?format=1000w"}
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
                    src="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/003f04b1-aafd-4ff4-81da-6f5f4924ec9c/Screen+Shot+2022-11-04+at+4.59.49+pm.png?format=750w"
                    alt="img-1"
                />
                <LinkImage
                    src="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/f8862555-2ef2-4429-8f59-36de3438810f/ImageLearna.png?format=750w"
                    alt="img-2"
                />
                <LinkImage
                    src="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/c426596c-1aed-406f-81ae-ea9e3b51bc52/1.png?format=750w"
                    alt="img-3"
                />
                <LinkImage
                    src="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/05f48363-8596-41d3-8626-352f6b7f64a1/2.png?format=750w"
                    alt="img-4"
                />
                <LinkImage
                    src="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/4bada9c7-679c-4e4f-b9b9-b4cdf7ef7e44/Screen+Shot+2022-11-04+at+4.59.40+pm.png?format=750w"
                    alt="img-5"
                />
                <LinkImage
                    src="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/cb64fc01-9666-43fa-a1db-d9820ec2b9c8/Get+A+Demo.png?format=750w"
                    alt="img-6"
                />
            </div>
        </div>
    )
}