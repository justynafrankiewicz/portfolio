type EducationItemProps = {
  title: string;
  subtitle: string;
  period: string;
};

export const EducationItem = ({
  title,
  subtitle,
  period,
}: EducationItemProps) => (
  <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <div className="flex flex-col md:flex-row md:justify-between gap-2">
      <div>
        <p className="font-medium">{title}</p>
        <p className="opacity-80">{subtitle}</p>
      </div>
      <p className="text-sm opacity-60">{period}</p>
    </div>
  </div>
);
