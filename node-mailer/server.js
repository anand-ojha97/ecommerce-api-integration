// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use Gmail or other SMTP servers
  auth: {
    user: 'anandojha1432@gmail.com', // Your email address
    pass: 'orzxsccuwgeatwsf', // Your email password or app password
  },
});

// API endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Set up email data
  const mailOptions = {
    from: email, // Sender address
    to: 'anandojha1432@gmail.com', // Receiver address
    subject: `New Message from ${name}`, // Subject
    text: `Message from ${name} (${email}):\n\n${message}`, // Email body
  };

  // Send email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ' + info.response);
    return res.status(200).send('Email sent successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
