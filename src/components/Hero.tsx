import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full h-[40rem]">
      <div className="w-full h-[35rem] bg-[#006FFF] text-white flex justify-around items-center px-12">
        <div className="max-w-md text-center md:text-start">
          <h1 className="text-3xl font-semibold mb-5 text-center md:text-start md:text-4xl lg:text-5xl">
            Your Trusted Car Rental Service
          </h1>
          <p className="text-center md:text-start">
            At DriveEase, we offer an effortless and reliable car rental
            experience tailored to your needs. Whether it's for business trips,
            family vacations, or quick city rides, our wide selection of
            vehicles ensures you&apos;ll find the perfect fit.
          </p>
            <Button className="px-8 py-6 mt-4 font-semibold bg-black text-white hover:bg-white hover:text-black transition-all duration-400">View All Cars</Button>
        </div>
        <Image 
        className="hidden md:block md:w-1/2 lg:w-[40%] xl:w-[30%]"
        src={'/cars/hero-van.png'}
        width={500}
        height={500}
        alt="Van"
        />
      </div>
    </div>
  );
}

export default Hero;
