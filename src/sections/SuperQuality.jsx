import { shoe8 } from "../assets/images";
import { Button } from "../components";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);
const SuperQuality = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#super-image", 
      {
        rotate: 15,
      },
      {
        rotate: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#super-image",
          start: "top center", 
          end: "center center",
          scrub: true,
        },
      }
    );
  
    gsap.fromTo(
      ".sq-animate",
      {
        opacity:0,
      },
      {
        opacity:1,
        duration: 1,
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".sq-container",
        
          start:"top center"
        },
      }
    );
  });
  

  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='sq-container flex flex-1 flex-col'>
        <h2 className='sq-animate font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='sq-animate mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='sq-animate mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='sq-animate mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          id="super-image"
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;