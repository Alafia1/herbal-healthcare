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
  text: string;
  name: string;
};

const ReviewsCard = (props: Props) => {
  return (
    <Card className="bg-transparent flex-1">
      <CardContent>
        <p className="text-base font-normal text-green-800 mb-2">
          “{props.text}”
        </p>
        <p className="text-lg text-right text-orange-500">{props.name}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewsCard;
