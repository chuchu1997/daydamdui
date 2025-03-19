// import { SectionTitle } from "@/components/sectionTitle";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { lazy, Suspense } from "react";

const Grid = lazy(() => import("../components/grid"));
const Card = lazy(() => import("../components/card"));
const Section = lazy(() => import("../components/section"));
const SectionTitle = lazy(() => import("../components/sectionTitle"));

const Services = lazy(() => import("../components/services"));


const Banner = () => {
  return (
    <div className="">
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={4}
        isPlaying={true}
        totalSlides={6}
        className="text-[#000] w-10/12 mx-auto relative  bg-[none] border border-transparent"
      >
        <Slider>
          <Slide index={0}>
            <img
              src="/banner/1.png"
              className="  w-full h-full object-contain"
              alt="dây đầm dùi (daydamdui.com)"
              loading="lazy"
            ></img>
          </Slide>
          <Slide index={1}>
            <img
              src="/banner/2.png"
              className="  w-full h-full object-contain"
              alt="dây đầm dùi (daydamdui.com)"
              loading="lazy"
            ></img>
          </Slide>
          <Slide index={2}>
            <img
              src="/banner/3.png"
              className="w-full h-full object-contain"
              alt="dây đầm dùi (daydamdui.com)"
              loading="lazy"
            ></img>
          </Slide>
          <Slide index={3}>
            <img
              src="/banner/4.png"
              className="w-full h-full object-contain"
              alt="dây đầm dùi (daydamdui.com)"
              loading="lazy"
            ></img>
          </Slide>
          <Slide index={4}>
            <img
              src="/banner/5.png"
              className="  w-full h-full object-contain"
              alt="dây đầm dùi (daydamdui.com)"
              loading="lazy"
            ></img>
          </Slide>
          <Slide index={5}>
            <img
              src="/banner/6.png"
              className="w-full h-full object-contain"
              alt="dây đầm dùi (daydamdui.com)"
              loading="lazy"
            ></img>
          </Slide>
        </Slider>

        {/* <ButtonBack className="absolute top-[150px] -translate-y-1/2 left-0 ">
          <ArrowLeftCircle className="text-accent" size={"28px"} />
        </ButtonBack>
        <ButtonNext className="absolute top-[150px] -translate-y-1/2 right-0">
          <ArrowRightCircle className="text-accent" size={"28px"} />
        </ButtonNext> */}
      </CarouselProvider>
    </div>
  );
};
const SectionDayDamDui = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Section className="" id="daydamdui">
        <SectionTitle title="Dây Đầm Dùi" type="h1" />
        <Grid>
          <Card title="máy xoa nền" imgSrc="/daydamdui/1.jpg" />
          <Card
            title="động cơ nổ gắn dây bơm hố móng"
            imgSrc="/daydamdui/2.jpg"
          />
          <Card title="dây đầm dùi xăng" imgSrc="/daydamdui/3.jpg" />
          <Card title="dây đầm dùi điện" imgSrc="/daydamdui/4.jpg" />
          <Card title="đầm thước" imgSrc="/daydamdui/5.jpg" />
          <Card title="động cơ nổ gắn dây đầm dùi" imgSrc="/daydamdui/6.jpg" />
        </Grid>
      </Section>
    </Suspense>
  );
};
const SectionMayMocXayDung = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Section className="" id="maymocxaydung">
        <SectionTitle title="Thiết bị máy móc xây dựng " />
        <Grid>
          <Card title="đầm cóc mikasa" imgSrc="/maymocxaydung/6.jpg" />
          <Card title="máy cắt nhựa đường" imgSrc="/maymocxaydung/2.jpg" />
          <Card title="cối trộn bê tông" imgSrc="/maymocxaydung/3.jpg" />
          <Card title="đầm bàn mikasa" imgSrc="/maymocxaydung/4.jpg" />
          <Card title="máy cắt bê tông sthill" imgSrc="/maymocxaydung/5.jpg" />
          <Card title="máy hàn điện tử" imgSrc="/maymocxaydung/1.jpg" />
        </Grid>
      </Section>
    </Suspense>
  );
};
const SectionMayUonSat = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Section className="" id="mayuonsat">
        <SectionTitle title="Máy Uốn Sắt - Cắt Sắt Thủy Lực " />
        <Grid>
          <Card title="máy uốn sắt thủy lực" imgSrc="/mayuonsat/1.jpg" />
          <Card title="máy chặt sắt thủy lực" imgSrc="/mayuonsat/2.jpg" />
          <Card title="máy uốn và cắt sắt thủy lực" imgSrc="/mayuonsat/3.jpg" />
          <Card title="máy cắt sắt thủy lực" imgSrc="/mayuonsat/4.jpg" />
          <Card title="máy uốn sắt thủy lực" imgSrc="/mayuonsat/5.jpg" />
          <Card title="máy uốn sắt thủy lực" imgSrc="/mayuonsat/6.jpg" />
        </Grid>
      </Section>
    </Suspense>
  );
};
const SectionToiDien = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Section className="" id="toidien">
        <SectionTitle title="Tời Điện -Plang- Con Đội " />
        <Grid>
          <Card title="Đội thủy lực" imgSrc="/toidien/1.jpg" />
          <Card title="Palang tay" imgSrc="/toidien/2.jpg" />
          <Card title="Tời Điện" imgSrc="/toidien/3.jpg" />
          <Card title="Tời Điện" imgSrc="/toidien/4.jpg" />
          <Card title="Tời Điện Treo" imgSrc="/toidien/5.jpg" />
          <Card title="Tời Điện Quả Nhót" imgSrc="/toidien/6.jpg" />
        </Grid>
      </Section>
    </Suspense>
  );
};

const SectionLuoiCatBeTong = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Section className="" id="luoicat">
        <SectionTitle title="Lưỡi Cắt Bê Tông " />
        <Grid>
          <Card
            title="Lưỡi Cắt Bê Tông"
            imgSrc="/luoicatbetong/1.jpg"
            badge="Lưỡi Cắt "
          />
          <Card
            title="Lưỡi Cắt Bê Tông"
            imgSrc="/luoicatbetong/1.jpg"
            badge="Lưỡi Cắt "
          />
          <Card
            title="Lưỡi Cắt Bê Tông"
            imgSrc="/luoicatbetong/1.jpg"
            badge="Lưỡi Cắt "
          />
          <Card
            title="Lưỡi Cắt Bê Tông"
            imgSrc="/luoicatbetong/1.jpg"
            badge="Lưỡi Cắt "
          />
          <Card
            title="Lưỡi Cắt Bê Tông"
            imgSrc="/luoicatbetong/1.jpg"
            badge="Lưỡi Cắt "
          />
          <Card
            title="Lưỡi Cắt Bê Tông"
            imgSrc="/luoicatbetong/1.jpg"
            badge="Lưỡi Cắt "
          />
        </Grid>
      </Section>
    </Suspense>
  );
};
const SectionDongCoNo = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Section className="" id="dongcono">
        <SectionTitle title="Động Cơ Nổ" />
        <Grid>
          <Card title="Động cơ nổ " imgSrc="/dongcono/1.jpg" badge="máy phát" />
          <Card title="Động cơ nổ " imgSrc="/dongcono/2.jpg" badge="máy phát" />
          <Card title="Động cơ nổ " imgSrc="/dongcono/3.jpg" badge="máy phát" />
          <Card title="Động cơ nổ " imgSrc="/dongcono/4.jpg" badge="máy phát" />
          <Card title="Động cơ nổ " imgSrc="/dongcono/5.jpg" badge="máy phát" />
          <Card title="Động cơ nổ " imgSrc="/dongcono/6.jpg" badge="máy phát" />
        </Grid>
      </Section>
    </Suspense>
  );
};

const SectionCacDuAnTieuBieu = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Section className="" id="video">
        <SectionTitle title="Video Sản Phẩm" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <video controls>
              <source src="/video1.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src="/video2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {/* <Grid>
          <Card
            title="Dây đầm dùi"
            imgSrc="/daydamdui/1.jpg"
            badge="máy phát"
          />
          <Card title="Động cơ nổ " imgSrc="/dongcono/1.jpg" badge="máy phát" />
          <Card
            title="Lưỡi cắt bê tông "
            imgSrc="/luoicatbetong/1.jpg"
            badge="máy phát"
          />
        </Grid> */}
      </Section>
    </Suspense>
  );
};

const SectionTialaser = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Section className="" id="tialaser">
        <SectionTitle title="Thương hiệu dụng cụ điện - Tia laser" />
        <Grid>
          <Card title="" imgSrc="/tialaser/1.jpg" />
          <Card title="" imgSrc="/tialaser/2.jpg" />
          <Card title="" imgSrc="/tialaser/3.jpg" />
          <Card title="" imgSrc="/tialaser/4.jpg" />
          <Card title="" imgSrc="/tialaser/5.jpg" />
          <Card title="" imgSrc="/tialaser/6.jpg" />
        </Grid>
      </Section>
    </Suspense>
  );
};

export const DashBoardView = () => {
  return (
    <div className="container mx-auto flex flex-col gap-14 relative">
      <div>CUONG TEST</div>
      <Banner />
      <Services id="services" />
      <SectionDayDamDui />
      <SectionMayMocXayDung />
      <SectionMayUonSat />
      <SectionToiDien />
      <SectionLuoiCatBeTong />
      <SectionDongCoNo />
      <SectionCacDuAnTieuBieu />
      <SectionTialaser />

      {/* <Button
        aria-labelledby="btn-scroll-top"
        className="fixed bottom-[40px] right-[10px] rounded-full"
        onClick={() => {
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ArrowUp />
      </Button> */}
    </div>
  );
};
