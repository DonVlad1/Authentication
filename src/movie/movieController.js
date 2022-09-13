const Movies = require("./movieModel");

exports.listMovie = async (req, res) =>
{
    try
    {
        res.status(200).send(await Movies.find({}))
    } catch (error)
    {
        console.log("Failed to list items")
        console.log(error)
    }

}


exports.movieDeleteOne = async (req, res) =>
{
    try
    {
        await Movies.deleteOne({ title: req.body.title, actor: req.body.actor })
        res.status(200).send(await Movies.find({}))
    } catch (error)
    {

        res.status(200).send(console.log("Failed to list items"))
        console.log(error)
    }

}

exports.movieEdit = async (req, res) =>
{
    try
    {
        await Movies.updateOne({ title: req.body.title, actor: req.body.actor }, { title: req.body.titleR, actor: req.body.actorR })
        res.status(200).send(await Movies.find({}))
    } catch (error)
    {
        res.status(200).send(console.log("Failed to list items"))
        console.log(error)
    }
}


exports.addMovie = async (req, res) =>
{
    try
    {
        if (req.body.title && req.body.actor)
        {

            await Movies.create({ title: req.body.title, actor: req.body.actor })
            res.status(200).send(await Movies.find({}))
        }
        else
        {
            console.log("no title or actor found")
            res.status(400).send({ error: "no title or actor found" })
        }
    } catch (e)
    {
        console.log("error in add movie")
        res.status(500).send({ error: "internal server error" })
        console.log(e)

    }
}