import React from "react";
import Link from "next/link";

const GetInTouch = ({ largerText = false }) => {
  return (
    <div
      className={` animate-fade flex flex-col justify-center align-center text-center p-5 text-${largerText ? "text-4xl md:text-5xl xl:text-7xl xl:leading-tight h-screen " : "3xl"} h-[40vh]`}
    >
      <p className="">Let&apos;s work together.</p>
      <p
        className={`${largerText ? "text-3xl sm:text-[38px] h-[40vh] sm:h-[30vh]" : ""}`}
      >
        <Link
          href="mailto:oli@oh.studio"
          className="text-gray-500 hover:text-opacity-70 delay-100"
        >
          Get in touch.
        </Link>
      </p>
    </div>
  );
};

export default GetInTouch;
