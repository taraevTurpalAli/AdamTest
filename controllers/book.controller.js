const Book = require("../Models/Book.model")
module.exports.booksControllers = {
    bookPost : (req, res) => {
     const {title, price, reviews} = req.body
      Book.create({
        title,
        price,
        reviews
      }).then(() => {
        res.json('Книга добавлена!')
      })
    },
    bookAllGet : (req, res) => {
        Book.find({}, (err, data) => {
            if (!err) {
                res.json(data)
            }
        })
    },
    AddBookReviews : (req, res) => {
        const {id} = req.params
        const {text, userId} = req.body
        Book.findByIdAndUpdate(id, {
        $push : {
            reviews : {
                text,
                userId
            }
        } 
      }).then(() => {
        res.json(`Отзыв оставлен пользователем ${id}`)
      })
    }
}