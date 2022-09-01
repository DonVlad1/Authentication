const User = require("./userModel")



exports.addUser = async (req, res) => 
{
    try
    {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).send({ user: newUser.name })

    }
    catch (error)
    {
        res.status(500).send({ error: "Oops" })
    }
}