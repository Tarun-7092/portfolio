import React from "react";
import TitleHeader from "../components/TitleHeader";
import { achievements } from "../constants";
import GlowCard from "../components/GlowCard";

const Achievements = () => {
  return (
    <section id="achievements" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Achievements & Milestones"
          sub="Highlights of my journey in development"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {achievements.map((card, index) => (
            <GlowCard card={card} index={index}>
                  </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;