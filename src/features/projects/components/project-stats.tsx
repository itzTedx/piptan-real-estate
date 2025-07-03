import { AnimatedButton } from "@/components/ui/animated-button";

import { Stat } from "../../../../sanity.types";

interface Stats {
  price?: string;
  bedrooms?: string;
  furnished?: boolean;
  area?: number;
  completionDate?: string;
  otherStats?: Array<
    {
      _key: string;
    } & Stat
  >;
}

interface ProjectStatsProps {
  stats: Stats | null;
  description: string | null;
}

export const ProjectStats = ({ stats, description }: ProjectStatsProps) => {
  return (
    <section
      className="mb-20 grid gap-12 md:grid-cols-2 md:gap-4"
      aria-label="Project Statistics Section"
    >
      {stats && (
        <div>
          <h2 className="sr-only">Project Statistics</h2>
          <dl
            className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3"
            aria-label="Project Key Statistics"
          >
            <div>
              <dd
                className="text-primary mb-2 text-4xl font-medium transition-transform duration-300 group-hover:scale-110"
                title={stats.price}
                aria-label={`Starting Price: ${stats.price} AED`}
              >
                {stats.price}
              </dd>
              <dt className="text-muted-foreground">Starting Price (AED)</dt>
            </div>
            <div>
              <dd
                className="mb-2 text-4xl font-medium transition-transform duration-300 group-hover:scale-110"
                title={`${stats.bedrooms} bedrooms`}
                aria-label={`Bedrooms: ${stats.bedrooms}`}
              >
                {stats.bedrooms}
              </dd>
              <dt className="text-muted-foreground">Bedrooms</dt>
            </div>

            {stats.area && (
              <div>
                <dd
                  className="mb-2 text-4xl font-medium transition-transform duration-300 group-hover:scale-110"
                  title={`${stats.area} ft2`}
                  aria-label={`Starting Area: ${stats.area} square feet`}
                >
                  {stats.area}
                </dd>
                <dt className="text-muted-foreground">Starting area (ft²)</dt>
              </div>
            )}
            {stats.completionDate && (
              <div>
                <dd
                  className="mb-2 text-4xl font-medium transition-transform duration-300 group-hover:scale-110"
                  title={`Handover: ${stats.completionDate}`}
                  aria-label={`Handover: ${stats.completionDate}`}
                >
                  {stats.completionDate}
                </dd>
                <dt className="text-muted-foreground">Handover</dt>
              </div>
            )}
            {stats.otherStats &&
              stats.otherStats.map((stat) => (
                <div key={stat._key}>
                  <dd
                    className="mb-2 text-4xl font-medium transition-transform duration-300 group-hover:scale-110"
                    title={stat.stat}
                    aria-label={`${stat.label}: ${stat.stat}`}
                  >
                    {stat.stat}
                  </dd>
                  <dt className="text-muted-foreground">{stat.label}</dt>
                </div>
              ))}
          </dl>
        </div>
      )}
      {description && (
        <div className="space-y-3">
          <h2 className="sr-only">Project Description & Consultation</h2>
          <p className="mb-3 text-lg leading-relaxed text-balance sm:text-xl">
            {description}
          </p>

          <AnimatedButton
            text="Get a Free Consultation"
            href="/contact"
            variant="outline"
            aria-label="Get a free consultation about this property"
          />
        </div>
      )}
    </section>
  );
};
