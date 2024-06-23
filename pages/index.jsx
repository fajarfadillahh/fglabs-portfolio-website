import Head from "next/head";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { useRouter } from "next/router";

// import components
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Welcome to FGLabs. - Making ideas realize with technology and
          creativity
        </title>
      </Head>

      <Layout>
        <section className="relative pb-[130px] pt-[180px]">
          {/* accent bg blur circle */}
          <div className="absolute -left-[200px] -top-[200px] h-[450px] w-[450px] rounded-full bg-pink-500 blur-[180px]" />
          <div className="absolute -bottom-[175px] -right-[175px] h-[250px] w-[250px] rounded-full bg-pink-500 blur-[120px]" />

          <div className="container relative flex flex-col items-center justify-center gap-14">
            <div className="text-center">
              <Typography className="mb-4 text-[24px] font-bold text-white">
                Welcome to FGLabs<span className="text-pink-500">.</span>
              </Typography>
              <Typography className="max-w-[910px] bg-gradient-to-tr from-pink-500 to-white bg-clip-text text-[42px] font-black leading-[108%] text-transparent sm:text-[56px] md:text-[76px] lg:text-[86px]">
                Making Ideas Realize with Technology and Creativity
              </Typography>
            </div>

            <Button
              size="lg"
              color="pink"
              className="inline-flex items-center gap-2 rounded-md text-base font-bold normal-case"
              onClick={() => router.push("/portfolio")}
            >
              See our portfolio
              <HiOutlineArrowCircleRight className="text-[1.2rem]" />
            </Button>
          </div>
        </section>

        <section className="relative flex items-center justify-center overflow-hidden bg-[#25292D] py-32 xl:h-[730px] xl:p-0">
          <div className="absolute h-[250px] w-[250px] rounded-full bg-pink-500 blur-[120px]" />

          <div className="container relative grid items-center gap-16 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <Typography className="mb-4 text-[22px] font-bold">
                🎨
                <span className="bg-gradient-to-tr from-pink-500 to-white bg-clip-text capitalize text-transparent">
                  design, code, deploy
                </span>
              </Typography>
              <Typography className="mx-auto mb-6 max-w-[500px] text-[42px] font-black capitalize leading-[112%] text-white">
                Cool design, powerful Code, fast and efficient development
              </Typography>
              <Typography className="mx-auto max-w-[470px] text-base font-semibold leading-[160%] text-gray-500">
                FGLabs prides itself on its combination of inspiring design,
                advanced code, and fast development. We are ready to help you
                bring your ideas to the digital world in cool style.
              </Typography>
            </div>

            <Image
              src="/assets/image-1.png"
              alt="image"
              width={580}
              height={430}
              priority={true}
              className="justify-self-center lg:justify-self-end"
            />
          </div>
        </section>

        <section className="relative flex items-center justify-center py-32 lg:h-[730px] lg:p-0">
          <div className="absolute -left-[175px] bottom-0 h-[250px] w-[250px] rounded-full bg-pink-500 blur-[120px]" />

          <div className="container relative grid items-center gap-16 lg:grid-cols-2">
            <Image
              src="/assets/image-2.png"
              alt="image"
              width={541}
              height={429}
              priority={true}
              className="order-2 justify-self-center lg:-order-1 lg:justify-self-start"
            />

            <div className="text-center lg:justify-self-end lg:text-left">
              <Typography className="mb-4 text-[22px] font-bold">
                🚀
                <span className="bg-gradient-to-tr from-pink-500 to-white bg-clip-text capitalize text-transparent">
                  fast, advanced, clean
                </span>
              </Typography>
              <Typography className="mx-auto mb-6 max-w-[500px] text-[42px] font-black capitalize leading-[112%] text-white">
                Fast Technology, Advanced Code, and Clean Organization
              </Typography>
              <Typography className="mx-auto max-w-[490px] text-base font-semibold leading-[160%] text-gray-500">
                We combine speed of execution, advanced technical expertise, and
                a focus on clean coding to create digital products that not only
                run smoothly but can also be easily developed and maintained.
              </Typography>
            </div>
          </div>
        </section>

        <section className="pb-[140px]">
          <div className="container flex flex-col items-center justify-center gap-8 bg-pink-500 px-6 py-20 md:h-[380px] md:p-0">
            <Typography className="max-w-[450px] text-center text-[28px] font-black capitalize leading-[112%] text-white md:text-[42px]">
              Start creating a cool website with us
            </Typography>
            <Button
              size="lg"
              color="white"
              className="inline-flex items-center gap-2 rounded-md text-base font-bold normal-case text-pink-500"
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
