import Image from "next/image";

interface Props {
  data: {
    image: string;
    tag: string;
    date: string;
    title: string;
    description: string;
  };
}

export const InsightCard = ({ data }: Props) => {
  return (
    <div className="bg-muted h-full overflow-hidden rounded-md">
      <div className="relative aspect-5/3 overflow-hidden">
        <Image src={data.image} alt="" fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2">
            <div className="bg-foreground size-1.5 rounded-full" />
            {data.tag}
          </span>
          <div>{data.date}</div>
        </div>
        <h3 className="font-jaguar mb-2 text-2xl">{data.title}</h3>
        <p className="text-lg">{data.description}</p>
      </div>
    </div>
  );
};
