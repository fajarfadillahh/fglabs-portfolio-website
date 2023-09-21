import Head from "next/head";
import { Typography } from "@material-tailwind/react";

// import components
import Layout from "@/components/Layout";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Creative Portfolio: FGlabs Latest Works</title>
      </Head>

      <Layout>
        <section className="pb-[140px] pt-[180px]">
          <div className="container grid gap-20">
            <div className="flex flex-col items-center text-center">
              <Typography className="mb-4 text-[24px] font-bold text-white">
                Our portfolio
              </Typography>
              <Typography className="max-w-[725px] bg-gradient-to-tr from-pink-500 to-white bg-clip-text text-[56px] font-black leading-[108%] text-transparent">
                Creative Portfolio: FGlabs Latest Works
              </Typography>
            </div>

            <div className="text-white">portfolio card</div>
          </div>
        </section>
      </Layout>
    </>
  );
}
