import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col lg:flex-row lg:justify-around lg:items-center px-4">
      <div className="flex gap-6 h-[20rem] md:h-[27rem] max-w-md md:max-w-lg flex-wrap justify-center items-center flex-col md:flex-row mb-14 lg:mb-0">
        <div className="w-[8rem] h-[8rem] md:w-[12rem] md:h-[12rem] bg-white shadow-lg flex justify-center items-center">
          <Image src={"/cars/audi.png"} width={200} height={200} alt="audi" />
        </div>
        <div className="w-[8rem] h-[8rem] md:w-[12rem] md:h-[12rem] bg-white shadow-lg flex justify-center items-center">
          <Image
            src={"/cars/legender.png"}
            width={200}
            height={200}
            alt="legender"
          />
        </div>
        <div className="w-[8rem] h-[8rem] md:w-[12rem] md:h-[12rem] bg-white shadow-lg flex justify-center items-center">
          <Image src={"/cars/civic.png"} width={200} height={200} alt="civic" />
        </div>
        <div className="w-[8rem] h-[8rem] md:w-[12rem] md:h-[12rem] bg-white shadow-lg flex justify-center items-center">
          <Image src={"/cars/van.png"} width={200} height={200} alt="van" />
        </div>
      </div>
      <div className="max-w-md h-[27rem] text-center lg:text-start">
        <h1 className="text-5xl font-semibold text-[#006FFF] mb-4 text-center">
          About DriveEase
        </h1>
        <p className="mb-8 text-sm md:text-lg">
          We strive to provide a hassle-free booking experience with competitive
          pricing, transparent policies, and 24/7 customer support. At
          DriveEase, it&apos;s not just about renting a car; it&apos;s about
          making your journey as smooth as possible. Let us drive you to your
          destination with ease.
        </p>
        <div className="max-w-md h-[8rem] flex flex-wrap gap-5 justify-center lg:justify-start">
          <div className="w-[9rem] md:w-[11rem] text-base md:text-lg h-12 bg-[#006FFF] text-white rounded-md flex items-center font-semibold px-2">
            <Image
              className="mr-4"
              src={"/cars/tick.svg"}
              width={30}
              height={30}
              alt="tick"
            />
            Insured
          </div>
          <div className="w-[9rem] md:w-[11rem] text-base md:text-lg  h-12 bg-[#006FFF] text-white rounded-md flex items-center font-semibold gap-2 px-2">
            <Image src={"/cars/tick.svg"} width={30} height={30} alt="tick" />
            Maintanance
          </div>
          <div className="w-[9rem] md:w-[11rem] text-base md:text-lg h-12 bg-[#006FFF] text-white rounded-md flex items-center font-semibold gap-3 px-2">
            <Image src={"/cars/tick.svg"} width={30} height={30} alt="tick" />
            Self Driven
          </div>
          <div className="w-[9rem] md:w-[11rem] text-base md:text-lg h-12 bg-[#006FFF] text-white rounded-md flex items-center font-semibold gap-3 px-2">
            <Image src={"/cars/tick.svg"} width={30} height={30} alt="tick" />
            Reasonable
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
