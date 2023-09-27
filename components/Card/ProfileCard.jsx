import Link from "next/link";
import { Avatar, Tooltip, Typography } from "@material-tailwind/react";

export default function ProfileCard({ team }) {
  return (
    <div className="flex w-full max-w-[400px] items-center gap-4">
      <Avatar src={team.image} alt="profile image" size="xxl" />

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
                placement="top"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
                key={index}
              >
                <Link
                  key={index}
                  href={sosmed.path}
                  className="rounded-full bg-[#2E3235] p-1.5 text-[1.5rem] text-gray-500 hover:bg-pink-500 hover:text-white"
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
