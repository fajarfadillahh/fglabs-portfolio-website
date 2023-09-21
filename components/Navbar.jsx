import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";

// navbar link
const navbarLink = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "portfolio",
    path: "/portfolio",
  },
  {
    text: "team",
    path: "/team",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto max-w-[1440px] bg-transparent">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src="/assets/icon.svg"
            alt="icon"
            width={30}
            height={30}
            priority={true}
          />
          <Typography className="text-[24px] font-extrabold text-white">
            FGlabs.
          </Typography>
        </Link>

        <div className="flex items-center gap-12">
          <ul className="inline-flex items-center gap-6">
            {navbarLink.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="font-medium capitalize text-white hover:text-pink-500"
                >
                  {link.text}
                </Link>
              );
            })}
          </ul>

          <Button
            size="lg"
            color="pink"
            className="rounded-none text-base font-bold normal-case"
          >
            Contact us
          </Button>
        </div>
      </div>
    </nav>
  );
}
