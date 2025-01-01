import { ProjectQueryResult } from "@/lib/sanity/types";

interface ProjectLinksProps {
  projectId: string;
  projectLinks: ProjectQueryResult["links"];
}
const ProjectLinks = (props: ProjectLinksProps) => {
  const { projectLinks = [], projectId } = props;
  return (
    <div className="gap-4">
      <div className="mb-4">
        <h4>Project links</h4>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {projectLinks.map((link) => (
          <a
            role="button"
            href={link.link}
            target="_blank"
            key={`${projectId}_${link.linkText}`}
            className="nes-btn is-success"
          >
            {link.linkText}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectLinks;
