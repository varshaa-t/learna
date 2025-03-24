"use client";

import { dmSansFont } from '@/fonts/fonts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ReviewSectionSlider() {

    const reviewSectionSliderMarqueeRef = useRef<HTMLDivElement | null>(null);
    const reviewSectionSliderTitleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const reviewMarquee = reviewSectionSliderMarqueeRef.current;
        if(!reviewMarquee) return ;

        gsap.to(reviewMarquee.children, {
            x: `-${reviewMarquee.scrollWidth / 2}px`,
            duration: 25,
            ease: "none",
            repeat: -1
        })

    }, []);

    useGSAP(() => {
        if(!reviewSectionSliderTitleRef.current) return ;

        gsap.from(reviewSectionSliderTitleRef.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: reviewSectionSliderTitleRef.current,
                start: "top 60%"
            }
        })

        ScrollTrigger.refresh();
    }, []);

    const imgArray = [
        { img: "/images/review-section-slider-1.png", alt: "morse-micro" },
        { img: "/images/review-section-slider-2.png", alt: "linktree" },
        { img: "/images/review-section-slider-3.png", alt: "hardie-grant" },
        { img: "/images/review-section-slider-4.png", alt: "emmbr" },
        { img: "/images/review-section-slider-5.png", alt: "kic" },
        { img: "/images/review-section-slider-6.png", alt: "hatched" },
        { img: "/images/review-section-slider-7.png", alt: "cpm" },
        { img: "/images/review-section-slider-8.png", alt: "smiling-mind" },
        { img: "/images/review-section-slider-9.png", alt: "QMS" },
        { img: "/images/review-section-slider-10.png", alt: "HBL" },
        { img: "/images/review-section-slider-11.png", alt: "bastion" },
        { img: "/images/review-section-slider-12.png", alt: "mamamia" },
        { img: "/images/review-section-slider-1.png", alt: "morse-micro" },
        { img: "/images/review-section-slider-2.png", alt: "linktree" },
        { img: "/images/review-section-slider-3.png", alt: "hardie-grant" },
        { img: "/images/review-section-slider-4.png", alt: "emmbr" },
        { img: "/images/review-section-slider-5.png", alt: "kic" },
        { img: "/images/review-section-slider-6.png", alt: "hatched" },
        { img: "/images/review-section-slider-7.png", alt: "cpm" },
        { img: "/images/review-section-slider-8.png", alt: "smiling-mind" },
        { img: "/images/review-section-slider-9.png", alt: "QMS" },
        { img: "/images/review-section-slider-10.png", alt: "HBL" },
        { img: "/images/review-section-slider-11.png", alt: "bastion" },
        { img: "/images/review-section-slider-12.png", alt: "mamamia" },
      ];

  return (
    <div className='bg-light-peach flex flex-col items-center space-y-14 overflow-hidden pb-14 xl:-mt-10'>
        <div 
            ref={reviewSectionSliderTitleRef}
            className={`text-2xl w-80 text-center xs:w-auto xs:text-2xl sm:text-[27px] lg:text-[33px] xl:text-[40px] font-semibold ${dmSansFont.className}`}
        >
            Trusted by the best in the business
        </div>
        <div 
            ref={reviewSectionSliderMarqueeRef} 
            className='flex space-x-20'
        >   
           {imgArray.map((image, index) => (
            <Image
                src={image.img}
                alt={image.alt}
                key={index}
                width={240}
                height={120}
            />
           ))}
        </div>
    </div>
  )
}

export default ReviewSectionSlider