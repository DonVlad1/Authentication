const { Router } = require("express")
const { addUser, listUser, userDeleteOne, userEdit, login } = require("./userController")
const { hashPassword, tokenCheck } = require("../middleware")

const userRouter = Router()

userRouter.post("/user", [hashPassword], addUser)
userRouter.get("/user", [tokenCheck], listUser)
userRouter.delete("/user", [tokenCheck], userDeleteOne)
userRouter.put("/user", [tokenCheck], userEdit)

userRouter.post("/user/login", login)

module.exports = userRouter