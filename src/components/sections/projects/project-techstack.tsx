import { useTheme } from "@/lib/context/theme-context";
import { ProjectQueryResult } from "@/lib/sanity/types";

interface ProjectTechStackProps {
  projectId: ProjectQueryResult["id"];
  techStack: ProjectQueryResult["techStack"];
}

const ProjectTechStack = (props: ProjectTechStackProps) => {
  const { techStack = [], projectId } = props;

  const { isDark } = useTheme();

  return (
    <div>
      <div className="mb-4">
        <h1>Tech stack:</h1>
      </div>
      <div className="flex flex-wrap gap-2">
        {techStack.map((stack) => (
          <div className="nes-badge !mb-0" key={`${projectId}_${stack.title}`}>
            <span
              className={`${!isDark ? "is-dark" : "is-warning"} nes-text text-xs`}
            >
              {stack.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechStack;
