import { MeetingMinComponent } from "@/components/meeting/meeting";
import { GetMeetings } from "@/lib/meeting";

export default async function Page() {
  const meetings = await GetMeetings();
  return (
    <main className="min-h-screen">
      <p className="text-primary text-4xl mb-8">Upcoming Events</p>
      <div className="flex flex-wrap">
        {meetings
          .filter((x) => x.startDateTime > new Date())
          .map((meeting) => (
            <div key={meeting.id} className="mr-5 mb-5">
              <MeetingMinComponent meeting={meeting} />
            </div>
          ))}
      </div>

      <p className="text-primary text-4xl mb-8">Past Events</p>
      <div className="flex flex-wrap">
        {meetings
          .filter((x) => x.startDateTime < new Date())
          .map((meeting) => (
            <div key={meeting.id} className="mr-5 mb-5">
              <MeetingMinComponent meeting={meeting} />
            </div>
          ))}
      </div>
    </main>
  );
}
