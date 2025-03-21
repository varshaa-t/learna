"use client";

import BulletPoint from "@/components/BulletPoint";
import Line from "@/components/Line";
import ReviewBox from "@/components/ReviewBox";
import TopSection from "@/components/TopSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ReviewSection(){

    const reviewSectionImageOneRef = useRef<HTMLImageElement | null>(null);
    const reviewSectionImageTwoRef = useRef<HTMLImageElement | null>(null);

    useGSAP(() => {
        if(!reviewSectionImageOneRef.current || !reviewSectionImageTwoRef.current) return ;

        gsap.from(reviewSectionImageOneRef.current, {
            opacity: 0,
            y: 200,
            scrollTrigger: {
                trigger: reviewSectionImageOneRef.current,
                start: "top 80%"
            }
        })

        gsap.from(reviewSectionImageTwoRef.current, {
            opacity: 0,
            y: 200,
            scrollTrigger: {
                trigger: reviewSectionImageTwoRef.current,
                start: "top 80%"
            }
        })

        ScrollTrigger.refresh();
    }, []);

    return (
        <div className="bg-light-peach h-full flex flex-col pt-20 space-y-10 xs:space-y-16 md:space-y-24 md:pt-0 lg:pt-36 lg:space-y-20">
            <div className="flex flex-col md:flex-row justify-around items-center px-10 space-y-6 xs:space-y-20 md:pl-10 md:space-y-36 md:px-0 lg:items-start lg:space-y-0 2xl:items-center">
                <div className="rounded-t-full overflow-hidden">
                    <div className="h-auto w-[350px] xs:w-[360px] md:w-56 lg:w-[350px] xl:w-96 2xl:w-auto">
                        <Image
                            ref={reviewSectionImageOneRef}
                            src={"/images/review-section-1.jpg"}
                            alt="review-1"
                            width={420}
                            height={630}
                        />
                    </div>
                    <div className="relative md:left-[5vh] md:bottom-[10vh] lg:left-[8vh] lg:bottom-[20vh] xl:bottom-[25vh] xl:left-[7vh] 2xl:bottom-[25vh] 2xl:left-[10vh]">
                        <ReviewBox
                            review={`“Learna empowers the team to learn on their terms.”`}
                            reviewer="— Cecellia Telkes – Learning Projects Consultant, CPM"
                        />
                    </div>
                </div>
                <div>
                    <div className="mx-auto sm:mx-0">
                        <TopSection
                            title="For modern workplace learners"
                            text="With Learna, taking charge of your career and chasing those goals is easy. Get the outcomes you want (and deserve!) with learning recommendations tailored to your needs, and a schedule that suits you."
                            variant="left"
                        />
                    </div>
                    <div>
                        <Line/>
                        <BulletPoint
                            text="Learn new skills, habits and ways of working from leading experts on creativity, psychology, productivity and more"
                        />
                    </div>
                    <Line/>
                    <BulletPoint
                        text="Track your progress to have more confident, productive career chats with your manager"
                    />
                    <Line/>
                    <BulletPoint
                        text="Learn on your terms — when, where and how much you want to"
                    />
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-around items-center px-10 pb-20 md:pl-10 md:px-0 lg:items-start lg:pb-0 2xl:items-start">
                <div>
                    <TopSection
                        title="And innovative people leaders"
                        text="Understand what’s influencing your workplace culture and help people fall in love with learning again with actionable advice they can put into practise every day."
                        variant="left"
                    />
                    <Line/>
                    <BulletPoint
                        text="Have more informed and productive discussions with Learna’s insightful analytics"
                    />
                    <Line/>
                    <BulletPoint
                        text="Support people with a personalised platform that inspires self-driven learning and development"
                    />
                    <Line/>
                    <BulletPoint
                        text="Improve engagement with bite-sized content designed to fit in with everyday habits"
                    />
                </div>
                <div className="relative rounded-t-full overflow-hidden pb-10 md:pb-0">
                    <div className="h-auto w-[350px] xs:w-[360px] md:w-56 lg:w-[350px] xl:w-96 2xl:w-auto">
                        <Image
                            ref={reviewSectionImageTwoRef}
                            src={"/images/review-section-2.jpg"}
                            alt="review-2"
                            width={420}
                            height={400}
                        />
                    </div>
                    <div className="relative md:left-[5vh] md:bottom-[10vh] lg:left-[8vh] lg:bottom-[20vh] xl:bottom-[25vh] xl:left-[7vh] 2xl:bottom-[33vh] 2xl:left-[10vh]">
                        <ReviewBox
                            review={`“It’s been a game-changer for us, we’ve really put learning into action”`}
                            reviewer="— Shai Roitman – Managing Director, Data Sauce and Sticki"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}