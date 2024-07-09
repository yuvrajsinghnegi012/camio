import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";
import Previous from "./pages/Previous";
import Recordings from "./pages/Recordings";
import PersonalRoom from "./pages/PersonalRoom";
import Meeting from "./pages/Meeting";
import Loader from "./components/Loader";
import { lazy, Suspense } from "react";

export default function App() {
  return (
    <div className="">
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/upcoming"} element={<Upcoming />} />
        <Route path={"/previous"} element={<Previous />} />
        <Route path={"/recordings"} element={<Recordings />} />
        <Route path={"/personal-room"} element={<PersonalRoom />} />
        <Route path={"/meeting"} element={<Meeting />} />
      </Routes>
      </Suspense>
    </div>
  )
}
