const express = require("express")
require("./db/connection");
const cors = require("cors")
const userRouter = require("./users/userRoutes")
const { tokenCheck } = require("./middleware")
const movieRouter = require("./movie/movieRouter")
const app = express()
const port = process.env.PORT || 3002

app.use(cors())
app.use(express.json())
app.use(movieRouter)
app.use(userRouter)

app.get("/", tokenCheck, (req, res) =>
{
    res.status(200).send({ message: "You should only see this if you are logged in" })
})

app.listen(port, () =>
{
    console.log(`Now Listening to port ${port}`)
})




