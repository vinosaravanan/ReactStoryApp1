const StoryModel = require("../Model/StoryModel");

const getStory = async (req, res) => {
    let blogs;
    try {
        blogs = await StoryModel.find().populate("user");

    } catch (error) {
        console.log(error);
    }
    if (!blogs) {
        return res.status(404).json({ message: "Blog Not Fount !" })
    }
    return res.status(200).json({ blogs })
}

module.exports = {
    getStory
}