const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors({ origin:"https://chirru.netlify.app/"})); // For production, use: cors({ origin: "https://your-frontend-domain" })
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>API Status</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f8f9fa;
          }
          h1 {
            color: #333;
          }
        </style>
      </head>
      <body>
        <h1>Your API is running👨‍💻, Go and Enjoy😊!</h1>
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
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));