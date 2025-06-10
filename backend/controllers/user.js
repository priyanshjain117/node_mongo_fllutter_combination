const users = require('../models/user');

async function handelUserPostRequest(req, res) {
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
    const user = await users.create({ name, email });
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
}

async function handelGetAllUsers(req, res) {
  console.log("in side get all user");
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
}

module.exports = { handelUserPostRequest, handelGetAllUsers };
