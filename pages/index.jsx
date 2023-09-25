import Head from "next/head";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

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
        <section className="relative pb-[130px] pt-[180px]">
          <Image
            src="/assets/bg-accent.svg"
            alt="bgaccent"
            width={1440}
            height={490}
            priority={true}
            className="absolute left-0 top-0"
          />

          <div className="container relative flex flex-col items-center justify-center gap-14">
            <div className="text-center">
              <Typography className="mb-4 text-[24px] font-bold text-white">
                Welcome to FGlabs<span className="text-pink-500">.</span>
              </Typography>
              <Typography className="max-w-[910px] bg-gradient-to-tr from-pink-500 to-white bg-clip-text text-[86px] font-black leading-[108%] text-transparent">
                Making Ideas Realize with Technology and Creativity
              </Typography>
            </div>

            <Button
              size="lg"
              color="pink"
              className="inline-flex items-center gap-2 rounded-none text-base font-bold normal-case"
            >
              See our portfolio
              <HiOutlineArrowCircleRight className="text-[1.2rem]" />
            </Button>
          </div>
        </section>

        <section className="relative flex h-[730px] items-center justify-center overflow-hidden bg-[#25292D]">
          <div className="absolute h-[250px] w-[250px] rounded-full bg-pink-500 blur-[120px]" />

          <div className="container relative grid grid-cols-2 items-center gap-16">
            <div>
              <Typography className="mb-4 text-[24px] font-bold">
                🎨
                <span className="bg-gradient-to-tr from-pink-500 to-white bg-clip-text capitalize text-transparent">
                  design, code, deploy
                </span>
              </Typography>
              <Typography className="mb-6 max-w-[500px] text-[42px] font-black capitalize leading-[112%] text-white">
                Cool design, powerful Code, fast and efficient development
              </Typography>
              <Typography className="mb-8 max-w-[470px] text-base font-semibold leading-[160%] text-gray-500">
                FGLabs prides itself on its combination of inspiring design,
                advanced code, and fast development. We are ready to help you
                bring your ideas to the digital world in cool style.
              </Typography>
              <Button
                size="lg"
                color="pink"
                className="inline-flex items-center gap-2 rounded-none text-base font-bold normal-case"
              >
                Read more
                <HiOutlineArrowCircleRight className="text-[1.2rem]" />
              </Button>
            </div>

            <Image
              src="/assets/image-1.png"
              alt="image"
              width={580}
              height={430}
              priority={true}
            />
          </div>
        </section>

        <section className="relative flex h-[730px] items-center justify-center">
          <div className="absolute -left-[175px] bottom-0 h-[250px] w-[250px] rounded-full bg-pink-500 blur-[120px]" />

          <div className="container relative grid grid-cols-2 items-center gap-16">
            <div className="h-[400px] w-[544px] bg-[#303438]" />

            <div className="justify-self-end">
              <Typography className="mb-4 text-[24px] font-bold">
                🚀
                <span className="bg-gradient-to-tr from-pink-500 to-white bg-clip-text capitalize text-transparent">
                  fast, advanced, clean
                </span>
              </Typography>
              <Typography className="mb-6 max-w-[500px] text-[42px] font-black capitalize leading-[112%] text-white">
                Fast Technology, Advanced Code, and Clean Organization
              </Typography>
              <Typography className="mb-8 max-w-[490px] text-base font-semibold leading-[160%] text-gray-500">
                We combine speed of execution, advanced technical expertise, and
                a focus on clean coding to create digital products that not only
                run smoothly but can also be easily developed and maintained.
              </Typography>
              <Button
                size="lg"
                color="pink"
                className="inline-flex items-center gap-2 rounded-none text-base font-bold normal-case"
              >
                Read more
                <HiOutlineArrowCircleRight className="text-[1.2rem]" />
              </Button>
            </div>
          </div>
        </section>

        <section className="pb-[140px]">
          <div className="container flex h-[380px] flex-col items-center justify-center gap-8 bg-pink-500">
            <Typography className="max-w-[450px] text-center text-[42px] font-black capitalize leading-[112%] text-white">
              Start creating a cool website with us
            </Typography>
            <Button
              size="lg"
              color="white"
              className="inline-flex items-center gap-2 rounded-none text-base font-bold normal-case text-pink-500"
            >
              Contact us
              <HiOutlineArrowCircleRight className="text-[1.2rem]" />
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
}
