import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Layout } from "@/components/Layout";
import { ButtonLink } from "@/components/UI/ButtonLink";

import { AboutMe } from "../AboutMe/AboutMe";
import { Contact } from "../Contact/Contact";
import { Experience } from "../Experience/Experience";
import { Technologies } from "../Technologies/Technologies";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section id="home" className="bg-base text-base px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT – PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="/me.jpg"
                alt="Profile photo"
                className="w-72 h-72 md:w-[360px] md:h-[360px] rounded-3xl object-cover shadow-xl transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* RIGHT – TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-center md:text-left max-w-xl"
          >
            <p className="text-sm uppercase tracking-wide opacity-60 mb-2">
              {t("home.title")}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Justyna Frankiewicz
            </h1>

            <p className="text-xl md:text-2xl mt-4 mb-6 opacity-80">
              {t("home.subtitle")}
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray opacity-90 mb-10">
              {t("home.aboutShort")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <ButtonLink href="/JustynaFrankiewiczCV.pdf" download>
                {t("home.downloadCv")}
              </ButtonLink>

              <ButtonLink href="#contact" variant="secondary">
                {t("contact.title")}
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutMe />
      <Experience />
      <Technologies />
      <Contact />
    </Layout>
  );
};
