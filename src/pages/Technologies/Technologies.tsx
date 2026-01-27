import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { techConst } from "./techConst";

import type { Skill } from "../../types";

export const Technologies = () => {
  const { t } = useTranslation();

  const groupedSkills = techConst.reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {}
  );

  return (
    <section
      id="technologies"
      className="bg-base text-base px-6 py-20 min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">
        {t("technologies.title")}
      </h2>

      <div className="max-w-5xl mx-auto grid gap-10">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray">{category}</h3>

            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    bg-alt
                    border border-gray-200 dark:border-gray-700
                    text-sm font-medium
                    hover:border-primary
                    hover:shadow-sm
                    transition
                  "
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
