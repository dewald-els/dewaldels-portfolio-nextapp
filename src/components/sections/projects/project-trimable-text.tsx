import { useState } from "react";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { ProjectQueryResult } from "@/lib/sanity/types";

interface ProjectTrimableTextProps {
  text: string[];
  maxWordCount?: number;
  body: ProjectQueryResult["body"];
}

interface CreateDisplayTextInput {
  text: string;
  maxWordCount: number;
}
const createTrimmedText = (input: CreateDisplayTextInput) => {
  const { text, maxWordCount } = input;

  const words = text.split(" ");

  if (words.length > maxWordCount) {
    return words.slice(0, maxWordCount).join(" ") + "...";
  }

  return words.join(" ");
};

const ProjectTrimableText = (props: ProjectTrimableTextProps) => {
  const { text = [], maxWordCount = 10, body } = props;

  const [trimText, setTrimText] = useState(true);

  const handleToggleTrimClick = () => {
    setTrimText(!trimText);
  };

  const sourceText = text.join("\n");
  const sourceTextWordCount = sourceText.split(" ").length;

  const trimmedText = createTrimmedText({
    text: text.join("\n"),
    maxWordCount,
  });

  const components: Partial<PortableTextReactComponents> = {
    types: {
      code: (props) => {
        const { language, code } = props.value;
        return (
          <pre data-language={language}>
            <code>{code}</code>
          </pre>
        );
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      {trimText && <div>{trimmedText}</div>}
      {!trimText && (
        <div className="portable-text">
          {body?.map((child) => (
            <PortableText
              key={child._key}
              value={child}
              components={components}
            />
          ))}
        </div>
      )}
      {sourceTextWordCount > maxWordCount && (
        <button className="nes-btn mt-4" onClick={handleToggleTrimClick}>
          <span className="nes-text text-sm">
            {trimText ? "Read more" : "Less"}
          </span>
        </button>
      )}
    </div>
  );
};

export default ProjectTrimableText;
