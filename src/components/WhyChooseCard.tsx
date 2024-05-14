import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  img: string;
  text: string;
  title: string;
};

const WhyChooseCard = (props: Props) => {
  return (
    <div className="flex-1">
      <Card className="bg-green-200">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-start w-64 h-64">
              <Image
                src={props.img}
                width={250}
                height={400}
                alt="image"
                className="rounded-lg"
              />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold text-orange-500">{props.title}</p>
          <p>{props.text}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhyChooseCard;
