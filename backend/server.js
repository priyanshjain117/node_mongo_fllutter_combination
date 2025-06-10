const express = require('express');
const mongoose = require('mongoose');
const users = require('./models/user');
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

app.route('/user')
    .post(async (req, res) => {
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
    }).get(async (req, res) => {
        console.log("in side get all user")
        try {
            const allUsers = await users.find({});
            res.status(200).json({
                msg: "success",
                users: allUsers
            });
        } catch (error) {
            res.status(500).json({
                msg: "error",
                error: error.message
            });
        }
    });


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});