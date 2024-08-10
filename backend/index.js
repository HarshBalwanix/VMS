import { app } from "./src/app.js";
import connectDB from "./src/db/index.js";
import dotenv from "dotenv";
import { sendSMS } from "./utils/smsUtil.js";
dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("express error", error);
    });
  })
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!! ", err);
    process.exit(1);
  });

// sendMail();

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("express error", error);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Connection error ", error);
//     throw error;
//   }
// })();
