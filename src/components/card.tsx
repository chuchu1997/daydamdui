import Button from "./button";
import { PhoneCall } from "react-feather";
type Props = {
  imgSrc?: string;
  badge?: string;
  title?: string;
};
const Card = ({
  imgSrc = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  badge = "Thiết bị xây dựng",
  title,
}: Props) => {
  return (
    <div className=" card bg-[#ffffff] w-96 shadow-xl py-4 w-[100%] relative capitalize hover:scale-105 transform duration-300 ease-in-out">
      {/* <div className="badge bg-accent text-[#fff] px-4 py-4 absolute top-[5px] right-[5px] cap text-[12px]">
        {badge}
      </div> */}
      <figure>
        <img className="h-[160px]" src={imgSrc} alt={title} />
      </figure>
      <div className="card-body text-[#000000] ">
        <h2 className="card-title italic font-semibold capitalize">{title}</h2>
        {/* <p className="font-normal italic my-[10px]">
          Sản phẩm phục vụ cho xây dựng được phân phối bởi công ty mayxaydungmoi
        </p> */}
        <div className="card-actions justify-end">
          <Button
            onClick={() => {
              window.location.href = `tel:0973926139`;
            }}
          >
            Liên Hệ
            <PhoneCall size={"16px"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
