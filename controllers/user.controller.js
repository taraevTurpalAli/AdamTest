const User = require("../Models/User.model")

module.exports.usersControllers = {
    userPost : (req, res) => {
        User.create({
           name : req.body.name
        }).then(() => {
          res.json('Пользователь добавлен')
        })
    },
    userAllGet : (req, res) => {
        User.find({}, (err, data) => {
            if (!err) {
                res.json(data)
            }
        })
    },
    userBooksPatch : (req, res) => {
        const {Books} = req.body
        User.findByIdAndUpdate(req.params.id, {
            $push : {
               Books
            }
        }).then(() => {
           res.json('Пользователь добавил книгу')
        })
    }
}
