import { Image, Input } from "@nextui-org/react";
import { FiMenu } from "react-icons/fi";
import NextImage from "next/image";

export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const Nav = () => {
  const logo = "/logo.svg";
  return (
    <div className="w-full pl-1 md:pl-4 flex items-center justify-evenly border-b py-2 md:py-7">
      <div className="w-full md:w-1/3 flex items-center justify-between md:justify-normal">
        <div>
          <Image
            alt="chart Image"
            as={NextImage}
            src={logo}
            width={60}
            height={60}
          />
        </div>
        <div className="text-2xl md:text-4xl text-slate-800 font-bold font-inter md:pl-8 ">
          Investing Ideas
        </div>
        <div className="pr-2 md:hidden">
          <FiMenu />
        </div>
      </div>
      <div className="hidden md:w-1/3 md:flex md:justify-evenly text-sky-600">
        <p className="cursor-pointer">Ultime Notizie</p>
        <p className="cursor-pointer">Blog</p>
        <p className="cursor-pointer">Contatti</p>
      </div>

      <div className="hidden md:flex md:justify-end md:pr-8">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem]",
            mainWrapper: "h-full",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Cerca per ticker..."
          size="lg"
          startContent={<SearchIcon size={22} />}
          type="search"
        />
      </div>
    </div>
  );
};

export default Nav;
