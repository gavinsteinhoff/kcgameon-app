import Image from "next/image";
import Link from "next/link";

export interface Sponsor {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  tier: number;
}

export function SponsorComponent({
  sponsor,
  width,
}: {
  sponsor: Sponsor;
  width: number;
}) {
  return (
    <div className="border-solid border-2 border-base-90 bg-base-70 p-3 rounded-xl w-max">
      <Link href={sponsor.url} target="_">
        <Image
          className="rounded-t-2xl"
          src={sponsor.imageUrl}
          alt=""
          width={width}
          height={0}
        />
      </Link>
    </div>
  );
}

export function SponsorListComponent({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div>
      <p className="text-3xl text-base-10 font-bold mb-3">Champion Sponsors</p>
      <div className="flex flex-row gap-3">
        {sponsors
          .filter((x) => x.tier == 1)
          .map((sponsor) => (
            <SponsorComponent key={sponsor.id} sponsor={sponsor} width={200} />
          ))}
      </div>

      <p className="text-3xl text-base-10 font-bold mb-3 mt-5">Gold Sponsors</p>
      <div className="flex flex-row gap-3">
        {sponsors
          .filter((x) => x.tier == 2)
          .map((sponsor) => (
            <SponsorComponent key={sponsor.id} sponsor={sponsor} width={150} />
          ))}
      </div>
    </div>
  );
}
