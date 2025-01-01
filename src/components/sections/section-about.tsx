import { useTheme } from "@/lib/context/theme-context";
import { queryAbout } from "@/lib/sanity/requests";
import { AboutQueryResult } from "@/lib/sanity/types";
import { useEffect, useState } from "react";
import ProjectDialogueDivider from "./projects/project-dialogue-divider";

const SectionAbout = () => {
  const { isDark } = useTheme();
  const [about, setAbout] = useState<AboutQueryResult | undefined>();

  useEffect(() => {
    const getAbout = async () => {
      const about = await queryAbout();
      if (about.length) {
        setAbout(about[0]);
      }
    };
    getAbout();
  }, []);

  return (
    <section
      className={`nes-container is-rounded with-title ${isDark ? "is-dark" : ""}`}
    >
      <h3 className="title nes-container is-rounded nes-text is-success">
        About
      </h3>
      {about && (
        <div className="mt-6">
          <div className="mb-6">
            {about.body?.map((bodyItem) => {
              return bodyItem.children?.map((bodyItemChild) => (
                <p className="nes-text mb-4" key={bodyItemChild._key}>
                  {bodyItemChild.text}
                </p>
              ));
            })}
          </div>
          <ProjectDialogueDivider />

          <div className="mt-2">
            <span className="nes-text is-success font-bold mb-6 block">
              My Skills
            </span>

            <div className="flex flex-wrap gap-5 mb-6">
              {about.skills.map((skill) => (
                <div
                  className="nes-badge !m-0"
                  key={`about-skill__${skill.title}`}
                >
                  <span className="nes-text is-dark text-xs">
                    {skill.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-sm">
              <b>Note:</b> This is not an exhaustive list but summarises the
              technologies with which I am most familiar.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionAbout;
