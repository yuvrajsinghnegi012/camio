import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";
import Previous from "./pages/Previous";
import Recordings from "./pages/Recordings";
import PersonalRoom from "./pages/PersonalRoom";
import Meeting from "./pages/Meeting";
import Loader from "./components/Loader";
import { Suspense } from "react";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import StreamVideoProvider from "./providers/StreamClientProvider";

export default function App() {
  return (
    <div className="">
      {/* <StreamVideoProvider> */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/upcoming"} element={<Upcoming />} />
            <Route path={"/previous"} element={<Previous />} />
            <Route path={"/recordings"} element={<Recordings />} />
            <Route path={"/personal-room"} element={<PersonalRoom />} />
            <Route path={"/meeting"} element={<Meeting />} />
            <Route path={"/sign-in"} element={<SignInPage />} />
            <Route path={"/sign-un"} element={<SignUpPage />} />
          </Routes>
        </Suspense>
      {/* </StreamVideoProvider> */}
    </div>
  )
}
