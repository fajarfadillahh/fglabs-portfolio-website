import Head from "next/head";
import { Typography } from "@material-tailwind/react";
import path from "path";
import { promises as fs } from "fs";

// import components
import Layout from "@/components/Layout";
import ProfileCard from "@/components/Card/ProfileCard";

export default function Team({ teams }) {
  return (
    <>
      <Head>
        <title>FGLabs: Introducing Our Talented Team</title>
      </Head>

      <Layout>
        <section className="relative pb-[140px] pt-[180px]">
          <div className="absolute -left-[150px] top-[320px] h-[300px] w-[300px] rounded-full bg-pink-500 blur-[150px]" />

          <div className="container relative grid gap-20">
            <div className="flex flex-col items-center text-center">
              <Typography className="mb-4 text-[24px] font-bold text-white">
                Solid teams
              </Typography>
              <Typography className="max-w-[725px] bg-gradient-to-tr from-pink-500 to-white bg-clip-text text-[42px] font-black leading-[108%] text-transparent sm:text-[56px]">
                FGLabs: Introducing Our Talented Team
              </Typography>
            </div>

            <div className="mt-5 flex flex-col items-center justify-center gap-20 text-white lg:flex-row">
              {teams.map((team, index) => {
                return <ProfileCard key={index} team={team} />;
              })}
            </div>

            <div className="mt-[100px] inline-flex justify-center justify-self-center border-[2px] border-gray-500 px-6 py-4 font-bold italic text-white">
              Team additions, coming soon...
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "data", "teams.json");
  const file = await fs.readFile(dir);

  const data = JSON.parse(file.toString());

  return {
    props: {
      teams: data,
    },
  };
}
