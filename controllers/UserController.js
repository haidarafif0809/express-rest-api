const models = require('../models');
const Op = require('sequelize').Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
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
