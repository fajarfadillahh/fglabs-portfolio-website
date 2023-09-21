import Head from "next/head";
import { Typography } from "@material-tailwind/react";

// import components
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>FGlabs. - Welcome to the jungle</title>
      </Head>

      <Layout>
        <section className="container bg-pink-500 text-center">
          <Typography variant="h5" className="font-bold text-white">
            Homepage
          </Typography>
        </section>
      </Layout>
    </>
  );
}
