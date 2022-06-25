const Router = require('express');
const router = Router()

const { reviewsControllers } = require('../controllers/review.controller')

router.post('/reviews', reviewsControllers.reviewPost)


module.exports = router