import React, { useEffect, useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// Direct React component imports

// Styles must use direct files imports

type Props = {
  columns?: number;
  gap?: number;
  className?: string;
  children: React.ReactNode;
};
const Grid = ({ className, children }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Breakpoint < 768px cho mobile
    };

    handleResize(); // Xác định ban đầu
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const itemsInGrid = React.Children.toArray(children);

  if (isMobile) {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={120}
        totalSlides={itemsInGrid.length}
        className="text-[#000] w-10/12 mx-auto relative  bg-[none]"
      >
        <Slider>
          {itemsInGrid.map((item, index) => (
            <Slide index={index} key={index}>
              {item}
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="absolute top-[200px] -translate-y-1/2 left-0 ">
          <ArrowLeftCircle className="text-accent" size={"28px"} />
        </ButtonBack>
        <ButtonNext className="absolute top-[200px] -translate-y-1/2 right-0">
          <ArrowRightCircle className="text-accent" size={"28px"} />
        </ButtonNext>
      </CarouselProvider>
    );
  }

  return (
    <div
      className={`${className} grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-20`}
    >
      {children}
    </div>
  );
};
export default Grid;
