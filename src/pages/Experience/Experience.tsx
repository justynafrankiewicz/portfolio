import { useTranslation } from "react-i18next";

import { EducationItem } from "./EducationItem";
import { JobItem } from "./JobItem";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="bg-base text-base px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("experience.title")}
        </h2>

        {/* EDUCATION */}
        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-semibold mb-8 tracking-wide">
            {t("experience.education")}
          </h3>

          <div className="space-y-6">
            <EducationItem
              title={t("experience.educationItems.agh")}
              subtitle={t("experience.educationItems.bscGeoinformatics")}
              period="2019 – 2022"
            />
            <EducationItem
              title={t("experience.educationItems.agh")}
              subtitle={t("experience.educationItems.mscAppliedGeophysics")}
              period="2019 – 2020"
            />
            <EducationItem
              title={t("experience.educationItems.agh")}
              subtitle={t("experience.educationItems.bscGeophysics")}
              period="2015 – 2019"
            />
          </div>
        </div>

        {/* JOB EXPERIENCE */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 tracking-wide">
            {t("experience.job")}
          </h3>

          <div className="space-y-10">
            <JobItem
              company="Apriside Sp. z o.o."
              roles={[
                {
                  title: "FE Developer (React, TypeScript)",
                  period: `03.2023 – ${t("experience.present")}`,
                },
                {
                  title: "Junior BE Developer (PHP, Yii2)",
                  period: "12.2022 – 03.2023",
                },
              ]}
              description={
                t("experience.jobs.apriside.description", {
                  returnObjects: true,
                }) as string[]
              }
            />

            <JobItem
              company="IDEO Sp. z o.o."
              roles={[
                {
                  title: "Web Developer Intern (PHP, Laravel)",
                  period: "10.2022",
                },
              ]}
              description={
                t("experience.jobs.ideo.description", {
                  returnObjects: true,
                }) as string[]
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
