import React from "react";
import "./AvailabilityComponent.css";

const AvailabilityComponent: React.FC = () => {
  return (
    <div className="flex items-center gap-2 border border-slate-200 w-fit px-3 rounded-full">
      <div className="rounded-full w-2 h-2 bg-green-500"></div>
      <div className="wrapper">
        <div className="marquee">
          <p className="btnSecondary">Available for hire Available for hire</p>
          <p className="btnSecondary">Available for hire Available for hire</p>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityComponent;
