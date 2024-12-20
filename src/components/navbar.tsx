import { Mail, PhoneCall, MapPin } from "react-feather";
import ButtonCustom from "./button";
import { SocialIcon } from "react-social-icons";
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

  return (
    <div className="drawer flex flex-col fixed top-0 z-50 bg-[#ffffff]">
      <div className="hidden lg:block bg-[#f2f2f2]  font-semibold top-header text-[14px] italic text-[#000]/60">
        <div className="container mx-auto py-2 flex items-center justify-between gap-8">
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <PhoneCall size={"18px"} />
              <span> 0973.926.139</span>
            </div>
            <div className="flex gap-2 items-center">
              <Mail size={"18px"} />
              <span> mayxaydungmoi.co@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin size={"18px"} />
            <span>
              Địa chỉ :287 Tây Thạnh, Phường Tây Thạnh, Quận Tân Phú, TP.HCM
            </span>
          </div>
        </div>
      </div>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar w-full  container mx-auto flex justify-between items-center border-b border-[#f1f1f1]">
          <div className="text-[#333333] font-semibold social-links gap-4 ">
            <SocialIcon
              as="a"
              network="facebook"
              href="https://www.facebook.com/mayxaydungmoi"
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
              href="/"
              bgColor="red"
              fgColor="white"
              style={{ width: "18px", height: "18px" }}
              target="_blank"
            />

            <SocialIcon
              as="a"
              network="google"
              href="/"
              bgColor="red"
              fgColor="white"
              style={{ width: "18px", height: "18px" }}
              target="_blank"
            />
          </div>
          <Link to="/">
            <img src="/logo/logo.png" className="h-14 w-30" alt="logo"></img>
          </Link>

          {/* <div className="text-[#333333] font-semibold social-links hidden md:block">
            Dây Đầm Dùi
          </div> */}
          <ButtonCustom
            onClick={() => {
              window.location.href = `tel:0973926139`;
            }}
          >
            Liên Hệ
            <PhoneCall size={"18px"} />
          </ButtonCustom>
          {/* THIS IS OPEN HAMBUGER MENU */}
          {/* <div className="flex-none lg:hidden bg-accent-light rounded-lg ">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div> */}
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
