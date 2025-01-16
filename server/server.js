const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3301;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nipun.bakshi1209@gmail.com', // Your email
        pass: 'jdjh uzlv wiig dtzv',        // App password
    },
});

// Contact form route
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    console.log('Form Data Received:', { name, email, message });

    const mailOptions = {
        from: 'nipun.bakshi1209@gmail.com', // Sender's email (your email)
        to: email,                          // Recipient email (from the form data)
        subject: 'Thanks for connecting with me', // Updated subject
        text: `
            Thank you for contacting me. How may I help you?
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Failed to send email', error: error.message });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
