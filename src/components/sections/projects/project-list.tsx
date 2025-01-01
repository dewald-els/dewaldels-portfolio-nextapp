import { ProjectQueryResult } from "@/lib/sanity/types";
import Image from "next/image";
import { useState } from "react";
import ProjectDialogue from "./project-dialogue";
import { useTheme } from "@/lib/context/theme-context";

interface ProjectListProps {
  projects: ProjectQueryResult[];
}

const ProjectList = (props: ProjectListProps) => {
  const { projects } = props;
  const { isDark } = useTheme();
  const [dialogueProject, setDialogueProject] = useState<
    ProjectQueryResult | undefined
  >();

  const handleProjectClick = (project: ProjectQueryResult) => {
    setDialogueProject(project);
  };

  return (
    <>
      <ul className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <li
            key={project.id}
            className={`nes-container flex flex-col is-rounded !m-0 !p-2 ${isDark ? "is-dark" : ""}`}
          >
            <div className="header">
              <div className="border-b-4 border-black  relative">
                <img src={project.thumbnailUrl} alt={project.title} />
              </div>
              <div className="p-6">
                <span className="font-bold text-lg nes-text is-primary block">
                  {project.title}
                </span>
                <span className="nes-text text-xs">
                  {project.shortDescription}
                </span>
              </div>
            </div>

            <div
              className="flex justify-between items-center mt-auto bottom-0 w-full left-0 px-4 pb-2"
              style={{
                backgroundColor: "var(--background)",
              }}
            >
              <button
                className="nes-btn is-primary"
                onClick={() => handleProjectClick(project)}
              >
                ?
              </button>
              <div className="nes-badge">
                <span className="is-warning text-xs">
                  {project.projectTags[0].title}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ProjectDialogue
        project={dialogueProject}
        onDismiss={() => {
          setDialogueProject(undefined);
        }}
      />
    </>
  );
};

export default ProjectList;
