"use client";

import Image from "next/image";
import React, { ReactEventHandler, SetStateAction } from "react";
import { FaStar } from "react-icons/fa6";
import { Button } from "./ui/button";

type Props = {
  count: number;
  action: React.Dispatch<SetStateAction<number>>;
};

const ProductsList = (props: Props) => {
  return (
    <div className="md:px-20 px-1 w-full">
      <div className="flex justify-center gap-10 py-4 md:flex-row flex-col">
        <div className=" w-full md:w-1/3 h-80 relative ">
          <Image src="/images/ct-capsule.jpg" fill={true} alt="ct-capsule" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-orange-500">
            Xianhe CT Capsule
          </h2>
          <div className="flex items-end">
            <h3 className="text-2xl font-bold">₦10,000 </h3>
            <span> + FREE SHIPPING</span>
          </div>
          <div className="flex mb-1">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
          </div>
          <p>Canticer</p>
          <p>Balance cells energy to convert cancer cells back to normal</p>
          <p>Has anti-tumor and anti-inflammatory properties</p>
          <p>Treats cancers, maligment and benign tumors</p>
          <p>
            Is the main formula to clean fire toxin , to limit cancer cell
            growth and spread
          </p>
          <div className="flex gap-2 mt-8 items-center">
            <Button
              disabled={props.count == 0}
              onClick={() => {
                props.action((prev) => prev - 1);
              }}
              className="bg-orange-500 rounded-full w-8 h-8 flex justify-center items-center text-2xl font-bold"
            >
              -
            </Button>
            <div>
              <p>{props.count.toString()}</p>
            </div>
            <Button
              onClick={() => {
                props.action((prev) => prev + 1);
              }}
              className="bg-orange-500 rounded-full w-8 h-8 flex justify-center items-center text-2xl font-bold"
            >
              +
            </Button>

            {props.count > 0 && (
              <Button className="ml-6">₦{10000 * props.count}</Button>
            )}
          </div>
          {props.count > 0 && (
            <Button className="mt-8 text-xl font-semibold">Place Order</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
