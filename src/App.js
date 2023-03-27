import "./App.css";
import React, { children } from "react";
import Layout from "./Components/Layout";
import Portofolio from "./Components/Portofolio";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Portofolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}
