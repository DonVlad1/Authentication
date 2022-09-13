const User = require("./userModel")

exports.listUser = async (req, res) =>
{
    try
    {
        res.status(200).send(await User.find({}))
    } catch (error)
    {
        res.status(500).send(console.log("Failed to list items"))
        console.log(error)
    }

}


exports.userDeleteOne = async (req, res) =>
{
    try
    {
        await User.deleteOne({ name: req.body.name, email: req.body.email, password: req.body.password })
        res.status(200).send(await User.find({}))
    }
    catch (error)
    {

        res.status(500).send(console.log("Failed to list items"))
        console.log(error)
    }

}

exports.userEdit = async (req, res) =>
{
    try
    {
        await User.updateOne({ name: req.body.name, email: req.body.email }, { name: req.body.nameR, email: req.body.emailR })
        res.status(200).send(await User.find({}))
    }
    catch (error)
    {
        res.status(500).send(console.log("Failed to list items"))
        console.log(error)
    }
}

exports.addUser = async (req, res) => 
{
    try
    {
        const newUser = new User(req.body)
        const token = newUser.generateAuthToken()
        await newUser.save()
        res.status(201).send({ user: newUser.name, token })

    }
    catch (error)
    {
        if (error.code === 11000)
        {
            res.status(400).send({ error: "Email already used" })
        }
        else
        {
            res.status(500).send({ error: "Oops" })
        }
    }
}

exports.login = async (req, res) =>
{
    const { email, password } = req.body
    try
    {
        const user = await User.findByCredentials(email, password)
        const token = user.generateAuthToken
        res.status(200).send({ user: user.name, token })
    } catch (error)
    {
        res.status(400).send({ error: error.message })
    }
}