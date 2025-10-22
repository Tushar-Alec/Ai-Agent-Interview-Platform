import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React from "react";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview ready with Ai</h2>
          <p className="">
            Practice mock interviews with our AI-powered platform and boost your
            confidence for the real deal.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <a href="/interview">Start an Interview</a>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="Image"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
            ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
            ))}
            {/* <p>You have not taken any interview yet</p> */}
        </div>
      </section>
    </>
  );
};

export default page;
