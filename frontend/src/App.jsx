import React, { useState, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, createMemoryRouter, Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Anime from "./routes/Anime";
import ViewMore from "./routes/ViewMore";
import ErrorPage from "./pages/error";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar";
import Genre from "./pages/Genre";
import Tv from "./pages/Tv";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import AZlist from "./pages/AZ-list";
//import animeData from "./AnimeData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "popular",
    element: <Popular />,
  },
  {
    path: "tvseries",
    element: <Series />,
  },
  {
    path: "movies",
    element: <Movies />,
  },
  {
    path: "anime/:name",
    element: <Anime />,
  },
  {
    path: "viewmore/:title",
    element: <ViewMore />,
  },
  {
    path: "genre/:name",
    element: <Genre />,
  },
  {
    path: "az-list/:name",
    element: <AZlist />
  }
]);
  

const App = () => {
  const [isOpen, SetIsOpen] = useState();
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <div className=" w-full relative overflow-hidden bg-[#000000]">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
