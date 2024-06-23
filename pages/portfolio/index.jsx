import Head from "next/head";
import { Typography } from "@material-tailwind/react";
import path from "path";
import { promises as fs } from "fs";

// import components
import Layout from "@/components/Layout";
import PortfolioCard from "@/components/Card/PortfolioCard";

export default function Portfolio({ data }) {
  return (
    <>
      <Head>
        <title>Creative Portfolio: FGLabs Latest Works</title>
      </Head>

      <Layout>
        <section className="relative pb-[140px] pt-[180px]">
          <div className="absolute -left-[150px] top-[320px] h-[300px] w-[300px] rounded-full bg-pink-500 blur-[150px]" />

          <div className="container relative grid gap-20">
            <div className="flex flex-col items-center text-center">
              <Typography className="mb-4 text-[24px] font-bold text-white">
                Our portfolio
              </Typography>
              <Typography className="max-w-[725px] bg-gradient-to-tr from-pink-500 to-white bg-clip-text text-[42px] font-black leading-[108%] text-transparent sm:text-[56px]">
                Creative Portfolio: FGLabs Latest Works
              </Typography>
            </div>

            <div className="grid justify-center gap-10 lg:grid-cols-2 lg:items-start lg:gap-y-16">
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

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "data", "index.json");
  const file = await fs.readFile(dir);

  const data = JSON.parse(file.toString());

  return {
    props: {
      data,
    },
  };
}
