const { Router } = require("express")
const { addUser } = require("./userController")

const userRouter = Router()

userRouter.post("/user/signup", addUser)

module.exports = userRouter