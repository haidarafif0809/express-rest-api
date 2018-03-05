const router = require('express').Router();
const users = require('./users');

router.get('/hello', (req, res) => {
  const name = req.query.name;
  res.send(`Hello, ${name}!`);
});

router.use('/users',users);

module.exports = router;
