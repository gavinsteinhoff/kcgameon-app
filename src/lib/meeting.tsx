import { Sponsor } from "@/components/meeting/sponsor";

export interface Meeting {
  id: string;
  name: string;
  description: string;
  headerImage: string;
  startDateTime: Date;
  location?: string;
  sponsors: Sponsor[];
}

export async function GetMeetings(): Promise<Meeting[]> {
  let mockSponsors: Sponsor[] = new Array();
  mockSponsors.push({
    id: "1",
    name: "KCGameOn 96",
    url: "https://www.kcgameon.com/kccec/assets/img/sponsor/sample.png",
    imageUrl: "https://www.kcgameon.com/kccec/assets/img/sponsor/sample.png",
    tier: 2,
  });

  mockSponsors.push({
    id: "1",
    name: "KCGameOn 96",
    url: "https://www.kcgameon.com/kccec/assets/img/sponsor/sample.png",
    imageUrl: "https://www.kcgameon.com/kccec/assets/img/sponsor/sample.png",
    tier: 2,
  });

  mockSponsors.push({
    id: "1",
    name: "KCGameOn 96",
    url: "https://www.kcgameon.com/kccec/assets/img/sponsor/sample.png",
    imageUrl: "https://www.kcgameon.com/kccec/assets/img/sponsor/sample.png",
    tier: 1,
  });

  let mocks: Meeting[] = new Array();
  for (let i = 1; i < 10; i++) {
    mocks.push({
      id: i.toString(),
      name: "KCGameOn " + i.toString(),
      description:
        "Join us at Centriq Training for an epic day of gaming, esports, and community fun!<br/><br/>Whether you're a pro or a casual player, KCGameOn has something for everyone—LAN parties, tournaments, VR experiences, tabletop games, and more! Compete, connect, and level up with fellow gamers at one of Kansas City's premier gaming events.<br/><br/>Don't miss the chance to be part of the action!",
      headerImage: "https://www.kcgameon.com/img/banners/kcgo96.png",
      startDateTime: new Date(2023, 11, 23, 12),
      location: "Centriq",
      sponsors: mockSponsors,
    });
  }

  mocks[0].startDateTime = new Date(2024, 11, 23, 12);
  return mocks;
}

export async function GetMeeting(id: string): Promise<Meeting> {
  return (await GetMeetings()).filter((x) => x.id.toString() == id)[0];
}
