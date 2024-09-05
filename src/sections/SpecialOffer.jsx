import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SpecialOffer = () => {

  useGSAP(() => {
    // ScrollTrigger animation for moving the overlay down
    gsap.to(".overlay", {
      y: "100%", // Moves the overlay down by 100% of its height
     
      duration:2,
      scrollTrigger: {
        trigger: ".overlay",  // Target the overlay element
        start: "top center",  // When the top of the overlay hits the center of the viewport
        end: "bottom top",    // Animation ends when the bottom of the overlay reaches the top of the viewport
      
      },
    });
  });
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 relative overflow-hidden'>
        <div className="overlay w-[100%] h-[100%] absolute bg-white"></div>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;