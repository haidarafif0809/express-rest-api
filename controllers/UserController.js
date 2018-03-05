const models = require('../models');
const Op = require('sequelize').Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
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
  getUsers: (req,res) => {
    if (req.query.name) {
      let name = req.query.name;
      models.User.all({
        where: {
          name: {
            [Op.iLike] : `%${req.query.name}%`
          }
        }
      }).then((users) => {
        res.status(200).json({
          message: `Get All User where name like ${req.query.name} `,
          users
        });
      }).catch((err) => {
        res.status(500).json({
          message: err.message
        });
      });

    } else {
      models.User.all().then((users) => {
        res.status(200).json({
          message: "Get All User",
          users
        });
      }).catch((err) => {
        res.status(500).json({
          message: err.message
        });
      });
    }
  },
  getUser: (req, res) => {
    const id = req.params.id;
    models.User.findById(id).then((user) => {
      res.status(200).json({
        message: `Get an User with id ${id}`,
        user
      });
    }).catch((err) => {
      res.status(500).json({
        message: err.message
      });
    });
  },
  createUser: (req, res) => {
    models.User.create(req.body).then((user) => {
      res.status(201).json({
        message: `Success Created New User`,
        user
      });
    }).catch((err) => {
      res.status(500).json({
        message: err.message
      });
    });
  },
  deleteUser: (req, res) => {
    const id = req.params.id;
    let userData;
    models.User.findById(id).then((user) => {
      userData = user;
      return user.destroy();
    }).then((user) => {
      res.status(200).json({
        message: `Success Deleted an User`,
        user: userData
      });
    }).catch((err) => {
      res.status(404).json({
        message: err.message
      });
    });
  },
  updateUser: (req, res) => {
    const id = req.params.id;
    models.User.findById(id).then((user) => {
      return user.update(req.body);
    }).then((user) => {
      res.status(200).json({
        message: `Success Updated an User`,
        user
      });
    }).catch((err) => {
      res.status(404).json({
        message: err.message
      });
    });
  },
};
