interface ProjectFeaturesProps {
  features: string[];
}

export const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  return (
    <section className="py-20">
      <h3 className="mb-6 text-3xl">Key Features</h3>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="hover:border-muted-foreground flex items-center gap-2 border-b py-3 text-2xl transition duration-300"
          >
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
};
