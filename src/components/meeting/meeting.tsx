import Image from "next/image";
import Link from "next/link";
import { SponsorListComponent } from "@/components/meeting/sponsor";
import { Meeting } from "@/lib/meeting";
import Card from "@/components/card";

export function MeetingMinComponent({ meeting }: { meeting: Meeting }) {
  const textColor =
    meeting.startDateTime < new Date() ? "text-base-50" : "text-base-20";

  return (
    <Link href={"/events/" + meeting.id}>
      <div className="flex flex-col rounded-2xl w-96 shadow-xl bg-base-90 border-solid border-2 border-base-80 hover:bg-base-70">
        <figure className="flex justify-center items-center rounded-2xl">
          <Image
            className="rounded-t-2xl"
            src={meeting.headerImage}
            alt=""
            width={0}
            height={0}
            sizes="20vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </figure>
        <div className={textColor + " flex flex-col p-4"}>
          <div className="text-2xl font-bold pb-2">{meeting.name}</div>
          <div className="text-lg">
            ``
            {meeting.startDateTime.toLocaleDateString()}
            <br />
            {meeting.location}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function MeetingComponent({ meeting }: { meeting: Meeting }) {
  return (
    <div>
      <Image
        className=""
        src={meeting.headerImage}
        alt=""
        width={0}
        height={0}
        sizes="20vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="m-10">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="text-6xl text-primary font-bold">{meeting.name}</p>
            <p className="text-3xl text-base-30 font-bold">
              {meeting.location}
            </p>
            <p className="text-xl text-base-30 font-bold">
              {meeting.startDateTime.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="border-solid border-2 border-primary mb-8 mt-2" />
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Card title="Description" dangerousText={meeting.description} />
            <Card title="Event Schedule" text="lorem ipsum" />
          </div>
          <div>
            <Card title="Tickets">
              <Link href={meeting.id + "/tickets"}>
                <div className="bg-primary rounded-xl px-3 py-2 text-base-10 w-max text-center">
                  <button>Get Tickets</button>
                </div>
              </Link>
            </Card>
            <Card>
              <SponsorListComponent sponsors={meeting.sponsors} />
            </Card>
            <Card title="Contact" text="Lorem" />
            <Card
              title="Rules and Policies"
              text="As always, KCGameOn is dedicated to providing a harassment-free
                event experience for everyone, regardless of gender, sexual
                orientation, disability, physical appearance, body size, race,
                religion, or affiliation. We do not tolerate harassment of event
                participants in any form. Event participants violating these
                rules may be sanctioned or expelled without refund at the
                discretion of KCGameOn management. If you need to report an
                issue you may do so by visiting the KCGameOn help desk."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
