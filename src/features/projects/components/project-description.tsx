import { Separator } from "@/components/ui/separator";

interface DescriptionSection {
  title: string;
  content: string;
}

interface ProjectDescriptionProps {
  sections: DescriptionSection[];
}

export const ProjectDescription = ({ sections }: ProjectDescriptionProps) => {
  return (
    <section
      className="py-10 md:py-16 lg:py-20"
      aria-label="Project Description"
    >
      {sections.map((section, index) => (
        <div key={index}>
          <div className="grid grid-cols-12 gap-4 py-8 md:gap-8 md:py-10 lg:gap-12 lg:py-12">
            <h3
              className="col-span-4 text-xl md:col-span-5 md:text-2xl lg:text-3xl"
              id={`section-${index + 1}`}
            >
              {section.title}
            </h3>
            <div className="col-span-8 text-base leading-loose md:col-span-7 md:text-lg lg:text-xl">
              <p aria-labelledby={`section-${index + 1}`}>{section.content}</p>
            </div>
          </div>
          <Separator />
        </div>
      ))}
    </section>
  );
};
