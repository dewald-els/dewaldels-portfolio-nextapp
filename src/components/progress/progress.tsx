"use client";

import useScrollPercentage from "@/app/hooks/useScrollPercentage";
import { useEffect, useState } from "react";

const getProgressClass = (percentage: number) => {
  if (percentage >= 98) {
    return "is-success";
  } else if (percentage > 45) {
    return "is-primary";
  } else if (percentage > 15) {
    return "is-warning";
  } else {
    return "is-error";
  }
};

const Progress = () => {
  const [percentage, setPercentage] = useState(0);

  const onPercentageChange = (percentage: number) => {
    setPercentage(percentage);
  };

  useScrollPercentage(onPercentageChange, 1);
  const progressClass = getProgressClass(percentage);

  return (
    <div className="fixed bottom-0 w-full left-0 right-0 p-4">
      {percentage >= 100 && (
        <section className="message-list finish-bubble">
          <section className="message -left">
            <i className="nes-icon trophy is-large top-6 z-40"></i>
            <div className="nes-balloon from-left">
              <p>
                <span className="nes-text is-success font-bold">Wow!</span>
                <span className="nes-text dark:text-black">
                  You made it to the bottom!
                </span>
              </p>
            </div>
          </section>
        </section>
      )}
      <div
        style={{
          backgroundColor: "var(--background)",
        }}
      >
        <progress
          data-animation="on"
          className={`nes-progress ${progressClass} h-6`}
          style={{
            width: "calc(100% - 8px)",
          }}
          value={percentage}
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default Progress;
