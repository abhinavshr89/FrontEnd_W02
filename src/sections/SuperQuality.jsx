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


    gsap.to(".overlay-sq-1",{
      y: "100%", // Moves the overlay down by 100% of its height
     
      duration:2,
      scrollTrigger: {
        trigger: ".overlay-container",  // Target the overlay element
        start: "top center",  // When the top of the overlay hits the center of the viewport
        end: "bottom top",    // Animation ends when the bottom of the overlay reaches the top of the viewport
      
      },
    })

    
    gsap.to(".overlay-sq-2",{
      y: "-100%", // Moves the overlay down by 100% of its height
     
      duration:2,
      scrollTrigger: {
        trigger: ".overlay-container",  // Target the overlay element
        start: "top center",  // When the top of the overlay hits the center of the viewport
        end: "bottom top",    // Animation ends when the bottom of the overlay reaches the top of the viewport
      
      },
    })
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

      <div className='flex-1 flex justify-center items-center relative'>
      <div className="w-[100%] h-[100%] absolute flex z-10 overlay-container overflow-hidden">
          <div className="overlay-sq-1 w-[50%] h-[100%] bg-white"></div>
          <div className="overlay-sq-2 w-[50%] h-[100%] bg-white"></div>
        </div>
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