const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  signUp: (req, res) => {
  models.User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: 'member'
  }).then((user) => {
    res.status(201).json({
      message: `Success Sign Up New User`,
      user
    });
  }).catch((err) => {
    res.status(500).json({
      message: err.message
    });
  });
  },
  signIn: (req,res) => {
    models.User.findOne({
      where: {
        email: req.body.email
      }
    }).then((user) => {
      const checkLogin = bcrypt.compareSync(req.body.password,user.password);
      if (checkLogin) {
        var token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET);
        if (token) {
          res.status(200).json({
            message: "Success Sign In",
            token: token
          });
        }
      } else {
        res.status(200).json({
          message: "Failed Sign In",
        });
      }
    }).catch((err) => {
      res.status(200).json({
        message: err.message,
      });
    });
  },
};
