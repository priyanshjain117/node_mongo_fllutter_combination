const express = require('express');
const mongoose = require('mongoose');
const users = require('./models/user');

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

app.post('/user',async (req,res)=>{
    const {name , email}=req.body;
    console.log("post");
    console.log(name);
    console.log(email);
    const user =await users.create({
        name,
        email
    })
    res.status(200).json({msg:"success"});
});

app.listen(PORT,()=>{
    console.log(` Server running on http://localhost:${PORT}`);
})