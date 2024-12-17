import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashBoardView } from "./views/dashboard";
import { Navbar } from "./components/navbar";
import { AboutView } from "./views/about";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashBoardView />} />
          <Route path="/about" element={<AboutView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
