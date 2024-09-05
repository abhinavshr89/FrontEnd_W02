import { star } from "../assets/icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PopularProductCard = ({ imgURL, name, price }) => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = gsap.utils.toArray(".product-card");

    gsap.fromTo(
      cards,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2, // Stagger effect for multiple cards
        ease: "power2.in-out",
        scrollTrigger: {
          trigger: cards[0], // Trigger animation based on the first card entering the viewport
          start: "top 70%",
          end: "bottom 20%",
          once: true, // Animation will only play once
         
        },
      }
    );
  }, []);

  return (
    <div
      ref={(el) => cardsRef.current.push(el)}
      className="flex flex-1 flex-col w-full max-sm:w-full product-card"
    >
      <img src={imgURL} alt={name} className="max-w-[252px] max-sm:w-[100px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl max-sm:text-[17px] leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl max-sm:text-[17px] leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
