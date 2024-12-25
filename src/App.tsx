import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashBoardView } from "./views/dashboard";
import { Navbar } from "./components/navbar";
import { AboutView } from "./views/about";
import Footer from "./components/footer";
import Body from "./components/body";
import ErrorPage from "./views/error";
import Button from "./components/button";
import { PhoneCall } from "react-feather";
import BlockSidebar from "./components/blockSidebar";

function App() {
  return (
    <div className="font-jetbrains relative ">
      <Navbar />
      <Body>
        <Routes>
          <Route path="/" element={<DashBoardView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Body>

      <Footer />

      <BlockSidebar />

      <div className="fixed bottom-0 left-0 right-0 flex md:hidden justify-center gap-4 ">
        <Button
          className="flex-1 flex items-center"
          as="a"
          href="tel:0973926139"
        >
          <PhoneCall size={"18px"} />
          <span>0973.926.139</span>
        </Button>
        <Button
          className="flex-1 flex items-center"
          as="a"
          href="https://zalo.me/0973926139"
        >
          <img
            src="/zalo.png"
            alt="zalo icon"
            className="h-8 w-8 object-cover"
          ></img>
          <span>Zalo</span>
        </Button>
      </div>
    </div>
  );
}

export default App;
