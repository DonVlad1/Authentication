const { Router } = require("express")
const { addUser, listUser, userDeleteOne, login } = require("./userController")
const { hashPassword } = require("../middleware")

const userRouter = Router()

userRouter.post("/user", [hashPassword], addUser)
userRouter.get("/user", listUser)
userRouter.delete("/user", userDeleteOne)

userRouter.post("/user/login", login)

module.exports = userRouter