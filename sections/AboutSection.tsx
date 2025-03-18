import TopSection from "@/components/TopSection";
import Image from "next/image";

export default function AboutSection(){

    return (
        <div className="bg-light-peach pt-24 flex flex-col pb-0 space-y-14 xs:space-y-20 xs:pb-2 sm:pb-4 md:pb-32 lg:space-y-28 2xl:pb-24">
            <div className="xs:px-6 sm:px-10">
                <TopSection
                    title="On-demand learning for in-demand skills"
                    text="While there’s a lot of feeling in soft skills, Learna is based on fact. Our range of content has been developed using data from leading global reports and research. With over 140 lessons (and growing every month!) across 9 key categories, Learna has zeroed in on the skills most critical for the future world of work."
                    variant="center"
                />
            </div>
            <div className="flex flex-col justify-evenly items-center space-x-0 px-8 space-y-6 sm:px-0 md:px-20 md:flex-row md:space-x-20 lg:space-y-0 lg:space-x-0 lg:items-start xl:items-center 2xl:px-0">
                <div className="w-80 xs:w-96 xl:w-[460px] 2xl:w-[550px] h-auto">
                    <Image
                        src={"/images/about-section-image.png"}
                        alt="lessons"
                        width={543}
                        height={543}
                    />
                </div>
                <TopSection
                    title="Bite-sized lessons, learnt over lunch"
                    text="Work isn’t what it used to be. Calendars are more packed and hours are more flexible than ever before — and teams need a new way to learn. That’s why Learna delivers snackable content that people can enjoy when and where they want to, in 10 minutes or less."
                    variant="left"
                />
            </div>
        </div>
    )
}