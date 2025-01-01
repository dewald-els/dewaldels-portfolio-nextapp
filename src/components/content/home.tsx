import { PageSection } from "@/types";
import { useRef, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Progress from "../progress/progress";
import SectionContact from "../sections/section-contact";
import SectionHeader from "../sections/section-header";
import SectionProjects from "../sections/section-projects";
import SectionAbout from "../sections/section-about";
import { useTheme } from "@/lib/context/theme-context";
import light_diamond_pattern from "../../assets/diamond_shape.png";
import dark_diamond_pattern from "../../assets/diamond_shape-dark.png";

const HomeContent = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const startSectionRef = useRef<HTMLElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    if (document) {
      startSectionRef.current = document.body;
    }
  }, []);

  const handleGoToSectionClick = (section: PageSection) => {
    switch (section) {
      case PageSection.Start:
        startSectionRef.current?.scrollIntoView();
        break;
      case PageSection.About:
        aboutSectionRef.current?.scrollIntoView();
        break;
      case PageSection.Projects:
        projectsSectionRef.current?.scrollIntoView();
        break;
      case PageSection.Contact:
        contactSectionRef.current?.scrollIntoView();
        break;
    }
  };

  const bgUrl = isDark ? dark_diamond_pattern.src : light_diamond_pattern.src;

  return (
    <div
      className="pb-48"
      style={{
        background: `url('${bgUrl}') top left repeat`,
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <div className="max-w-4xl mx-auto px-8">
        <SectionHeader onScrollToSectionClick={handleGoToSectionClick} />
        <main>
          <div ref={aboutSectionRef} className="pt-8">
            <SectionAbout />
          </div>

          <div ref={projectsSectionRef} className="pt-8">
            <SectionProjects />
          </div>

          <div ref={contactSectionRef} className="pt-8">
            <SectionContact />
          </div>
        </main>
      </div>
      <div className="fixed right-4 bottom-24 z-50">
        <button
          className="nes-btn is-error scroll-btn flex justify-center items-center"
          onClick={() => handleGoToSectionClick(PageSection.Start)}
        >
          <span className="rotate-90">&lt;</span>
        </button>
      </div>
      <Progress />
    </div>
  );
};

export default HomeContent;
