import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common-components/Navbar";

const Candidates = lazy(() => import("./components/Candidates"));
const Videos = lazy(() => import("./components/Videos"));
const Posts = lazy(() => import("./components/Posts"));
const ProfileForm = lazy(() => import("./components/Step1Form"));
function App() {
  console.log("App component rendered");
  const [counter, setCounter] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Candidates />} />
          <Route path="/about" element={<Candidates />} />
          <Route path="/watch" element={<Videos />} />
          <Route path="/add" element={<ProfileForm />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <button
          className="my-2 p-2 w-full"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
        <p className="my-3 text-center">{counter}</p>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
