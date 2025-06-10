const express = require('express');
const { handelUserPostRequest, handelGetAllUsers } = require('../controllers/user');
const router = express.Router();

router.route('/')
  .post(handelUserPostRequest)
  .get(handelGetAllUsers);

module.exports = router;
