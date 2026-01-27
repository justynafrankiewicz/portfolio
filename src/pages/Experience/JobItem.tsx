type Role = {
  title: string;
  period: string;
};

type JobItemProps = {
  company: string;
  roles: Role[];
  description: string[];
};

export const JobItem = ({ company, roles, description }: JobItemProps) => (
  <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
    <h4 className="text-lg font-semibold mb-4">{company}</h4>

    <div className="space-y-3 mb-6">
      {roles.map((role) => (
        <div
          key={role.title}
          className="flex flex-col sm:flex-row sm:justify-between"
        >
          <p className="font-medium">{role.title}</p>
          <p className="text-sm opacity-60">{role.period}</p>
        </div>
      ))}
    </div>

    <ul className="list-disc pl-5 space-y-2 opacity-80">
      {description.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);
