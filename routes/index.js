const router = require('express').Router();
const users = require('./users');
const { signIn,signUp} = require('../controllers/AuthController');

router.get('/hello', (req, res) => {
  const name = req.query.name;
  res.send(`Hello, ${name}!`);
});

router.post('/signin',signIn);
router.post('/signup',signUp);
router.use('/users',users);

module.exports = router;
