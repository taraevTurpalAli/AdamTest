const Router = require('express');
const router = Router()

const { usersControllers } = require('../controllers/user.controller')

router.post('/users', usersControllers.userPost)
router.get('/users', usersControllers.userAllGet)
router.patch('/user/books/:id', usersControllers.userBooksPatch)


module.exports = router