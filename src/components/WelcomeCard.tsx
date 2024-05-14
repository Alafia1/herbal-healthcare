import Image from "next/image";
import React from "react";

type Props = {};

const WelcomeCard = (props: Props) => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-10 mt-6 md:px-20 py-4 px-2">
      <div className="flex-1 flex justify-center items-center">
        <Image src="/images/image.jpg" width={400} height={400} alt="image" />
      </div>
      <div className="flex-1">
        <h2 className="font-semibold text-xl text-orange-500">
          Revolutionary Breakthrough: The Ultimate Natural Cancer Solution
        </h2>
        <p>
          Are you or a loved one seeking a natural and effective way to combat
          cancer? Look no further! Our revolutionary line of natural products
          and supplements offers a comprehensive approach to support your body’s
          fight against cancer and make you cancer free. With a deep
          understanding of the power of nature and the latest scientific
          advancements, we have created a unique range of solutions that can put
          an end to your cancer issues and help you on your journey toward total
          wellness.
        </p>
        <p>
          <span className="font-bold text-orange-500">Oral Immunotherapy:</span>{" "}
          Boosting the immune system to fight Cancer by taking drugs orally.
        </p>
        <p>
          This Treatment is{" "}
          <span className="font-bold text-orange-500">
            Traditional Chinese Medicine
          </span>{" "}
          and has existed for many years in the treatment of Cancer worldwide.
        </p>
      </div>
    </div>
  );
};

export default WelcomeCard;
