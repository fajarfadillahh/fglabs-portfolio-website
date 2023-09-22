import { Button, Tooltip, Typography } from "@material-tailwind/react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

export default function PortfolioCard({ portfolio }) {
  return (
    <div className="grid w-full max-w-[544px] gap-8">
      <div className="h-[320px] w-full bg-[#303438]" />

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
          <Typography className="mb-8 line-clamp-2 w-full text-[32px] font-extrabold leading-[112%] text-white">
            {portfolio.title}
          </Typography>
        </Tooltip>

        <Button
          size="md"
          color="pink"
          className="inline-flex items-center gap-2 rounded-none text-base font-bold normal-case"
        >
          Learn more
          <HiOutlineArrowCircleRight className="text-[1.2rem]" />
        </Button>
      </div>
    </div>
  );
}
