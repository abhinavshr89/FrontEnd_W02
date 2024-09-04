import { useEffect } from "react";
import Nav from "./components/Nav";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Experience
} from "./sections";
import gsap from "gsap";

const App = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const main = document.querySelector(".main");
    const imageContainer = document.querySelector("#image-container");

    const moveCursor = (dets) => {
      gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        ease: "back.out"
      });
    };

    const handleClick = () => {
      console.log("I have clicked on the image");
    };

    const handleMouseEnter = () => {
      cursor.innerHTML = "View More";
      gsap.to(cursor, {
        scale:2,
        duration: 0.3 // Optional: Adds a smooth transition
      });
    };

    const handleMouseLeave = () => {
      cursor.innerHTML = "";
      gsap.to(cursor, {
        scale: 1, // Set to 1 instead of 0 to maintain visibility
        duration: 0.3 // Optional: Adds a smooth transition
      });
    };

    if (cursor && main) {
      main.addEventListener("mousemove", moveCursor);
    }

    if (imageContainer) {
      imageContainer.addEventListener("click", handleClick);
      imageContainer.addEventListener("mouseenter", handleMouseEnter);
      imageContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      if (main) {
        main.removeEventListener("mousemove", moveCursor);
      }
      if (imageContainer) {
        imageContainer.removeEventListener("click", handleClick);
        imageContainer.removeEventListener("mouseenter", handleMouseEnter);
        imageContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <main className="relative main w-[100%] h-[100%]">
      <div
        style={{ zIndex: 1000000000 }}
        id="cursor"
        className="max-sm:hidden fixed bg-coral-red h-[40px] w-[40px] rounded-full opacity-70"
      ></div>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>
      <section>
        <Experience />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
