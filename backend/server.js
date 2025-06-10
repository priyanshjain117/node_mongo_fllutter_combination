const express = require('express');
const userRouter = require('./routes/user');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.path}`);
  next();
});

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  dbName: 'flutterxnode'
})
  .then(() => console.log('✅ MongoDB Atlas connected'))
  .catch((err) => console.error('❌ Connection error:', err));

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello from Node.js with MongoDB Atlas!' });
});

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
