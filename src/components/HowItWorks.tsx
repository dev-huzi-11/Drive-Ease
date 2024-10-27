import Image from "next/image";
import React from "react";

function HowItWorks() {
  return (
    <div className="w-full min-h-screen bg-white text-black py-10 px-12">
      <div className="flex flex-col justify-center items-center mx-auto mb-16 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-4">
          How it Works
        </h1>
        <p className="max-w-md md:max-w-lg text-center text-base md:text-lg">
          Rent a car with DriveEast is now very simple. Follow these steps to
          get the car quickly and effortlessly.
        </p>
      </div>
      <div className="flex justify-evenly items-center flex-col md:flex-row w-full mx-auto h-[30rem] gap-16 md:gap-0">
        <div className="flex flex-col justify-center items-center max-w-xs h-[20rem] ">
          <div className="w-[6rem] h-[6rem] bg-[#006FFF] flex justify-center items-center rounded-full">
            <Image
              src={"/cars/works-img/car.svg"}
              width={70}
              height={70}
              alt="car"
            />
          </div>
          <h2 className="text-xl font-semibold my-4">1. Choose Your Car</h2>
          <p className="max-w-xs text-center">Find the perfect ride for your next adventure from our wide selection of top-tier vehicles.</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-xs h-[20rem]">
          <div className="w-[6rem] h-[6rem] bg-[#006FFF] flex justify-center items-center rounded-full">
            <Image
              src={"/cars/works-img/note.svg"}
              width={35}
              height={35}
              alt="note"
            />
          </div>
          <h2 className="text-xl font-semibold my-4">2. Make Reservation</h2>
          <p className="max-w-xs text-center">Book your preferred car effortlessly with our streamlined reservation system.</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-xs h-[20rem]">
          <div className="w-[6rem] h-[6rem] bg-[#006FFF] flex justify-center items-center rounded-full">
            <Image
              src={"/cars/works-img/key.svg"}
              width={60}
              height={60}
              alt="key"
            />
          </div>
          <h2 className="text-xl font-semibold my-4">3. Pickup & Enjoy</h2>
          <p className="max-w-xs text-center">Reserve your car online, pick it up at your convenience, and enjoy a seamless journey with ease and comfort!</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
