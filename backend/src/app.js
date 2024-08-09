import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://vms-ngo.vercel.app/",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.routes.js";
import eventRouter from "./routes/event.routes.js";
import postRouter from "./routes/post.routes.js";
import announcementRouter from "./routes/announcement.routes.js";
import volunteerWorkRouter from "./routes/volunteerWork.routes.js";
import donationRouter from "./routes/donation.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";

// // routes declaration
app.get("/", (req, res) => {
  res.send("Welcome to VMS API");
});
app.use("/api/v1/users", userRouter); // tested
app.use("/api/v1/events", eventRouter); // tested
app.use("/api/v1/posts", postRouter); // tested
app.use("/api/v1/announcements", announcementRouter);
app.use("/api/v1/donations", donationRouter);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/volunteerWorks", volunteerWorkRouter);

export { app };
