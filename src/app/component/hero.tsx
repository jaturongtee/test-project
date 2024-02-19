import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <h1 className=" animate-fade text-2xl text-center max-w-[350px] md:max-w-[600px] xl:max-w-[700px] md:text-5xl xl:text-7xl md:leading-[57px] xl:leading-tight mx-auto mt-52 ">
          A brand and product designer working with clients globally
        </h1>
      </div>
      <div className="  flex  mx-auto w-1/4 mt-12  justify-center text-xs md:text-base lg:text-lg xl:text-xl ">
        <p className=" mr-3 bg-white py-2 px-3 rounded-full flex items-center justify-center leading-4 ">
          Expertise
        </p>
        <p className="mr-3 bg-[#e8e5e480] py-2 px-3 rounded-full flex items-center justify-center leading-4 ">
          Branding
        </p>
        <p className="mr-3 bg-[#e8e5e480] py-2 px-3 rounded-full flex items-center justify-center leading-4 ">
          Product
        </p>
        <p className="mr-3 bg-[#e8e5e480] py-2 px-3 rounded-full flex items-center justify-center leading-4 whitespace-nowrap">
          Design Systems
        </p>
      </div>
    </>
  );
};

export default Hero;
