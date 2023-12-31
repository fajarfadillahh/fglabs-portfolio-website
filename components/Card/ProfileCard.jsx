import Link from "next/link";
import { Avatar, Tooltip, Typography } from "@material-tailwind/react";
import { RiGithubFill, RiInstagramLine, RiGlobalLine } from "react-icons/ri";

export default function ProfileCard({ team }) {
  return (
    <div className="flex w-full max-w-[400px] items-center gap-4">
      <Avatar
        src={team.image}
        alt="profile image"
        className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
      />

      <div className="grid items-start gap-4">
        <div>
          <Typography className="text-[20px] font-extrabold text-white sm:text-[24px]">
            {team.name}
          </Typography>
          <Typography className="font-semibold text-gray-500">
            {team.role}
          </Typography>
        </div>

        <div className="inline-flex items-center gap-3">
          {team.socmed.map((social, index) => {
            return (
              <Tooltip
                content={social.text}
                placement="top"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
                key={index}
              >
                <Link
                  key={index}
                  href={social.path}
                  className="rounded-full bg-[#2E3235] p-1.5 text-[1.5rem] text-gray-500 hover:bg-pink-500 hover:text-white"
                  target="_blank"
                >
                  {social.text == "Github" ? <RiGithubFill /> : null}
                  {social.text == "Instagram" ? <RiInstagramLine /> : null}
                  {social.text == "Website" ? <RiGlobalLine /> : null}
                </Link>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
}
