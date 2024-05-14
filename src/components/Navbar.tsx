import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center text-orange-500">
      <div className="flex justify-start items-center">
        <div className="flex mr-8">
          <div className="w-24 h-24 flex justify-center items-center">
            <Image src="/images/logo.jpeg" width={68} height={68} alt="logo" />
          </div>
          <div className="flex flex-col justify-center items-center font-extrabold text-2xl ">
            <p className="text-green-800">Herbal</p>
            <p>Healthcare</p>
            <p className="text-green-800">Center</p>
          </div>
        </div>
        <div className="md:flex justify-start gap-4 font-semibold text-lg text-green-900 hidden">
          <p>Products</p>
          <p>Pack Orders</p>
        </div>
      </div>
      <div className="md:flex justify-end gap-8 font-semibold text-lg text-green-900 hidden">
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
