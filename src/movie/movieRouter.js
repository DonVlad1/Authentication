const { Router } = require("express")
const movieRouter = Router()
const { listMovie, addMovie, movieDeleteOne, movieEdit } = require("./movieController")
const { tokenCheck } = require("../middleware")

movieRouter.get("/movie", [tokenCheck], listMovie)

movieRouter.post("/movie", [tokenCheck], addMovie)

movieRouter.delete("/movie", [tokenCheck], movieDeleteOne)

movieRouter.put("/movie", [tokenCheck], movieEdit)


module.exports = movieRouter;