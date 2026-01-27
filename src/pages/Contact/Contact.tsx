import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

import { ButtonLink } from "@/components/UI/ButtonLink";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="bg-base text-base flex flex-col justify-center items-center p-8 md:flex-row md:justify-around md:items-center min-h-[calc(100vh-80px)]"
    >
      <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-8">
        <h2 className="text-3xl font-bold mb-8">{t("contact.title")}</h2>

        <ButtonLink
          href="mailto:justa.frankiewicz@gmail.com"
          className="inline-flex w-auto max-w-xs items-center justify-center space-x-2 mb-4 mx-auto"
          variant="primary"
        >
          <Mail className="w-5 h-5" />
          <span>{t("contact.email") || "Email Me"}</span>
        </ButtonLink>

        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-2 sm:space-y-0">
          <ButtonLink
            href="https://github.com/justynafrankiewicz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-auto items-center justify-center space-x-2"
            variant="secondary"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </ButtonLink>

          <ButtonLink
            href="https://www.linkedin.com/in/justyna-frankiewicz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-auto items-center justify-center space-x-2"
            variant="secondary"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </ButtonLink>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src="goat.jpg"
          alt="Illustration"
          className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};
