/* eslint-disable react/jsx-key */
"use client";

import Image from "next/image";
import GetInTouch from "./GetInTouch";
import { useEffect, useState } from "react";
import Arrow from "./arrow.svg";

interface Product {
  id: string;
  url: string;
}

const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=" w-fit mx-auto p-6 grid gap-y-9 gap-x-5 grid-cols-1 justify-items-center mt-60  lg:grid-cols-2">
        {products.map((product, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl relative text-center text-white"
          >
            <Image
              src={product.url}
              width={694}
              height={496}
              alt="Picture of the cat"
              className="rounded-xl justify-cente object-cover bg-cover bg-center w-[694px] h-[496px]"
            />
            <div
              className="flex  backdrop-blur-sm p-5 absolute top-0 opacity-0 w-full h-full
            hover:opacity-100 justify-between"
            >
              <h1 className="">{product.id}</h1>
              <Image
                src={Arrow}
                width={694}
                height={496}
                alt="Arrow"
                className="max-md:hidden w-10 h-10 rounded-full bg-white animate-pulse"
              />
            </div>
          </div>
        ))}
      </div>

      <GetInTouch />

      <div className="fixed bottom-10 translate-x-[-50%] left-[50%] z-10 bg-black text-white flex items-center gap-2 rounded-full p-2 px-4">
        <div className="flex flex-col w-3 h-3 items-center justify-center">
          <span className="w-3 h-[1px] translate-y-[3px] bg-white rotate-90"></span>
          <span className="w-3 h-[1px] translate-y-[1px] bg-white -rotate-45"></span>
          <span className="w-3 h-[1px] bg-white"></span>
          <span className="w-3 h-[1px] bg-white rotate-45"></span>
        </div>
        <span className=" cursor-pointer">Shop</span>
      </div>
    </>
  );
};

export default Main;
