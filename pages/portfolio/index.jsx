import Head from "next/head";
import { Typography } from "@material-tailwind/react";

// import components
import Layout from "@/components/Layout";
import PortfolioCard from "@/components/Card/PortfolioCard";

// import data
import data from "@/data";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Creative Portfolio: FGlabs Latest Works</title>
      </Head>

      <Layout>
        <section className="relative pb-[140px] pt-[180px]">
          <div className="absolute -left-[150px] top-[320px] h-[300px] w-[300px] rounded-full bg-pink-500 blur-[150px]" />

          <div className="container relative grid gap-20">
            <div className="flex flex-col items-center text-center">
              <Typography className="mb-4 text-[24px] font-bold text-white">
                Our portfolio
              </Typography>
              <Typography className="max-w-[725px] bg-gradient-to-tr from-pink-500 to-white bg-clip-text text-[56px] font-black leading-[108%] text-transparent">
                Creative Portfolio: FGlabs Latest Works
              </Typography>
            </div>

            <div className="grid grid-cols-2 items-start gap-8">
              {data.map((portfolio, index) => {
                return <PortfolioCard key={index} portfolio={portfolio} />;
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
