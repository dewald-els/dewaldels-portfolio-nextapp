import { useTheme } from "@/lib/context/theme-context";

const SectionContact = () => {
  const { isDark } = useTheme();
  return (
    <section
      className={`nes-container is-rounded with-title ${isDark ? "is-dark" : ""}`}
    >
      <h3 className="title nes-text is-warning nes-container is-rounded">
        Contact me
      </h3>

      <div className="flex items-start gap-4 mb-8">
        <div>
          <i className="nes-icon gmail is-large"></i>
        </div>
        <div>
          <p>Drop me an e-mail:</p>
          <a
            target="_blank"
            className="nes-text is-primary underline"
            href="mailto:dewaldifels@gmail.com"
          >
            @gmail.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4 mb-8">
        <div>
          <i className="nes-icon github is-large"></i>
        </div>

        <div>
          <p>Checkout my GitHub:</p>
          <a
            target="_blank"
            className="nes-text is-primary underline"
            href="https://github.com/dewald-els"
          >
            @dewald-els
          </a>
        </div>
      </div>
      <div className="flex items-start gap-4 mb-8">
        <div>
          <i className="nes-icon linkedin is-large"></i>
        </div>
        <div>
          <p>I&apos;m also on LinkedIn: </p>
          <a
            target="_blank"
            className="nes-text is-primary underline"
            href="https://www.linkedin.com/in/dewald-els/"
          >
            @dewald-els
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4 mb-8">
        <div>
          <i className="nes-jp-logo"></i>
        </div>
        <div>
          <p>Checkout my Itch.io profile</p>
          <a
            target="_blank"
            className="nes-text is-primary underline"
            href="https://mrbetamax.itch.io/"
          >
            @mr_betamax
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
