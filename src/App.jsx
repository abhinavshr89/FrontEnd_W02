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
} from "./sections";
import gsap from "gsap";

const App = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const main = document.querySelector(".main");

    if (cursor && main) {
      main.addEventListener("mousemove", (dets) => {
        gsap.to(cursor, {
          x: dets.clientX,
          y: dets.clientY,
          scale: 0.8,
          ease:"back.out"
         
        });
      });
    }

    // Cleanup function to remove event listener when component unmounts
    return () => {
      if (main) {
        main.removeEventListener("mousemove", null);
      }
    };
  }, []);

  return (
    <main className="relative main w-[100%] h-[100%]">
      <div style={{zIndex:1000000000}} id="cursor" className="max-sm:hidden fixed bg-coral-red h-[40px] w-[40px] rounded-full opacity-70">

      </div>
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
