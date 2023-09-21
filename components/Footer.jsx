import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] bg-gray-950">
      <div className="container flex h-20 items-center justify-center border-t-[2px] border-gray-800">
        <Typography variant="paragraph" className="font-medium text-white">
          &copy; Copyrights {new Date().getFullYear()}{" "}
          <span className="font-extrabold text-pink-500">FGlabs.</span> -
          Develop with ❤️
        </Typography>
      </div>
    </footer>
  );
}
