"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HeroSectionSlider() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    
    const items = Array.from(marquee.children);
    items.forEach((item) => {
        const clone = item.cloneNode(true);
        marquee.appendChild(clone);
    })

    gsap.to(marquee.children, {
      x: `-${marquee.scrollWidth / 2}px`,
      duration: 40,
      ease: "none", 
      repeat: -1,
    });
  }, []);

  useGSAP(() => {
    if(!sliderContainerRef.current) return ;

    gsap.from(sliderContainerRef.current, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: sliderContainerRef.current,
            start: "top 90%"
        }
    })
  }, []);

  return (
    <div ref={sliderContainerRef} className="bg-primary-green border-b-2 border-black overflow-hidden whitespace-nowrap">
      <div ref={marqueeRef} className="flex space-x-16 text-6xl font-extralight py-4">
        <p>Learn, Grow, Engage.</p>
        <p>Learn, Grow, Engage.</p>
        <p>Learn, Grow, Engage.</p>
        <p>Learn, Grow, Engage.</p>
        <p>Learn, Grow, Engage.</p> 
        <p>Learn, Grow, Engage.</p> 
        <p>Learn, Grow, Engage.</p> 
        <p>Learn, Grow, Engage.</p> 
        <p>Learn, Grow, Engage.</p> 
        <p>Learn, Grow, Engage.</p> 
      </div>
    </div>
  );
}

export default HeroSectionSlider;
