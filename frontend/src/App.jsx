import React, { useState, useEffect } from "react";
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
import { LeaderBoard } from "./components/LeaderBoard/leader-board";
import { Error } from "./components/Error/Error";
import Loader from "./components/Loader/Loader";
import axios from "axios";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        setLoading(true);
        return config;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      }
    );
  }, []);

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<SignIn setData={setData} />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/events" element={<Event />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return (
    <>
      <Loader show={loading} />
      <RouterProvider router={route} />
    </>
  );
}

export default App;
