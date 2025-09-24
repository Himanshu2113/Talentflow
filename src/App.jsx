import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import Assessments from "./pages/Assessments";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/assessments" element={<Assessments />} />
      </Routes>
    </>
  );
}
