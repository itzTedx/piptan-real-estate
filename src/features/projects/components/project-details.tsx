import Image from "next/image";

interface ProjectDetailsProps {
  image: string;
}

export const ProjectDetails = ({ image }: ProjectDetailsProps) => {
  return (
    <div className="grid grid-cols-12 gap-12 pt-20">
      <div className="col-span-5">
        <h2 className="mb-6 text-4xl">
          More Details about Nova Pearl Residences
        </h2>
        <div className="space-y-3 text-xl leading-relaxed">
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
      <div className="bg-muted relative col-span-7 h-full w-full overflow-hidden rounded-sm border">
        <Image
          src={image}
          fill
          alt="Nova Pearl Residences Interior"
          className="object-cover"
        />
      </div>
    </div>
  );
};
