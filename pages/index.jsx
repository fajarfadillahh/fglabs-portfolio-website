import Head from "next/head";
import { Typography } from "@material-tailwind/react";

// import components
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Welcome to FGlabs. - Making ideas realize with technology and
          creativity
        </title>
      </Head>

      <Layout>
        <section className="container">
          <span className="text-white">Homepage</span>
        </section>
      </Layout>
    </>
  );
}
