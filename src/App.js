import React from "react";
import { Navigation } from "./components";
import Home from "./pages/home";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Resume from "./pages/resume";
import Work from "./pages/work";

const router = createBrowserRouter([
  {
    path: "/resume",
    element: <div>test</div>,
  },
  {
    path: "",
    element: <div>home</div>,
    // <Home />
  },
]);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
