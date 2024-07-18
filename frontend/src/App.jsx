import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Donation from "./components/Donation/Donation";
import "./App.css";
// import { Button } from "./components/ui/button";
import { SignIn } from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";
import { SignUp } from "./components/SignUp/SignUp";
import Layout from "./Layout";
import Event from "./components/Event/Event";
import EventDetails from "./components/Event/EventDetails";

function App() {
  const [data, setData] = useState("");

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<SignIn setData={setData} />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/events" element={<Event />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
