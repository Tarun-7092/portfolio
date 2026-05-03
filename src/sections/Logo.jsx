import React, { memo } from "react";
import { logoIconsList } from "../constants/index.js";

// Memoize each LogoIcon so it doesn't re-render unnecessarily
const LogoIcon = memo(({ icon }) => (
  <div className="flex-none flex-center marquee-item">
    <img
      src={icon.imgPath}
      alt={icon.name}
      className="w-16 h-16 object-contain"
      loading="lazy" // lazy load images for better performance
    />
  </div>
));

const Logo = () => {
  // Double the list for infinite scroll
  const repeatedList = [...logoIconsList, ...logoIconsList];

  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee g-12">
        <div className="marquee-box md:gap-12 gap-5">
          {repeatedList.map((icon, index) => (
            <LogoIcon key={`${icon.name}-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;