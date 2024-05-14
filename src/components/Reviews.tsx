import Image from "next/image";
import React from "react";
import ReviewsCard from "./ReviewsCard";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <div className="bg-green-100 justify-center items-center md:px-16 px-2 gap-2">
      <div className=" flex h-full justify-center items-center pt-8">
        <div className="flex flex-1 justify-end relative">
          <Image
            src="/images/leaves1.png"
            width={500}
            height={500}
            alt="image"
          />
          <div className="absolute md:left-1/3 md:top-2 top-12 w-full">
            <p className="text-2xl font-bold text-center">Customers Reviews</p>
          </div>
          <div className="mt-5  absolute top-14 left-0 flex md:flex-row flex-col gap-2 w-5/6">
            <ReviewsCard
              text="I was diagnosed with cancer, and the news was devastating. I wanted
      to explore all options, including natural remedies. That’s when I
      discovered these incredible natural products. Incorporating them
      into my treatment plan has made a remarkable difference in my
      overall well-being. I feel more energized, my immune system is
      stronger, and I believe they are complementing my conventional
      treatment. I highly recommend these products to anyone fighting
      cancer."
              name="Debrah Mirembe, Uganda"
            />
            <ReviewsCard
              text="As a healthcare professional, I am always cautious about recommending natural products. However, after extensive research, I came across this exceptional line of supplements. I have seen remarkable results in my patients who have incorporated these products into their cancer treatment plans. The science-backed formulations and premium quality ingredients give me confidence in their effectiveness. I wholeheartedly endorse these natural products for anyone seeking additional support during their cancer journey"
              name="Dr. Amahle Johnson, MD, Pretoria"
            />
            <ReviewsCard
              text="After going through the grueling process of chemotherapy, I was looking for ways to support my body’s healing. These natural supplements have been a game-changer for me. They have helped reduce inflammation, boost my immune system, and restore my energy levels. I’m so grateful to have found these products on my journey to recovery"
              name="Solomon Koffi, Ghana"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
