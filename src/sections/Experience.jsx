import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { redshoe ,yellowshoes,greenshoes,blackshoes,blackdrift,bluedrift,whitesandle } from '../assets/images';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.to('#image-container', {
      xPercent: -100, // Reduce the distance to scroll
      ease: "none",
      scrollTrigger: {
        trigger: '#image-section',
        start: 'top top',
        end: '+=200% bottom', // Increase the end position to extend the scroll area
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
        <div className='w-screen h-screen flex items-center justify-center'>
          <img src={redshoe} className='w-[50%]  object-contain ' alt="Pink Shoe" />
          <img src={yellowshoes} className='w-[50%]  object-contain ' alt="Pink Shoe" />
        </div>
        <div className='w-screen h-screen flex items-center justify-center '>
          <img src={greenshoes} className='w-[50%]  object-contain ' alt="Red Shoe" />
          <img src={blackdrift} className='w-[50%]  object-contain ' alt="Red Shoe" />
        </div>
        <div className='w-screen h-screen flex items-center justify-center '>
          <img src={bluedrift} className='w-[50%]  object-contain ' alt="Orange Shoe" />
          <img src={whitesandle} className='w-[50%]  object-contain ' alt="Orange Shoe" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
