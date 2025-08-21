const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config({ silent: true })

const app = express();
app.use(cors({
  origin: ["http://localhost:5173", "https://chirru.netlify.app"],
  credentials: true
})); // Allow both local development and production
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Chirru</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background:rgb(0, 0, 0);
          }
          h1 {
            color: #ffffff;
          }
          h2 {
            color: #ffffff;
          }
        </style>
      </head>
      <body>
        <h1>Your API is running👨‍💻, Go and Enjoy😊!</h1>
        <h2>This is the Backend Server made By Chirru</h2>
        <style>
      </body>
    </html>
  `);
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER, 
      pass: process.env.MAIL_PASS, 
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_RECEIVER, 
      subject: `Contact from ${name}`,
      text: message,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });
    res.status(200).json({ message: "Email sent!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to send email.", error: err });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Your Server Run On:"http://localhost:${PORT}"`));
