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
import { toast } from "react-toastify";
function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Define interceptors and store their IDs
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        setLoading(true);
        return config;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (error) => {
        setLoading(false);
        let errorMessage = "An unknown error occurred";
        if (error.response && error.response.data) {
          errorMessage = error.response.data;
          if (
            errorMessage.includes("User with email or number already exists")
          ) {
            errorMessage = "User with email or number already exists";
          }
        }
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return Promise.reject(error);
      }
    );

    // Cleanup function to eject interceptors when the component unmounts
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [setLoading]); // Assuming setLoading is a state setter function
  // Include the ToastContainer component somewhere in your component tree
  // <ToastContainer />

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
