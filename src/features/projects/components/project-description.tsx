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
    <section className="py-20" aria-label="Project Description">
      {sections.map((section, index) => (
        <div key={index}>
          <div className="grid grid-cols-12 gap-12 py-12">
            <h3 className="col-span-5 text-3xl" id={`section-${index + 1}`}>
              {section.title}
            </h3>
            <div className="col-span-7 text-xl leading-normal">
              <p aria-labelledby={`section-${index + 1}`}>{section.content}</p>
            </div>
          </div>
          {index < sections.length - 1 && <Separator />}
        </div>
      ))}
    </section>
  );
};
