const router = require('express').Router();
const {getUsers, getUser, createUser, deleteUser, updateUser} = require('../controllers/UserController');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
