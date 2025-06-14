import { AnimatedButton } from "@/components/ui/animated-button";

interface Stat {
  stat: string;
  label: string;
}

interface ProjectStatsProps {
  stats: Stat[];
  description: string;
}

export const ProjectStats = ({ stats, description }: ProjectStatsProps) => {
  return (
    <div className="mb-20 grid gap-12 md:grid-cols-2 md:gap-4">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
        {stats.map((milestone, index) => (
          <li key={index}>
            <h3 className="mb-2 text-4xl font-medium transition-transform duration-300 group-hover:scale-110">
              {milestone.stat}
            </h3>
            <p className="text-muted-foreground">{milestone.label}</p>
          </li>
        ))}
      </ul>
      <div>
        <p className="mb-3 text-lg leading-relaxed text-balance sm:text-xl">
          {description}
        </p>
        <AnimatedButton
          text="Get Consultation"
          href="/contact"
          variant="outline"
        />
      </div>
    </div>
  );
};
