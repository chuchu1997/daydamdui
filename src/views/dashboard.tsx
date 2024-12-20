// import { SectionTitle } from "@/components/sectionTitle";
import { lazy, Suspense } from "react";
import Button from "../components/button";
import { ArrowUp } from "react-feather";
const Grid = lazy(() => import("../components/grid"));
const Card = lazy(() => import("../components/card"));
const Section = lazy(() => import("../components/section"));
const SectionTitle = lazy(() => import("../components/sectionTitle"));

const Services = lazy(() => import("../components/services"));

type Props = {};
const Banner = () => {
  return (
    <div className="">
      <img
        src="./banner/banner2.png"
        className="  w-full h-full object-contain"
      ></img>
    </div>
  );
};
const SectionDayDamDui = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Section className="" id="daydamdui">
        <SectionTitle title="Dây Đầm Dùi" />
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
          <Card title="Uốn Sắt" imgSrc="/mayuonsat/1.jpg" />
          <Card title="Uốn Sắt" imgSrc="/mayuonsat/2.jpg" />
          <Card title="Uốn Sắt" imgSrc="/mayuonsat/3.jpg" />
          <Card title="Uốn Sắt" imgSrc="/mayuonsat/4.jpg" />
          <Card title="Uốn Sắt" imgSrc="/mayuonsat/5.jpg" />
          <Card title="Uốn Sắt" imgSrc="/mayuonsat/6.jpg" />
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
export const DashBoardView = ({}: Props) => {
  return (
    <div className="container mx-auto flex flex-col gap-14 relative">
      <Banner />
      <Services id="services" />
      <SectionDayDamDui />
      <SectionMayMocXayDung />
      <SectionMayUonSat />
      <SectionToiDien />
      <SectionLuoiCatBeTong />
      <SectionDongCoNo />

      <Button
        className="fixed bottom-[40px] right-[10px] rounded-full"
        onClick={() => {
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ArrowUp />
      </Button>
    </div>
  );
};
