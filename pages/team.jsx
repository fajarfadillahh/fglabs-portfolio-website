import Head from "next/head";
import { Typography } from "@material-tailwind/react";

// import components
import Layout from "@/components/Layout";

export default function Team() {
  return (
    <>
      <Head>
        <title>FGlabs: Introducing Our Talented Team</title>
      </Head>

      <Layout>
        <section className="relative pb-[140px] pt-[180px]">
          <div className="absolute -left-[150px] top-[320px] h-[300px] w-[300px] rounded-full bg-pink-500 blur-[150px]" />

          <div className="container relative grid gap-20">
            <div className="flex flex-col items-center text-center">
              <Typography className="mb-4 text-[24px] font-bold text-white">
                Solid teams
              </Typography>
              <Typography className="max-w-[725px] bg-gradient-to-tr from-pink-500 to-white bg-clip-text text-[56px] font-black leading-[108%] text-transparent">
                FGlabs: Introducing Our Talented Team
              </Typography>
            </div>

            <div className="mt-5 text-white">team card</div>

            <div className="mt-[100px] inline-flex justify-center justify-self-center border-[2px] border-gray-500 px-6 py-4 font-bold italic text-white">
              Team additions, coming soon...
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
