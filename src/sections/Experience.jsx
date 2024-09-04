import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.to('#image-container', {
      xPercent: -100, // Reduce the distance to scroll
      ease: "none",  
      scrollTrigger: {
        trigger: '#image-section',
        start: 'top top',  
        end: '+=200%', // Increase the end position to extend the scroll area
        scrub: true,  
        pin: true,  
        pinSpacing: true,  
        markers: true,  
      }
    });
  });

  return (
    <section id='image-section' className='h-screen overflow-hidden relative z-10'>
      <div id='image-container' className='flex w-[300vw]'>
        <div className='w-screen h-screen bg-red-500'></div>
        <div className='w-screen h-screen bg-pink-500'></div>
        <div className='w-screen h-screen bg-orange-500'></div>
      </div>
    </section>
  );
};

export default Experience;
