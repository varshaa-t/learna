import Image from "next/image";

interface LinkImageProps{
    src: string;
    alt: string;
}

export default function LinkImage({src, alt}: LinkImageProps){

    return (
        <div>
            <Image
                src={src}
                alt={alt}
                width={256}
                height={257}
                className="h-auto w-full md:w-[340px] lg:w-full" 
            />
        </div>
    )
}