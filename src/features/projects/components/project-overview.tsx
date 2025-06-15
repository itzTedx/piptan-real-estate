import MomentumLines from "@/components/animation/momentum-lines";
import { Badge } from "@/components/ui/badge";

interface ProjectOverviewProps {
  tags: string[];
}

export const ProjectOverview = ({ tags }: ProjectOverviewProps) => {
  return (
    <section className="relative pb-20" aria-label="Project Lifestyle Overview">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
        Unlock Your Dream Lifestyle.
      </h2>
      <div className="pointer-events-none relative z-10 mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 md:mt-8 lg:mt-10">
        <p className="text-primary-foreground text-xl leading-snug sm:text-2xl md:text-4xl">
          Located in Jumeirah Beach Residence, this residence is surrounded by
          the best Dubai has to offer — luxury dining, upscale retail, and
          vibrant entertainment are just minutes away. The neighborhood is
          secure, family-friendly, and perfect for both permanent residents and
          holiday homeowners.
        </p>
        <aside className="self-end md:pl-14">
          <p className="text-muted-foreground mb-3 sm:mb-4">
            Nova Pearl Residences embodies the essence <br /> of refined living,
            offering a luxurious lifestyle.
          </p>
          <nav aria-label="Lifestyle Tags">
            <ul className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
              {tags.map((badge) => (
                <li key={badge}>
                  <Badge
                    variant="outline"
                    className="text-sm sm:text-base md:text-lg lg:text-2xl"
                  >
                    {badge}
                  </Badge>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
      <div className="absolute inset-x-0 inset-y-0 hidden md:block">
        <MomentumLines />
      </div>
    </section>
  );
};
