
const User = require('../models/userModel');


exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);  
  } catch (err) {
    res.status(400).json({ message: 'Error creating user', error: err });
  }
};


exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users); 
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
};
