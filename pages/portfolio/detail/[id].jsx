import Head from "next/head";

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
          <div className="container">Detail page</div>
        </section>
      </Layout>
    </>
  );
}
