const express = require('express');
const mongoose = require('mongoose');
const users = require('./models/user');
const PORT = 3000;
const app = express();

app.use(express.json());
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'flutterxnode' 
})
.then(() => console.log('✅ MongoDB Atlas connected'))
.catch((err) => console.error('❌ Connection error:', err));

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Hello from Node.js with MongoDB Atlas!' });
});

app.post('/user', async (req, res) => {
    console.log("POST");
    
    try {
        const { name, email } = req.body;
        
        if (!name || !email) {
            return res.status(400).json({ 
                msg: "error", 
                error: "Name and email are required" 
            });
        }
        
        const existingUser = await users.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            console.log("existingUser");
            return res.status(409).json({ 
                msg: "error", 
                error: "Email already exists. Please use a different email address." 
            });
        }
        
        const user = await users.create({
            name,
            email
        });
        
        res.status(201).json({ 
            msg: "success", 
            user: user 
        });
        
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ 
            msg: "error", 
            error: "Internal server error" 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});