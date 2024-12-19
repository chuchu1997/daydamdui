import { ArrowDownRight } from "react-feather";
import SectionTitle from "./sectionTitle";
type Props = {
  id?: string;
};
const itemServices = [
  {
    num: "01",
    title: "Dây đầm dùi",
    description: "lorem ipsum dolor sit amet",
    image: "/daydamdui/2.jpg",
    href: "",
    idTarget: "daydamdui",
  },
  {
    num: "02",
    title: "Máy móc xây dựng",
    description: "lorem ipsum dolor sit amet",
    image: "/maymocxaydung/6.jpg",
    href: "",
    idTarget: "maymocxaydung",
  },
  {
    num: "03",
    title: "Máy uốn sắt",
    description: "lorem ipsum dolor sit amet",
    image: "/mayuonsat/5.jpg",
    href: "",
    idTarget: "mayuonsat",
  },
  {
    num: "04",
    title: "Tời điện",
    description: "lorem ipsum dolor sit amet",
    image: "/toidien/3.jpg",
    href: "",
    idTarget: "toidien",
  },
  {
    num: "05",
    title: "Lưỡi cắt bê tông",
    description: "lorem ipsum dolor sit amet",
    image: "/luoicatbetong/1.jpg",
    href: "",
    idTarget: "luoicat",
  },
  {
    num: "06",
    title: "Động cơ nổ",
    description: "lorem ipsum dolor sit amet",
    image: "/dongcono/1.jpg",
    href: "",
    idTarget: "dongcono",
  },
];

const Services = ({ id }: Props) => {
  return (
    <section className="text-accent flex flex-col gap-4 px-2" id={id}>
      <SectionTitle
        title={"Các sản phẩm chính của công ty"}
        className="mb-[10px]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {itemServices.map((service) => (
          <div
            key={service.num}
            className=" p-4 rounded-lg shadow-md hover:scale-105 transform duration-300 ease-in-out"
          >
            <div className="flex items-center justify-between ">
              <div className="title-service flex flex-col gap-4">
                <p className="text-[40px] italic font-semibold">
                  {service.num}
                </p>
                <p className=" text-[16px] font-semibold italic text-accent/90">
                  {service.title}
                </p>
              </div>
              <div className="image-service">
                <img
                  src={service.image}
                  className="h-[70px] w-[80px] object-fill rounded-md"
                ></img>
              </div>
              <div className="action-service">
                <div
                  onClick={() => {
                    document
                      .getElementById(service.idTarget)!
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="cursor-pointer bg-accent/20 w-[45px] h-[45px] rounded-full flex justify-center items-center hover:bg-accent transition-all duration-500 hover:-rotate-45"
                >
                  <ArrowDownRight className="text-black" size={"20px"} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
