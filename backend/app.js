const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const ngoRoutes = require('./routes/ngoRoutes');
const requestRoutes = require('./routes/requestRoutes');

dotenv.config();

const app = express();


app.use(cors());  
app.use(express.json());


app.use('/api/users', userRoutes);  
app.use('/api/ngos', ngoRoutes);  
app.use('/api/requests', requestRoutes);  


mongoose
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB connection error:', err));


module.exports = app;
