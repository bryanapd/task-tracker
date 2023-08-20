import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

interface BrandProps {
  logo?: string;
  title: string;
  children?: React.ReactNode;
}

interface Routes {
  key: number;
  path: string;
  label: string;
}

interface LinkProps {
  routes: Routes[];
  direction: string;
  children: React.ReactNode;
}

export const AppHeader = ({ children }: HeaderProps): JSX.Element => {
  return (
    <div className="bg-gray-300 w-full py-2">
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};

export const AppSpacer = (): JSX.Element => {
  return <div className="72px" />;
};

export const AppBrand = ({ logo, title }: BrandProps): JSX.Element => (
  <div className="min-h-50px z-999 flex w-full justify-between">
    <Link href="/">
      <div className="cursor-pointer">
        {logo ? (
          <div className="flex items-center">
            <Image height={50} width={100} src={logo} alt={`${title} image`} />
            <h1 className="text-lg font-medium text-white">{title}</h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </Link>
    <div>
      <button className="select-none rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 sm:flex md:hidden">
        Menu
      </button>
    </div>
  </div>
);

export const AppLinks = ({
  routes,
  direction = "row",
  children,
}: LinkProps): JSX.Element => (
  <div
    className={`flex flex-${direction} items-center sm:${
      direction == "column" ? "flex" : "hidden"
    } font-bold md:flex`}
  >
    {routes.map((route, rId) => (
      <Link key={route.path} href={route.path}>
        <button className="select-none rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300">
          {route.label}
        </button>
      </Link>
    ))}
    {children}
  </div>
);
