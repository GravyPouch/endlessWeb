import { notFound } from "next/navigation";
import { getSiteData } from "@/lib/fetchers";
import Image from "next/image";
import { Tweet } from "@/components/tweets";

export async function generateMetadata({
  params,
}: {
  params: { domain: string; slug: string };
}) {
  const domain = decodeURIComponent(params.domain);
  const slug = decodeURIComponent(params.slug);

  const [data] = await Promise.all([getSiteData(domain)]);
  if (!data) {
    return null;
  }
  const { title, description } = data;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@vercel",
    },
    // Optional: Set canonical URL to custom domain if it exists
    // ...(params.domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) &&
    //   siteData.customDomain && {
    //     alternates: {
    //       canonical: `https://${siteData.customDomain}/${params.slug}`,
    //     },
    //   }),
  };
}

export default async function SitePostPage({
  params,
}: {
  params: { domain: string; slug: string };
}) {
  const domain = decodeURIComponent(params.domain);
  const slug = decodeURIComponent(params.slug);
  const data = await getSiteData(domain);
  console.log([domain, slug, data]);

  const timestamp = data.lastSeen; // Unix timestamp
  const dateObj = new Date(timestamp);

  if (!data) {
    notFound();
  }

  return (
    <div className=" flex flex-col col-auto gap-5">
      <div className=" flex flex-row items-center gap-4 justify-between">
        <div>
          <h1 className=" text-6xl">{data.name}</h1>
          <br />
          <h1>Status Update: {data.status}</h1>
          <h1>Last Seen: {dateObj.toLocaleString()}</h1>
        </div>

        <Image
          alt="profile image"
          src={data.profileIMG}
          width={200}
          height={200}
          className=" rounded-full"
        />
      </div>
      <div>
        <p>{data.description}</p>
      </div>
      <button className=" border-2 p-3">Talk to me</button>
      <h1 className=" text-2xl"> Updates:</h1>
      <Tweet
        title={"hellow world"}
        time={data.lastSeen}
        content={
          "Hey Jeff, check out this amazing deal on flight tickets to Paris! #travel #discount #paris #jeff"
        }
      />
      <Tweet
        title={"hellow world"}
        time={data.lastSeen}
        content={
          "Hey Jeff, check out this amazing deal on flight tickets to Paris! #travel #discount #paris #jeff"
        }
      />
      <Tweet
        title={"hellow world"}
        time={data.lastSeen}
        content={
          "Hey Jeff, check out this amazing deal on flight tickets to Paris! #travel #discount #paris #jeff"
        }
      />
    </div>
  );
}
