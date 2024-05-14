import Navbar from "@/components/Navbar";
import ReviewsCard from "@/components/ReviewsCard";
import WelcomeCard from "@/components/WelcomeCard";
import WhyChooseCard from "@/components/WhyChooseCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-green-100 px-8 py-4">
        <Navbar />
        <WelcomeCard />
      </div>
      <div className="bg-green-200 flex flex-col justify-center items-center py-6">
        <Image src="/images/why.png" width={200} height={200} alt="image" />
        <p className="text-2xl font-bold">
          Why should you take Herbal Healthcare Products?
        </p>
      </div>
      <div className="bg-green-100 flex justify-center px-16 gap-2">
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
      <div className="bg-green-100 flex justify-center px-16 gap-2 pt-1">
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
      <div className="bg-green-100 justify-center items-center px-16 gap-2">
        <div className="flex justify-center items-center pt-8">
          <div className="flex flex-1 justify-end relative">
            <Image
              src="/images/leaves1.png"
              width={500}
              height={500}
              alt="image"
            />
            <div className="absolute left-1/3 top-2">
              <p className="text-2xl font-bold">Customers Reviews</p>
            </div>
            <div className="mt-5 absolute top-14 left-0 flex gap-2 w-5/6">
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
                name="Solomon Koffi , Ghana"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
