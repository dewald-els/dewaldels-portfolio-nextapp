import useScrollPercentage from "@/app/hooks/useScrollPercentage";
import { useState } from "react";

interface ScrollToTopProps {
  onClick: () => void;
}

const ScrollToTop = (props: ScrollToTopProps) => {
  const { onClick } = props;
  const [percentage, setPercentage] = useState<number>(0);

  const onScrollChanged = (percent: number) => {
    setPercentage(percent);
  };

  useScrollPercentage(onScrollChanged, 250);

  return (
    <>
      {percentage > 5 && (
        <div className="fixed right-4 bottom-16 z-50">
          <button
            className="nes-btn is-error scroll-btn flex justify-center items-center"
            onClick={onClick}
          >
            <span className="rotate-90">&lt;</span>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;

//() => handleGoToSectionClick(PageSection.Start)
