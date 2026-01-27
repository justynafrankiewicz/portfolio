import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiEslint,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "react-icons/si";

import type { Skill } from "../../types";

export const techConst: Skill[] = [
  // === Frontend ===
  {
    name: "TypeScript",
    category: "Frontend",
    icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
  },
  {
    name: "React",
    category: "Frontend",
    icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
  },
  // {
  //   name: "React Native",
  //   category: "Frontend",
  //   icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
  // },
  {
    name: "Redux / Redux Saga",
    category: "Frontend",
    icon: <SiRedux className="w-8 h-8 text-[#764ABC]" />,
  },
  {
    name: "Formik",
    category: "Frontend",
    icon: <span className="font-semibold text-sm"></span>,
  },
  {
    name: "Material UI",
    category: "Frontend",
    icon: <span className="font-semibold text-sm"></span>,
  },
  {
    name: "Radix UI",
    category: "Frontend",
    icon: <span className="font-semibold text-sm"></span>,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: <SiBootstrap className="w-8 h-8 text-[#06B6D4]" />,
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" />,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: <SiCss3 className="w-8 h-8 text-[#1572B6]" />,
  },
  {
    name: "SASS / SCSS",
    category: "Frontend",
    icon: <SiSass className="w-8 h-8 text-[#CC6699]" />,
  },

  // === Backend basics ===
  {
    name: "REST API",
    category: "Backend",
    icon: <span className="font-semibold text-sm"></span>,
  },
  {
    name: "PHP (Laravel, Yii2)",
    category: "Backend",
    icon: <SiPhp className="w-8 h-8 text-[#777BB4]" />,
  },
  {
    name: "SQL",
    category: "Backend",
    icon: <SiMysql className="w-8 h-8 text-[#4479A1]" />,
  },

  // === Tools ===
  {
    name: "Vite",
    category: "Tools",
    icon: <SiVite className="w-8 h-8 text-[#646CFF]" />,
  },
  {
    name: "Webpack",
    category: "Tools",
    icon: <SiWebpack className="w-8 h-8 text-[#8DD6F9]" />,
  },
  {
    name: "Git",
    category: "Tools",
    icon: <SiGit className="w-8 h-8 text-[#F05032]" />,
  },
  {
    name: "Docker",
    category: "Tools",
    icon: <SiDocker className="w-8 h-8 text-[#2496ED]" />,
  },
  {
    name: "ESLint",
    category: "Tools",
    icon: <SiEslint className="w-8 h-8 text-[#4B32C3]" />,
  },
  {
    name: "Prettier",
    category: "Tools",
    icon: <SiPrettier className="w-8 h-8 text-[#F7B93E]" />,
  },
];
