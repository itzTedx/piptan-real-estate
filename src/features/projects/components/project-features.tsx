import UnderlineToBackground from "@/components/animation/line-to-background";

interface ProjectFeaturesProps {
  features?: string[];
}

export const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  return (
    features && (
      <section className="py-12 md:py-16 lg:py-20" aria-label="Key Features">
        <h3 className="mb-4 text-2xl md:mb-5 md:text-2xl lg:mb-6 lg:text-3xl">
          Key Features
        </h3>
        <ul
          className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 md:gap-x-6"
          role="list"
        >
          {features.map((feature, index) => (
            <li
              key={index}
              className="hover:border-muted-foreground flex w-full items-center gap-2 text-lg transition duration-300 md:py-3 md:text-xl lg:text-2xl"
            >
              <span className="sr-only">Feature {index + 1}:</span>
              <UnderlineToBackground
                label={feature}
                targetTextColor="#FFD9DB"
                className="w-full cursor-pointer py-2"
              />
            </li>
          ))}
        </ul>
      </section>
    )
  );
};
