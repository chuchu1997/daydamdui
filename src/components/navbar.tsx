import { ButtonCustom } from "./button";

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
    <div className="drawer fixed top-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar w-full  container mx-auto flex justify-between">
          <div className="mx-2  px-2 text-[#333333] font-semibold">Navbar Title</div>

          <div className="hidden flex-none lg:block">
            <ul className="menu-horizontal gap-4">
              {menus.map((menu, index) => (
                <li key={index}>
                  <a href={menu.href} className="text-[#333333] font-semibold transform duration-200 ease-in-out hover:text-accent-light">
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ButtonCustom className="hidden lg:block">Đặt hàng</ButtonCustom>
          <div className="flex-none lg:hidden bg-accent-light rounded-lg ">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
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
