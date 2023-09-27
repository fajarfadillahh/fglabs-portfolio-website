import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { Button, Tooltip, Typography } from "@material-tailwind/react";

export default function PortfolioCard({ portfolio }) {
  const router = useRouter();

  return (
    <div className="grid w-full max-w-[544px] gap-8">
      <div className="h-[320px] w-full">
        <Image
          src={`${portfolio.image}`}
          width={1920}
          height={1080}
          className="h-full w-full object-contain"
          alt={`image ${portfolio.title}`}
        />
      </div>

      <div>
        <div className="mb-4 inline-flex items-center gap-3">
          {portfolio.tags.map((tag) => {
            return (
              <Typography
                key={tag.value}
                className="rounded-full bg-[#2E3235] px-4 py-1.5 text-[14px] font-semibold text-gray-500"
              >
                {tag.name}
              </Typography>
            );
          })}
        </div>

        <Tooltip
          content={
            <div className="max-w-[320px]">
              <Typography color="white" className="font-medium capitalize">
                {portfolio.title}
              </Typography>
            </div>
          }
          placement="top-start"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Link href={`/portfolio/detail/${portfolio.slug}`}>
            <Typography className="mb-8 line-clamp-2 w-full text-[32px] font-extrabold leading-[112%] text-white hover:text-pink-500">
              {portfolio.title}
            </Typography>
          </Link>
        </Tooltip>

        <Button
          size="md"
          color="pink"
          className="inline-flex items-center gap-2 rounded-none text-base font-bold normal-case"
          onClick={() => router.push(`/portfolio/detail/${portfolio.slug}`)}
        >
          Read more
          <HiOutlineArrowCircleRight className="text-[1.2rem]" />
        </Button>
      </div>
    </div>
  );
}
