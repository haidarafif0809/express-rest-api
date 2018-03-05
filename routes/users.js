const router = require('express').Router();
const {getUsers, getUser, createUser, deleteUser, updateUser} = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.get('/',auth.isAuthorized, getUsers);
router.get('/:id', getUser);
router.post('/',auth.isAuthorized, createUser);
router.delete('/:id',auth.isAuthorized, deleteUser);
router.put('/:id', updateUser);

module.exports = router;
