import { Project, ProjectQueryResult } from "@/lib/sanity/types";

interface ProjectDialogueCarouselProps {
  images: ProjectQueryResult["image"];
}

const ProjectDialogueCarousel = (props: ProjectDialogueCarouselProps) => {
  const { images = [] } = props;
  return (
    <div className="nes-container is-rounded !p-0">
      <div className="overflow-hidden">
        <div className="overflow-x-scroll flex gap-4 max-w-[720px] max-h-[340px]">
          {images.map((image, idx) => (
            <img
              className="w-auto max-h-[340px]"
              key={`dialogue_image_${idx}`}
              src={image.url}
              alt={image.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDialogueCarousel;
