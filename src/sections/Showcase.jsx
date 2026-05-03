import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(() => {
    // Animate section fade-in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate each project card
    projectRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: sectionRef });

  // Assign refs dynamically
  const setProjectRef = (el, index) => {
    projectRefs.current[index] = el;
  };

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          {/* LEFT */}
          <div ref={(el) => setProjectRef(el, 0)} className="first-project-wrapper">
            <div className="image-wrapper bg-[#ffefdb]">
              <img src="/images/project1.png" alt="project1" />
            </div>
            <div className="text-content">
              <h2>VehicleAI - Vehicle Breakdown Prediction System</h2>
              <p className="text-white-50 md:text-xl">
                A machine learning–powered vehicle monitoring system that predicts potential breakdowns.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div ref={(el) => setProjectRef(el, 1)} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="project2" />
              </div>
              <h2>CodeScan - AI Code Reviewer</h2>
            </div>

            <div ref={(el) => setProjectRef(el, 2)} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project3.png" alt="project3" />
              </div>
              <h2>Prescripto - Doctor Appointment App</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showcase;