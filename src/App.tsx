import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashBoardView } from "./views/dashboard";
import { Navbar } from "./components/navbar";
import { AboutView } from "./views/about";
import Footer from "./components/footer";
import Body from "./components/body";
import ErrorPage from "./views/error";
function App() {
  return (
    <div className="font-jetbrains">
      <Navbar />
      <Body>
        <Routes>
          <Route path="/" element={<DashBoardView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Body>

      <Footer />
    </div>
  );
}

export default App;
