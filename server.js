const express = require('express');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app URL
}));
app.use(morgan('dev'));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306, // MySQL server port
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Endpoint to handle Contact Me form submissions
app.post('/api/contactme', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received form submission:', { name, email, message });

  const query = 'INSERT INTO ContactMe (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return res.status(500).send('Error saving data.');
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'malipashuyahoo123@gmail.com', // Send email to your designated email address
      subject: 'New Contact Me Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email.');
      }
      console.log('Email sent:', info.response);
      res.send({ message: 'Thank you for contacting us!' });
    });
  });
});

// Endpoint to handle Feedback form submissions
app.post('/api/feedback', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received feedback submission:', { name, email, message });

  const query = 'INSERT INTO Feedback (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return res.status(500).send('Error saving feedback.');
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'malipashuyahoo123@gmail.com', // Send email to your designated email address
      subject: 'New Feedback Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email.');
      }
      console.log('Email sent:', info.response);
      res.send({ message: 'Thank you for your feedback!' });
    });
  });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
