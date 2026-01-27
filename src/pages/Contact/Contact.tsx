import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

import { ButtonLink } from "@/components/UI/ButtonLink";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-base text-base p-20 text-center">
      <h2 className="text-3xl font-bold mb-8">{t("contact.title")}</h2>

      {/* Email */}
      <ButtonLink
        href="mailto:justa.frankiewicz@gmail.com"
        className="inline-flex items-center justify-center space-x-2 mb-4"
        variant="primary"
      >
        <Mail className="w-5 h-5" />
        <span>{t("contact.email") || "Email Me"}</span>
      </ButtonLink>

      <div className="flex justify-center space-x-4 mt-4 flex-wrap">
        {/* GitHub */}
        <ButtonLink
          href="https://github.com/justynafrankiewicz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2"
          variant="secondary"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </ButtonLink>

        {/* LinkedIn */}
        <ButtonLink
          href="https://www.linkedin.com/in/justyna-frankiewicz/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2"
          variant="secondary"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </ButtonLink>
      </div>
    </section>
  );
};
