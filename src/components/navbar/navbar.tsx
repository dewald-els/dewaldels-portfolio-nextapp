import useScrollPercentage from "@/app/hooks/useScrollPercentage";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/computer/computer_animated_idle.gif",
  "/computer/computer_animated_typing.gif",
];

const Navbar = () => {
  const [currentImage, setCurrentImage] = useState(IMAGES[0]);
  const currentImageRef = useRef<string>(IMAGES[0]);
  const percentageRef = useRef<number>(0);

  const onScrollChanged = (percent: number) => {
    if (percent === percentageRef.current) {
      setCurrentImage(IMAGES[0]);
    } else {
      percentageRef.current = percent;
      currentImageRef.current = IMAGES[1];
      setCurrentImage(IMAGES[1]);
    }
  };

  useScrollPercentage(onScrollChanged, 125);

  return (
    <nav
      className="flex items-center gap-4 border-b-4 border-gray-200 dark:border-black p-4 sticky top-0 z-50"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <div>
        <Image
          src={currentImage}
          width={48}
          height={48}
          alt="A fancy pixelated computer"
        />
      </div>
      <div>
        <span className="nes-text is-primary text-lg font-bold">
          Dewald Els
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
