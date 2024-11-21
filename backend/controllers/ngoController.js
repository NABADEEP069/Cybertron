const NGO = require('../models/ngoModel');

exports.registerNGO = async (req, res) => {
  const { name, location, email } = req.body;
  try {
    const newNgo = new NGO({ name, location, email });
    await newNgo.save();
    res.status(201).json(newNgo);
  } catch (err) {
    res.status(500).json({ error: 'Error registering NGO' });
  }
};
