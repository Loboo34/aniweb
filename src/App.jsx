import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./routes/Popular";
import Anime from "./routes/Anime";
import ViewMore from "./routes/ViewMore";
import ErrorPage from "./pages/error";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

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
    path: "anime/:name",
    element: <Anime />,
  },
  {
    path: "viewmore/:title",
    element: <ViewMore />,
  },
  {
    path: "genre/:name",
    element: <ViewMore />,
  },
]);

const App = () => {
  const [isOpen, SetIsOpen] = useState();
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <RouterProvider router={router} />
      
      <Footer />
    </div>
  );
};

export default App;
