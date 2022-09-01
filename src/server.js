const express = require("express")
require("./db/connection");
const userRouter = require("./users/userRoutes")


const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use(userRouter)

app.listen(port, () =>
{
    console.log(`Now Listening to port ${port}`)
})




