import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { promises as fs } from "fs";
import { Tooltip, Typography } from "@material-tailwind/react";
import { HiOutlineExternalLink } from "react-icons/hi";

// import components
import Layout from "@/components/Layout";

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
                <Typography className="max-w-[768px] bg-gradient-to-tr from-pink-500 to-white bg-clip-text text-[56px] font-black leading-[108%] text-transparent">
                  {data.title}
                </Typography>
              </div>

              <div className="h-[600px] w-full">
                <Image
                  src={data.image}
                  width={1920}
                  height={1080}
                  alt={`image ${data.title}`}
                  priority={true}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="flex items-start justify-evenly gap-16">
              <div className="grid max-w-[545px] gap-6">
                <div className="grid gap-3">
                  <Typography color="white" className="text-[28px] font-bold">
                    Overview
                  </Typography>

                  <Typography className="font-semibold leading-[160%] text-gray-500">
                    {content.overview}
                  </Typography>
                </div>

                <div className="grid gap-3">
                  <Typography color="white" className="text-[20px] font-bold">
                    Main Feature
                  </Typography>

                  <ol className="ml-5 grid list-decimal gap-1.5 font-semibold leading-[160%] text-gray-500">
                    {content.features.map((feature, index) => {
                      return <li key={index}>{feature}</li>;
                    })}
                  </ol>
                </div>

                <div className="grid gap-3">
                  <Typography color="white" className="text-[20px] font-bold">
                    Our Mission
                  </Typography>

                  <Typography className="font-semibold leading-[160%] text-gray-500">
                    {content.mission}
                  </Typography>
                </div>
              </div>

              <div className="grid justify-start gap-12">
                <div className="grid gap-3">
                  <Typography color="white" className="text-[28px] font-bold">
                    Technologies
                  </Typography>

                  <div className="flex items-center gap-5">
                    {data.techs.map((tech, index) => {
                      return (
                        <Tooltip
                          content={tech.name}
                          placement="top"
                          animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                          }}
                          key={index}
                        >
                          <Image
                            src={tech.url}
                            width={32}
                            height={32}
                            alt={`image ${tech.name}`}
                          />
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-3">
                  <Typography color="white" className="text-[28px] font-bold">
                    Deployments
                  </Typography>

                  <div className="flex flex-col gap-2">
                    {data.deployments.map((deployment, index) => {
                      return (
                        <Link
                          key={index}
                          href={deployment}
                          target="_blank"
                          className="inline-flex items-center gap-1.5 font-semibold text-pink-500"
                        >
                          {deployment}

                          <HiOutlineExternalLink className="rounded-[4px] bg-pink-500/30 p-1 text-[1.5rem] text-pink-500" />
                        </Link>
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
