import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  BrowserRouter as Router,
  Route,
  useLocation,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Anime from "./routes/Anime";
import ViewMore from "./routes/ViewMore";
import ErrorPage from "./pages/error";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar";
import Genre from "./pages/Genre";
//import Tv from "./pages/Tv";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import AZlist from "./pages/AZ-list";
import Search from "./pages/Search";
import ScrollToTopOnRouteChange from "./routes/Scrool";

//import animeData from "./AnimeData";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Home />,
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: "/popular",
//       element: <Popular />,
//     },
//     {
//       path: "/tvseries",
//       element: <Series />,
//     },
//     {
//       path: "/movies",
//       element: <Movies />,
//     },
//     {
//       path: "/anime/:name",
//       element: <Anime />,
//     },
//     {
//       path: "/viewmore/:title",
//       element: <ViewMore />,
//     },
//     {
//       path: "/genre/:name",
//       element: <Genre />,
//     },
//     {
//       path: "/az-list/:name",
//       element: <AZlist />,
//     },
//     {
//       path: "search",
//       element: <Search />,
//     },
//   ],
//   <ScrollRestoration />
// );

const App = () => {
  const [isOpen, SetIsOpen] = useState();
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <div className=" w-full  relative overflow-hidden bg-[#000000]">
      <Router>
        <ScrollToTopOnRouteChange />
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        {/* Your Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/anime/:name" element={<Anime />} />
          <Route path="/viewmore/:title" element={<ViewMore />} />
          <Route path="/tvseries" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="search" element={<Search />} />
          <Route path="/az-list/:name" element={<AZlist />} />
          <Route path="/genre/:name" element={<Genre />} />
        </Routes>
        <Footer />
      </Router>

      {/* <RouterProvider router={router} /> */}
    </div>
  );
};

export default App;
