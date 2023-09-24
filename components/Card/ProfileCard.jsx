import Image from "next/image";
import Link from "next/link";
import { Tooltip, Typography } from "@material-tailwind/react";

export default function ProfileCard({ team }) {
  return (
    <div className="flex w-full max-w-[380px] items-center gap-4">
      <Image
        src={team.image}
        alt="profile image"
        width={100}
        height={100}
        priority={true}
        className="rounded-full"
      />

      <div className="grid items-start gap-4">
        <div>
          <Typography className="text-[24px] font-extrabold text-white">
            {team.name}
          </Typography>
          <Typography className="font-semibold text-gray-500">
            {team.role}
          </Typography>
        </div>

        <div className="inline-flex items-center gap-3">
          {team.sosmeds.map((sosmed, index) => {
            return (
              <Tooltip
                content={sosmed.text}
                placement="top-center"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Link
                  key={index}
                  href={sosmed.path}
                  className="rounded-full bg-[#2E3235] p-1.5 text-[1.5rem] text-gray-500"
                >
                  {sosmed.icon}
                </Link>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
}
