const Request = require('../models/requestModel');

exports.submitRequest = async (req, res) => {
  const { userId, photoUrl, location } = req.body;
  try {
    const newRequest = new Request({ userId, photoUrl, location });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(500).json({ error: 'Unable to submit request' });
  }
};
