const Router = require('express');
const router = Router()

const { booksControllers } = require('../controllers/book.controller')

router.post('/books', booksControllers.bookPost)
router.get('/books', booksControllers.bookAllGet)
router.patch('/books/reviews/:id', booksControllers.AddBookReviews)



module.exports = router