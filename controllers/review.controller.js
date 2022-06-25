const Review = require("../Models/Review.model")
module.exports.reviewsControllers = {
  reviewPost : (req, res) => {
    Review.create({
        text : req.body.text
    }).then(() => {
        res.json('Добавил отзыв')
    })
  }
}