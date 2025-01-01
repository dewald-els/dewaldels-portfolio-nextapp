import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/computer/computer_animated_idle.gif",
  "/computer/computer_animated_typing.gif",
  "/computer/computer_animated_screensaver.gif",
];

const Navbar = () => {
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const [currentImage, setCurrentImage] = useState(IMAGES[0]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentImage(IMAGES[2]);
    }, 3000);

    let ticking = false;

    const handleScroll = () => {
      if (window && !ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          setCurrentImage(IMAGES[1]);
        });

        ticking = true;
      }
    };

    const handleScrollEnd = () => {
      setCurrentImage(IMAGES[0]);
      timeoutRef.current = setTimeout(() => {
        setCurrentImage(IMAGES[2]);
      }, 3000);
    };

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("scrollend", handleScrollEnd);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

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
