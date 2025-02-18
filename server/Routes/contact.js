const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    console.log('activate');
    const newMessage = new ContactMessage({ name, email, subject, message });
    await newMessage.save();
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
