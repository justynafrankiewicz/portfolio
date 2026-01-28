import { X } from "lucide-react";

import * as Dialog from "@radix-ui/react-dialog";

type EducationItemProps = {
  title: string;
  subtitle: string;
  period: string;
  details: string[];
  imageSrc: string;
};

export const EducationItem = ({
  title,
  subtitle,
  period,
  details,
  imageSrc,
}: EducationItemProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className="cursor-pointer rounded-xl border border-gray-200 dark:border-gray-700 p-6 transition hover:border-primary
        hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-4"
        >
          <img
            src={"public/agh.png"}
            alt={"logo"}
            className="w-12 h-12 object-cover flex-shrink-0"
          />

          <div className="flex flex-col md:flex-row md:justify-between flex-1 gap-2">
            <div>
              <p className="font-medium">{title}</p>
              <p className="opacity-80">{subtitle}</p>
            </div>
            <p className="text-sm opacity-60">{period}</p>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn" />

        <Dialog.Content
          className="fixed left-1/2 top-1/2 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white dark:bg-gray-900
            shadow-2xl overflow-hidden animate-scaleIn"
        >
          <div className="h-48 w-full overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 text-gray-700 dark:text-gray-300">
            <p className="text-sm opacity-60 mb-2">{period}</p>

            <h3 className="text-xl font-semibold mb-4">{subtitle}</h3>

            <ul className="list-disc pl-4 space-y-2 text-sm text-justify">
              {details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <Dialog.Close className="absolute top-3 right-3 rounded-md p-1 hover:bg-black/10 dark:hover:bg-white/10">
            <X className="h-5 w-5" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
