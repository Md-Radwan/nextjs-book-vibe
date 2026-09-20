import React from "react";
import heroImg from '@/assets/heroImg.png'
import Image from "next/image";

const Banner = () => {
  return (
    <section className="mt-12">
      <div className="container mx-auto flex justify-between items-center px-30 py-20 bg-[#F3F3F3] rounded-3xl">
        <div>
            <h1 className="font-bold text-[56px] leading-21 pb-12">
                Books to freshen up <br /> your bookshelf
            </h1>
            <button className="btn btn-success font-bold text-white">View The List</button>
        </div>
        <div>
            <Image src={heroImg} alt="hero image"/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
