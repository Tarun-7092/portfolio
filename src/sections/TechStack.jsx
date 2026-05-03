import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I bring to the table"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />

              <div className="tech-card-content">

                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>

                <div className="px-4 w-full text-center">
                  <p className="text-sm md:text-base font-medium">
                    {icon.name}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;