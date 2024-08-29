import { extractUUIDFromString } from "@/lib/utils";
import React from "react";

type Props = {
  message: {
    role: "assistant" | "user";
    content: string;
    link?: string;
  };
  createdAt?: Date;
};

const Bubble = ({ message, createdAt }: Props) => {
  let d = new Date();
  const image = extractUUIDFromString(message.content);
  return <div>Bubble</div>;
};

export default Bubble;
