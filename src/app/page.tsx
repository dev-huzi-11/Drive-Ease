// import About from "@/components/About";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
// import HowItWorks from "@/components/HowItWorks";
// import RentCars from "@/components/RentCars";
// import Services from "@/components/Services";

// export default function Home() {
//   return (
//     <>
//     <Hero />
//     <About />
//     <RentCars />
//     <HowItWorks />
//     <Services />
//     <Footer />
//     </>
//   );
// }

import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import RentCars from "@/components/RentCars";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="rent-cars">
        <RentCars />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="services">
        <Services />
      </section>
    </>
  );
}
