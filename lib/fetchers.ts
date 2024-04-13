import { unstable_cache } from "next/cache";

const currentTime = Date.now();

let data = {
  domain: "subdomain",
  name: "jeff",
  title: "jeff",
  status: "Making Money",
  lastSeen: currentTime,
  profileIMG: "/profile.png",
  description:
    "Jeff is an affable, thoughtful man in his mid-thirties, known for his keen sense of humor and his genuine interest in the wellbeing of others. By day, he works as a software developer, tackling complex problems with a calm demeanor and a relentless focus. Outside of work, Jeff is an avid hiker and nature photographer, often found exploring remote trails with his camera in tow. His weekends are typically spent either in the serenity of the great outdoors or in the cozy confines of his home, experimenting with new recipes in the kitchen. This blend of intellectual curiosity and a love for the simple pleasures makes Jeff a well-rounded individual who cherishes both solitude and the company of close friends.",
};

// name
// Picture
// backround Gradient
// Chat box (Deep link to discord)

export async function getSiteData(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  return await unstable_cache(
    async () => {
      data.subdomanin = subdomain;
      data.name = subdomain;
      return data;
    },
    [`${domain}-metadata`],
    {
      revalidate: 900,
      tags: [`${domain}-metadata`],
    }
  )();
}
