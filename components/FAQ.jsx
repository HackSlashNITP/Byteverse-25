"use client";
import { Grid2 } from "@mui/material";
import QuestionCard from "./QuestionCard";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    question: "What is the duration of the hackathon?",
    answer:
      "The Byteverse hackathon will last 30 hours, offering an intense yet rewarding experience",
  },
  {
    question: "Who can participate?",
    answer:
      "Byteverse is open to College students currently at any educational institution across the country.",
  },
  {
    question: "How will the hackathon be conducted?",
    answer:
      "The hackathon will be conducted online only, allowing participants to join remotely from anywhere.",
  },
  {
    question: "What domains will the hackathon cover?",
    answer:
      "The Byteverse hackathon will feature four main tracks: Web Development, App Development, Artificial Intelligence, and Web3 - Blockchain. Additionally, there is a special side track focused on Entrepreneurship. Participants are encouraged to innovate within these domains and bring creative solutions to real-world problems.",
  },
  {
    question: "How many participants typically partake in the hackathon?",
    answer:
      "The Byteverse hackathon attracts 1800+ participants from across the country, fostering a diverse and collaborative environment for innovation and problem-solving.",
  },
  {
  question: "What are Prizes for the winning teams?",
    answer:
      "The Byteverse hackathon attracts 1800+ participants from across the country, fostering a diverse and collaborative environment for innovation and problem-solving.",
  },
];
const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="m-4 lg:m-10 ">
      <div className="border-b-4 w-full lg:w-1/2 border-cyan-500 text-center mb-4 pb-1">
        <h1 className="text-2xl lg:text-5xl text-white font-semibold">
          Have Questions?
        </h1>
      </div>
      <Grid2
        container
        className="flex justify-center items-center w-full   mt-2 "
      >
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Grid2>
            <h1 className="text-lg font-semibold text-center">
              Get All your questions answered here
            </h1>
          </Grid2>

          <Grid2 className="max-xl:hidden">
            <Image src="/jellyFishFAQ1.png" alt="" width={2000} height={2000} />
          </Grid2>
        </Grid2>
        <Grid2
          container
          size={{ xs: 12, lg: 6 }}
          className="space-y-2 px-5 py-2 max-xl:bg-[url('/jellyFishFAQ1.png')] bg-cover object-top"
        >
          {data.map((item,index) => (
            <QuestionCard
              item={item}
              key={item.question}
              expanded={expanded === `panel${index}`}
              onChange={handleAccordionChange(`panel${index}`)}
            />
          ))}
        </Grid2>
      </Grid2>
    </div>
  );
};

export default FAQ;
