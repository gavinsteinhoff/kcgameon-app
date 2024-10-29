import { MeetingComponent } from "@/components/meeting/meeting";
import { GetMeeting } from "@/lib/meeting";

export default async function Page({ params }: { params: { slug: string } }) {
  const meeting = await GetMeeting(params.slug);
  return <MeetingComponent meeting={meeting} />;
}
