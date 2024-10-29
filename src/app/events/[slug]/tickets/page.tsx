import { BuyTicketComponent } from "@/components/meeting/ticket";
import { GetMeeting } from "@/lib/meeting";

export default async function Page({ params }: { params: { slug: string } }) {
  const meeting = await GetMeeting(params.slug);
  return <BuyTicketComponent meeting={meeting} />;
}
