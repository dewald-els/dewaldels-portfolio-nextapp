import { queryProjects } from "@/lib/sanity/requests";
import { ProjectQueryResult } from "@/lib/sanity/types";
import { useEffect, useState } from "react";
import ProjectList from "./projects/project-list";
import { useTheme } from "@/lib/context/theme-context";

const SectionProjects = () => {
  const { isDark } = useTheme();
  const [projects, setProjects] = useState<ProjectQueryResult[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await queryProjects();
      setProjects(projects);
    };

    getProjects();
  }, []);

  return (
    <>
      <section
        className={`nes-container is-rounded with-title ${isDark ? " is-dark" : ""} mb-8`}
      >
        <h3 className="title nes-text is-primary nes-container is-rounded">
          Projects
        </h3>
        <p>Here are some projects I work on in my spare time.</p>
      </section>

      <div className="pt-8">
        <ProjectList projects={projects} />
      </div>
    </>
  );
};

export default SectionProjects;
