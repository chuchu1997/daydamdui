import { Mail, MapPin, PhoneCall } from "react-feather";

const Footer = () => {
  return (
    <footer className=" min-h-[200px] bg-[#333333] pb-[50px] font-sans">
      <div className="container mx-auto footer-content py-[40px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-10 items-center md:items-start">
            <h3 className="text-h3-sm md:text-h3 text-accent italic">
              Công Ty TNHH TM Dụng Cụ Tổng Hợp
            </h3>
            <div className="">
              <img
                src="/logo/logo.png"
                className="h-[100px] object-contain"
              ></img>
              {/* <div className="font-light italic mt-[10px]">
                Phân phối dây đầm dùi
              </div> */}
            </div>

            <ul className="list-disc flex flex-col ml-[10px] md:ml-[0px] gap-2">
              <li>
                <p className="text-[16px] italic">
                  Chúng tôi luôn muốn mang đến các sản phẩm chất lượng để người
                  dùng có trải nghiệm tốt nhất
                </p>
              </li>
              <li>
                <p className="text-[16px] italic">
                  Công Ty TNHH TM Dụng Cụ Tổng Hợp
                </p>
              </li>
              <li>
                <p className="text-[16px] italic">Mã số thuế : 0316806043</p>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <h3 className="text-h3-sm md:text-h3 text-accent italic mb-[6px]">
              Thông tin mua hàng và bảo hành
            </h3>
            <div className="flex flex-col gap-4 text-[15px] italic">
              <p> Mua hàng: 0973 926 139 (8:00 - 22:00)</p>
              <p> Sửa chữa: 0869 757 585 (8:00 - 22:00)</p>
              <p> Bảo hành: 0973 976 139 (8:00 - 22:00)</p>
            </div>

            <div className="flex flex-col gap-2 text-[15px] italic">
              <h3 className="text-h3-sm md:text-h3 text-accent mb-[5px]">
                Liên Hệ
              </h3>
              <div className="flex items-center gap-4">
                <PhoneCall size={"16px"} />
                <span> 0973.926.139</span>
              </div>
              <div className="flex items-center gap-4 ">
                <Mail size={"16px"} />
                <span>mayxaydungmoi.co@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 ">
                <MapPin size={"16px"} />
                <span>
                  287 Tây Thạnh, Phường Tây Thạnh, Quận Tân Phú, TP.HCM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-warning"></div>
        <div className="text-center text-[14px] italic ">
          © 2024 Dây Đầm Dùi . All rights reserved. Thiết kế website NguyenCuong
        </div>
      </div>
    </footer>
  );
};

export default Footer;
