import useScrollPercentage from "@/app/hooks/useScrollPercentage";
import Image from "next/image";
import { useState, useRef } from "react";

const IMAGES = [
  "/computer/computer_animated_idle.gif",
  "/computer/computer_animated_typing.gif",
];

const NavbarComputer = () => {
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
    <div>
      <Image
        src={currentImage}
        width={48}
        height={48}
        alt="A fancy pixelated computer"
      />
    </div>
  );
};

export default NavbarComputer;
