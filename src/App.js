import React from "react";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FounderDetail from "./components/FounderDetail";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Mission from "./components/Mission";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Service />,
        },
        {
          path: "/founderDetails",
          element: <FounderDetail />,
        },
        {
          path: "/mission",
          element: <Mission/>
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
