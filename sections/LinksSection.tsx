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
        <div className="bg-tertiary-orange">
            <div className="flex justify-between items-center px-6">
                <div>
                    <Image
                        src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/186d8da8-0cb3-4b89-ad90-0375b3067e10/CTA_Left.png?format=1000w"}
                        alt="people-img-1"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="flex flex-col items-center space-y-10"> 
                    <div className={`text-[65px] w-[500px] text-center ${manropeFont.className}`}>
                        Learn better,
                        work better.
                    </div>
                    <Link href={'/demo'}>
                        <Button
                            text="Get a Demo"
                            size="xl"
                            variant="primary"
                        />
                    </Link>
                    <div className="flex space-x-2 pt-10">
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
                <div>
                    <Image
                        src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/b33701e0-d921-4a09-bdd3-4fe6ef527d5b/CTA_Right.png?format=1000w"}
                        alt="people-img-2"
                        width={350}
                        height={350}
                    />
                </div>
            </div>
            <div className="grid grid-cols-6 w-full">
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