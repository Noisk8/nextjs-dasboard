import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FcCommandLine, FcLike, FcLinux , FcGlobe, FcDebian } from "react-icons/fc";



import { GiSkateboard } from "react-icons/gi";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <FcGlobe  size={50} />,
    title: "Dashk8board",
    subTitle: "Visualixaxion",
  },

  {
    path: "/dashboard/counter",
    icon: <FcCommandLine  size={40} />,
    title: "Counter",
    subTitle: "contador de lado del cliente",
  },
  {
    path: "/dashboard/pokemons",
    icon: <FcLinux  size={50}/>,
    title: "Pokemons",
    subTitle: "pokemones",
  },
  {
    path: "/dashboard/favorites",
    icon:  <FcLike   size={40} />,
    title: "Favoritos",
    subTitle: "pokemones",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <Link href="/dashboard/main"><h1 className=" flex items-center text-lg md:text-2xl font-bold text-white">
          <FcDebian size={"50px"} className="mr-2 pb-1 pt-2" />
          Dash<span className="text-blue-500">board</span>
        </h1>
        <p className="text-slate-500 text-sm text-center">
          Un dashboard de un patineto
        </p></Link>
      </div>
      <div id="profile" className="px-6 py-10">
        <Link href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="/uno.jpeg"
              alt="foto"
              width={500}
              height={400}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Noisk8</span>
        </Link>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
