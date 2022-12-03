const { Router } = require('express');

const { usersGet,
    usersPUT,
    usersPOST,
    usersDELETE } = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.put('/:id', usersPUT);

router.post('/', usersPOST);

router.delete('/', usersDELETE);

module.exports = router;