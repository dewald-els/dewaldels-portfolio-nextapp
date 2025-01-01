import { useTheme } from "@/lib/context/theme-context";
import { PageSection } from "@/types";
import Image from "next/image";

interface SectionHeaderProps {
  onScrollToSectionClick: (section: PageSection) => void;
}
const SectionHeader = (props: SectionHeaderProps) => {
  const { isDark } = useTheme();
  const { onScrollToSectionClick } = props;

  return (
    <header
      className={`flex flex-col items-center justify-center mb-8 !mt-8 !py-4 px-6 pb-12 nes-container is-rounded ${isDark ? "is-dark" : ""}`}
    >
      <div className="flex flex-col items-center gap-4 mb-8">
        <div
          className={`nes-container is-rounded ${isDark ? " is-dark !p-2" : " !p-0"}`}
        >
          <Image
            src={"/me.jpg"}
            width={64}
            height={64}
            alt="Pixel avatar of Dewald Els"
          />
        </div>

        <h2 className="md:text-2xl nes-text is-primary">Portfolio of</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Dewald Els
        </h1>
      </div>

      <div className="inline-flex flex-col gap-4">
        <button
          className="nes-btn w-60"
          onClick={() => onScrollToSectionClick(PageSection.About)}
        >
          About
        </button>
        <button
          className="nes-btn is-primary w-60"
          onClick={() => onScrollToSectionClick(PageSection.Projects)}
        >
          Projects
        </button>
        <button
          className="nes-btn is-warning w-60"
          onClick={() => onScrollToSectionClick(PageSection.Contact)}
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default SectionHeader;
