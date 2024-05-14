"use client";

import Navbar from "@/components/Navbar";
import ProductsList from "@/components/ProductsList";
import Reviews from "@/components/Reviews";
import WelcomeCard from "@/components/WelcomeCard";
import WhyChooseCard from "@/components/WhyChooseCard";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <div className="bg-green-100 px-8 py-4">
        <Navbar />
        <WelcomeCard />
      </div>
      <div className="bg-green-200 flex flex-col justify-center items-center py-6">
        <p className="text-2xl font-bold">Products</p>
      </div>
      <div className="bg-green-100 px-8 py-4">
        <ProductsList count={count} action={setCount} />
      </div>
      <div className="bg-green-200 flex flex-col justify-center items-center py-6">
        <Image src="/images/why.png" width={200} height={200} alt="image" />
        <p className="text-2xl font-bold text-center">
          Why should you take Herbal Healthcare Products?
        </p>
      </div>
      <div className="bg-green-100 flex md:flex-row flex-col justify-center md:px-16 px-2 gap-2">
        <WhyChooseCard
          img={"/images/immune.jpg"}
          text={
            "Strengthening your immune system is crucial when fighting cancer. Our immune-boosting products are packed with powerful antioxidant, vitamins, and minerals to fortify your body’s natural defenses."
          }
          title={"Immune Boosters"}
        />

        <WhyChooseCard
          img={"/images/antioxidant.jpg"}
          text={
            "Oxidative stress can contribute to the development and progression of cancer. Our antioxidant-rich supplements neutralize harmful free radicals, promoting cellular health and reducing the risk of oxidative damage."
          }
          title={"Antioxidant Support"}
        />
        <WhyChooseCard
          img={"/images/inflammatory.jpg"}
          text={
            "Chronic inflammation has been linked to various types of cancer. Our anti-inflammatory products leverage the natural anti-inflammatory properties of botanical extracts and nutrients to support a balanced inflammatory response."
          }
          title={"Anti-Inflammatory Solutions"}
        />
      </div>
      <div className="bg-green-100 flex md:flex-row flex-col justify-center md:px-16 px-2 gap-2 pt-1">
        <WhyChooseCard
          img={"/images/detoxify.jpg"}
          text={
            "Detoxifying the body can optimize its ability to fight cancer. Our detox products are carefully formulated to support the elimination of toxins and promote cellular health."
          }
          title={"Detoxification Support"}
        />

        <WhyChooseCard
          img={"/images/nutrition.png"}
          text={
            "Proper nutrition is vital during cancer treatment. Our range of nutritional supplements that is inclusive in this pack provides essential vitamins, minerals, and nutrients to support overall health and vitality."
          }
          title={"Nutritional Supplements"}
        />
        <WhyChooseCard
          img={"/images/digestion.jpg"}
          text={
            "Oxidative stress can contribute to the development and progression of cancer. Our antioxidant-rich supplements neutralize harmful free radicals, promoting cellular health and reducing the risk of oxidative damage."
          }
          title={"Aids Digestion"}
        />
      </div>
      <div className="bg-green-100">
        <Reviews />
      </div>
    </div>
  );
}
