import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import type { Variants } from "framer-motion";

export const AboutMe = () => {
  const { t } = useTranslation();

  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <section id="about" className="bg-base text-base px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("about.title")}
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed opacity-90 text-justify"
        >
          {paragraphs.map((p, index) => (
            <motion.p key={index} variants={item}>
              {p}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
