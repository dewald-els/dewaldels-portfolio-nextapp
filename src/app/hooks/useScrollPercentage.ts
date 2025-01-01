import { useEffect, useRef } from "react";

const useScrollPercentage = (
  onPercentageChange: (percent: number) => void,
  debounceTime: number = 250
) => {
  const percentageRef = useRef<number>(0);
  const timer = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollPercentage = getScrollPercentage();
      percentageRef.current = scrollPercentage;

      if (timer.current === null) {
        setTimeout(() => {
          onPercentageChange(percentageRef.current);
          requestAnimationFrame(updateScrollPercentage);
          if (timer.current !== null) {
            clearTimeout(timer.current);
          }
          timer.current = null;
        }, debounceTime);
      }
    };

    const getScrollPercentage = () => {
      return (
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100
      );
    };

    updateScrollPercentage();
  }, []);

  return percentageRef;
};

export default useScrollPercentage;
