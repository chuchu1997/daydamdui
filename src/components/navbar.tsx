import ButtonCustom from "./button";
import { Link } from "react-router-dom";

type Props = {};
export const Navbar = ({}: Props) => {
  const menus = [
    {
      title: "Hello World",
      href: "/",
    },
    {
      title: "Hello World 1",
      href: "/",
    },
    {
      title: "Hello World 2 ",
      href: "/",
    },
    {
      title: "Hello World 3",
      href: "/",
    },
  ];
  ///THIS IS TEST DOCKER FILE 11 1!!!
  return (
    <div className="drawer flex flex-col fixed top-0 z-50 bg-[#ffffff]">
      <div className="hidden lg:block bg-[#f2f2f2]  font-semibold top-header text-[14px] italic text-[#000]/60">
        <div className="container mx-auto py-2 flex items-center justify-between gap-8">
          <span>Tổng đài tư vấn: 0973926139</span>
          {/* <div className="text-[#333333] font-semibold social-links gap-4 flex ">
            <SocialIcon
              as="a"
              network="facebook"
              href="https://www.facebook.com/daydamdui"
              bgColor="red"
              fgColor="white"
              style={{ width: "18px", height: "18px" }}
              target="_blank"
            />
            <SocialIcon
              as="a"
              network="youtube"
              href="https://www.youtube.com/@mayxaydungmoi"
              bgColor="red"
              fgColor="white"
              style={{ width: "18px", height: "18px" }}
              target="_blank"
            />

            <SocialIcon
              as="a"
              network="tiktok"
              href="https://www.tiktok.com/@mayxaydungmoi"
              bgColor="red"
              fgColor="white"
              style={{ width: "18px", height: "18px" }}
              target="_blank"
            />

          </div> */}
        </div>
      </div>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar w-full  container mx-auto flex justify-between items-center border-b border-[#f1f1f1]">
          <Link to="/">
            <img src="/logo/logo.png" alt="logo" width={120} height={50}></img>
          </Link>
          <div className="flex gap-8 justify-between items-end overflow-hidden ml-[20px]">
            <img src="/brands/1.jpg" alt="honda" width={140} className=""></img>
            <img src="/brands/2.jpg" alt="panapro" width={140}></img>
            <img
              src="/brands/3.jpg"
              alt="mikasa"
              width={140}
              className="hidden md:block"
            ></img>
            <img
              src="/brands/4.jpg"
              alt="seaoul"
              width={140}
              className="hidden md:block"
            ></img>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-primary-light min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {menus.map((menu, index) => (
            <li key={index}>
              <a href={menu.href}>{menu.title}</a>
            </li>
          ))}
          <li>
            <ButtonCustom>Đặt hàng</ButtonCustom>
          </li>
        </ul>
      </div>
    </div>
  );
};
