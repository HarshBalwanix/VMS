// import nodemailer from "nodemailer";
// import schedule from "node-schedule";
// import dotenv from "dotenv";

// // Load environment variables from .env file
// dotenv.config();

// // Create a transporter using environment variables
// const transporter = nodemailer.createTransport({
//   service: "Gmail",

//   auth: {
//     user: process.env.GMAIL_USERNAME,
//     pass: process.env.GMAIL_PASSWORD,
//   },
// });

// // Define the email options
// const mailOptions = {
//   from: process.env.GMAIL_USERNAME,
//   to: "balwaniharsh1001@gmail.com",
//   subject: "Hello from Node.js",
//   text: "This is a test email sent from Node.js",
// };

// // Function to send an email
// function sendMail() {
//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log("Error occurred while sending email:", error.message);
//     } else {
//       console.log("Email sent successfully:", info.response);
//     }
//   });
// }

// // Schedule the email to be sent every minute
// schedule.scheduleJob("*/10 * * * *", sendMail);

// export { sendMail };

import nodemailer from "nodemailer";
import schedule from "node-schedule";
const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: process.env.GMAIL_PORT,
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const sendMail = async ({ to, subject, text }) => {
  const mailOptions = {
    from: process.env.GMAIL_USERNAME,
    to,
    subject,
    text,
  };

  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("Error occurred while sending email:", error.message);
  }
};

// schedule.scheduleJob("*/10 * * * *", sendMail);

export { sendMail };
