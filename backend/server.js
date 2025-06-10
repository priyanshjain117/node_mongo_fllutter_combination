const express = require('express');
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT =3000;

const app = express();
app.use(express.json());

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB Atlas connected'))
    .catch((err) => console.error('❌ Connection error:', err));

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Hello from Node.js with MongoDB Atlas!' },);
});

app.listen(PORT,()=>{
    console.log(` Server running on http://localhost:${PORT}`);
})