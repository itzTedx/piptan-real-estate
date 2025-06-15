import Image from "next/image";

interface ProjectDetailsProps {
  image: string;
}

export const ProjectDetails = ({ image }: ProjectDetailsProps) => {
  return (
    <div className="grid gap-6 pt-12 md:grid-cols-12 md:gap-8 lg:gap-12 lg:pt-20">
      <div className="md:col-span-5">
        <h2 className="mb-4 text-2xl font-semibold sm:text-3xl md:mb-6 md:text-4xl">
          More Details about Nova Pearl Residences
        </h2>
        <div className="space-y-3 text-base leading-relaxed sm:text-lg md:text-xl">
          <p>
            Discover your next chapter in one of Dubai&apos;s most iconic
            addresses. This 3-bedroom luxury apartment at Nova Pearl Residences
            offers a harmonious blend of coastal tranquility and urban
            sophistication. Wake up to breathtaking views of the Arabian Gulf
            and unwind in spacious interiors adorned with modern finishes, smart
            home technology, and bespoke detailing.{" "}
          </p>
          <p>
            Crafted for discerning homeowners and savvy investors alike, this
            residence stands as a symbol of refined living, with private access
            to the beach and five-star amenities that cater to your every need.
          </p>
        </div>
      </div>
      <div className="bg-muted relative aspect-4/3 w-full overflow-hidden rounded-sm border sm:aspect-5/4 md:col-span-7 md:aspect-auto">
        <Image
          src={image}
          fill
          alt="Nova Pearl Residences Interior"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </div>
  );
};
