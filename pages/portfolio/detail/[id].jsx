import Head from "next/head";
import { Typography } from "@material-tailwind/react";

// import components
import Layout from "@/components/Layout";

export default function DetailPortfolio() {
  return (
    <>
      <Head>
        <title>Ponic: The Latest Solution in Electronic Polling</title>
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
                  Ponic: The Latest Solution in Electronic Polling
                </Typography>
              </div>

              <div className="h-[500px] w-full bg-[#303438]" />
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
                  Ponic is an innovative electronic voting platform that changes
                  the way we participate in decision-making processes. Built
                  with a vision to bring people closer to their leaders and
                  encourage active engagement in digital democracy, Ponic brings
                  polls and surveys into the palm of your hand.
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
                </div>

                <div>
                  <Typography
                    color="white"
                    className="mb-3 text-[28px] font-bold"
                  >
                    Deployments
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
