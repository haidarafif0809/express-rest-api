const router = require('express').Router();
const users = require('./users');
const { signIn} = require('../controllers/UserController');

router.get('/hello', (req, res) => {
  const name = req.query.name;
  res.send(`Hello, ${name}!`);
});

router.post('/signin',signIn);

router.post('/signup', (req, res) => {

});
router.use('/users',users);

module.exports = router;
