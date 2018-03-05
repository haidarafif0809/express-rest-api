const router = require('express').Router();
const users = require('./users');
const { signIn,signUp} = require('../controllers/AuthController');
const auth = require('../middleware/auth');

router.get('/hello', (req, res) => {
  const name = req.query.name;
  res.send(`Hello, ${name}!`);
});

router.post('/signin',signIn);
router.post('/signup',signUp);
router.use('/users',auth.isAuth,users);

module.exports = router;
