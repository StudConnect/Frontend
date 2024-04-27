import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import MainLayout from "./components/layouts/mainlayout/MainLayout";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </>
    )
  );
  return (
    <div className="App text-Plus">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
