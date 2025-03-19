"use client";

import Profile from "@/components/Profile";
import TopSection from "@/components/TopSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArrowButton from "@/components/ArrowButton";
import LeftArrowIcon from "@/icons/LeftArrowIcon";
import RightArrowIcon from "@/icons/RightArrowIcon";

export default function IndustryExpertsSection(){

    const experts = [
        {
            img: "/images/expert-1.jpg",
            name: "Dr. Ben Hamer",
            title: "Futurist"
        }, 
        {
            img: "/images/expert-2.jpg",
            name: "Sean Hall",
            title: "Performance Coach"
        },
        {
            img: "/images/expert-3.jpg",
            name: "Amantha Imber",
            title: "Organisational Psychologist"
        },
        {
            img: "/images/expert-4.jpg",
            name: "Wade Kingsley",
            title: "Creative Coach"
        },
        {
            img: "/images/expert-5.jpg",
            name: "Steph Clarke",
            title: "Futurist"
        },
        {
            img: "/images/expert-6.jpg",
            name: "Dr. Lillian Nejad",
            title: "Clinical Psychologist"
        },
        {
            img: "/images/expert-7.jpg",
            name: "Dr. Marion Piper",
            title: "Creative Coach"
        },
        {
            img: "/images/expert-8.jpg",
            name: "Arabella McPherson",
            title: "Communications Coach"
        },
        {
            img: "/images/expert-9.jpg",
            name: "Richard Wentworth-Ping",
            title: "Executive Coach"
        },
        {
            img: "/images/expert-10.jpg",
            name: "Lucy Allen",
            title: "Leadership Coach"
        },
        {
            img: "/images/expert-11.jpg",
            name: "Leeat Bosco",
            title: "Leadership Coach"
        },
        {
            img: "/images/expert-12.jpg",
            name: "Leigh Morrison",
            title: "Executive Coach"
        },
        {
            img: "/images/expert-13.jpg",
            name: "Prashant Ponkshe",
            title: "Mindset Coach"
        },
    ]

    return (
        <div className="bg-primary-green flex flex-col -space-y-10 pt-16 pb-6 xs:pb-12 xs:pt-24 md:space-y-0 lg:space-y-12">
            <div>
                <TopSection
                    title="Learn from the best in the business"
                    text="From a globally recognised futurist to the person who literally wrote the book on productivity, Learna gives you access to trusted content from more than 30 industry experts and people with lived experience."
                    variant="center"
                />
            </div>
            <div className="flex justify-between space-x-2 sm:pl-4 sm:pr-8">
                <Swiper
                    grabCursor={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 6 }
                    }}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '#right-arrow',
                        prevEl: '#left-arrow'
                    }}
                >
                    {experts.map((expert, index) => (
                        <SwiperSlide key={index}>
                            <Profile {...expert}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mx-auto flex space-x-5 sm:hidden pt-20">
                <div id="left-arrow">
                    <ArrowButton
                        icon={<LeftArrowIcon/>}
                    />
                </div>
                <div id="right-arrow">
                    <ArrowButton
                        icon={<RightArrowIcon/>}
                    />
                </div>
            </div>
        </div>
    )
}