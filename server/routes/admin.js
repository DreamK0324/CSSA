const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// const User = require('../models/User');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const adminLayout = '../views/layouts/admin';
// const jwtSecret = process.env.JWT_SECRET;





/**
 * GET /
 * Admin - Login Page
*/
router.get('/admin', async (req, res) => {
  try {
    const locals = {
      title: "Admin",
      description: "Simple Blog created with NodeJs, Express & MongoDb."
    }

    res.render('admin/index', { locals });
  } catch (error) {
    console.log(error);
  }
});





module.exports = router;