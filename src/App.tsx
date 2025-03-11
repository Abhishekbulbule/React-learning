import { lazy, Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common-components/Navbar";

const Candidates = lazy(() => import("./components/Candidates"));
const Videos = lazy(() => import("./components/Videos"));
const ProfileForm = lazy(() => import("./components/Step1Form"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Candidates />} />
          <Route path="/about" element={<Candidates />} />
          <Route path="/watch" element={<Videos />} />
          <Route path="/add" element={<ProfileForm />} />
        </Routes>
      </BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
