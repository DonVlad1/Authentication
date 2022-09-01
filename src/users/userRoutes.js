const { Router } = require("express")
const { addUser } = require("./userController")
const { hashPassword } = require("../middleware")

const userRouter = Router()

userRouter.post("/user/signup", [hashPassword], addUser)

module.exports = userRouter