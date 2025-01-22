import Image from "next/image";

interface LinkImageProps{
    src: string;
    alt: string;
}

export default function LinkImage({src, alt}: LinkImageProps){

    return (
        <div className="h-[36vh]">
            <Image
                src={src}
                alt={alt}
                width={1}
                height={1}
                layout="responsive"
            />
        </div>
    )
}