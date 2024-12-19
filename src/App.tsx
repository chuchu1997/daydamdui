import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashBoardView } from "./views/dashboard";
import { Navbar } from "./components/navbar";
import { AboutView } from "./views/about";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoardView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
