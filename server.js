const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://pashu-portfolio.netlify.app/',
}));

app.use(morgan('dev'));

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas.');
});

// Mongoose Schemas
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Mongoose Models
const ContactMe = mongoose.model('ContactMe', contactSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Routes
// Contact Me Endpoint
app.post('/api/contactme', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new ContactMe({ name, email, message });
    await newContact.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'malipashuyahoo123@gmail.com',
      subject: 'New Contact Me Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email.');
      }
      res.send({ message: 'Thank you for contacting us!' });
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).send('Error saving contact.');
  }
});

// Feedback Endpoint
app.post('/api/feedback', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'malipashuyahoo123@gmail.com',
      subject: 'New Feedback Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email.');
      }
      res.send({ message: 'Thank you for your feedback!' });
    });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).send('Error saving feedback.');
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
