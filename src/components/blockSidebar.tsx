import { useState } from "react";
import { AlignLeft, AlignRight } from "react-feather";
import { Link } from "react-router-dom";
const items = [
  // },
  { title: "Chat Zalo", icon: "/zalo.png", href: "http://zalo.me/0973926139" },
  { title: "Facebook", icon: "/facebook.png", href: "https://www.facebook.com/daydamdui" },
  { title: "Tiktok", icon: "/tiktok.png", href: `https://www.tiktok.com/@mayxaydungmoi` },
  { title: "Youtube", icon: "/youtube.png", href: `https://www.youtube.com/@mayxaydungmoi` },
  // { title: "Messager", icon: "/messager.jpg" },
];
const BlockSidebar = () => {
  const [sort, setSort] = useState(true);
  return (
    <div
      className={`sort-dock bg-red fixed right-0 top-40 ${
        sort ? "w-[60px]" : "w-[120px]"
      } px-2 pt-10 pb-4 z-50 bg-accent rounded-md hidden md:flex flex-col gap-4 text-black transition-width duration-500 overflow-hidden`}
    >
      <div
        className="absolute top-2 left-2 text-white cursor-pointer "
        onClick={() => {
          setSort(!sort);
        }}
      >
        {sort ? <AlignRight /> : <AlignLeft />}
      </div>
      {items.map((item, index) => {
        return (
          <Link
            to={item.href}
            key={index}
            className="bg-white p-2 flex flex-col justify-center items-center gap-4 rounded-md cursor-pointer group transition-all duration-400"
          >
            <img
              src={item.icon}
              alt="icon"
              width={35}
              height={35}
              className="group-hover:scale-125 scale-100 transition-all duration-400"
            ></img>
            <p
              className={`${
                sort
                  ? "hidden"
                  : "text-black/80 text-center text-sm group-hover:text-accent "
              }`}
            >
              {item.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default BlockSidebar;
