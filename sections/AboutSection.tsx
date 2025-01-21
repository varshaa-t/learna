import TopSection from "@/components/TopSection";
import Image from "next/image";

export default function AboutSection(){

    return (
        <div className="bg-light-peach pt-14 flex flex-col space-y-32 pb-32">
            <div>
                <TopSection
                    title="On-demand learning for in-demand skills"
                    text="While there’s a lot of feeling in soft skills, Learna is based on fact. Our range of content has been developed using data from leading global reports and research. With over 140 lessons (and growing every month!) across 9 key categories, Learna has zeroed in on the skills most critical for the future world of work."
                    variant="center"
                />
            </div>
            <div className="flex justify-evenly items-center">
                <Image
                    src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/99c968a1-ec92-4be5-999e-bf35efca0d49/Content.png?format=1500w"}
                    alt="lessons"
                    width={600}
                    height={600}
                />
                <TopSection
                    title="Bite-sized lessons, learnt over lunch"
                    text="Work isn’t what it used to be. Calendars are more packed and hours are more flexible than ever before — and teams need a new way to learn. That’s why Learna delivers snackable content that people can enjoy when and where they want to, in 10 minutes or less."
                    variant="left"
                />
            </div>
        </div>
    )
}