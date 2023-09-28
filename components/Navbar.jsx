import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

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
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setStickyNavbar(true);
      } else {
        setStickyNavbar(false);
      }
    });
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 mx-auto max-w-[1440px] ${
        stickyNavbar ? "bg-gray-950/30 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
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

        <div
          className={`fixed right-[6%] top-24 flex w-[260px] origin-top-right flex-col gap-8 rounded-md bg-gray-800 px-7 py-8 transition md:static md:inset-0 md:w-auto md:scale-100 md:flex-row md:gap-12 md:bg-transparent md:p-0 ${
            navbarOpen ? "scale-100" : "scale-0"
          }`}
        >
          <ul className="flex flex-col gap-6 md:flex-row md:items-center">
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
            className="w-full rounded-md text-base font-bold normal-case md:w-auto"
          >
            Contact us
          </Button>
        </div>

        <div
          className="cursor-pointer rounded-md p-1 text-[1.3rem] text-white hover:bg-gray-800 md:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <HiOutlineMenuAlt2 />
        </div>
      </div>
    </nav>
  );
}
