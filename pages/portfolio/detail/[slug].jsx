import Head from "next/head";
import { Typography } from "@material-tailwind/react";

// import components
import Layout from "@/components/Layout";
import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

export default function DetailPortfolio({ data }) {
  const { content } = data;

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <Layout>
        <section className="relative pb-[140px] pt-[180px]">
          <div className="absolute -right-[150px] top-[725px] h-[300px] w-[300px] rounded-full bg-pink-500 blur-[150px]" />

          <div className="container relative grid gap-16">
            <div className="flex flex-col items-center gap-12">
              <div className="text-center">
                <Typography className="mb-3 text-[24px] font-bold text-white">
                  Details portfolio
                </Typography>
                <Typography className="max-w-[725px] bg-gradient-to-tr from-pink-500 to-white bg-clip-text text-[56px] font-black leading-[108%] text-transparent">
                  {data.title}
                </Typography>
              </div>

              <div className="h-[500px] w-full">
                <Image
                  src={data.image}
                  width={1920}
                  height={1080}
                  alt={`image ${data.title}`}
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="mx-20 flex items-start justify-between gap-32">
              <div>
                <Typography
                  color="white"
                  className="mb-3 text-[28px] font-bold"
                >
                  Overview
                </Typography>
                <Typography className="max-w-[545px] font-semibold leading-[160%] text-gray-500">
                  {content.overview}
                </Typography>
                <Typography
                  color="white"
                  className="mb-3 text-[28px] font-bold"
                >
                  Main Feature
                </Typography>
                <div className="max-w-[545px] font-semibold leading-[160%] text-gray-500">
                  <ol className="list-inside list-decimal">
                    {content.features.map((feature, index) => {
                      return <li key={index}>{feature}</li>;
                    })}
                  </ol>
                </div>
                <Typography
                  color="white"
                  className="mb-3 text-[28px] font-bold"
                >
                  Our Mission
                </Typography>
                <Typography className="max-w-[545px] font-semibold leading-[160%] text-gray-500">
                  {content.mission}
                </Typography>
              </div>

              <div className="grid justify-start gap-12">
                <div>
                  <Typography
                    color="white"
                    className="mb-3 text-[28px] font-bold"
                  >
                    Technologies
                  </Typography>
                  <div className="flex w-full justify-around">
                    {data.techs.map((tech, index) => {
                      return (
                        <Image
                          src={tech.url}
                          key={index}
                          width={30}
                          height={30}
                          alt={`image ${tech.name}`}
                        />
                      );
                    })}
                  </div>
                </div>

                <div>
                  <Typography
                    color="white"
                    className="mb-3 text-[28px] font-bold"
                  >
                    Deployments
                  </Typography>
                  <div className="text-pink-500">
                    {data.deployments.map((deployment, index) => {
                      return (
                        <div key={index}>
                          <Link href={deployment} target="_blank">
                            {deployment}
                          </Link>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "data", "index.json");
  const file = await fs.readFile(dir);

  const data = JSON.parse(file.toString());

  const paths = data.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const dir = path.join(process.cwd(), "data", "index.json");
  const file = await fs.readFile(dir);

  const data = JSON.parse(file.toString());

  return {
    props: {
      data: data.find((element) => element.slug == slug),
    },
  };
}
