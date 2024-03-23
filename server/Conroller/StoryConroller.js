const StoryModel = require("../Model/StoryModel");
const User = require("../Model/UserModel");

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

const CreateStory = async (req, res) => {
    const {title, description, image, user} = req.body;

    let existingUser;
    try {
        existingUser = await User.findById(user)
    } catch (error) {
       return console.log(error);
    }
    if(!existingUser){
        return res.status(400).json({message:"Unable to Find User by This Id"})
    }

    const story = new StoryModel({
        title,
        description,
        image,
        user,
    })
    try {
       const session = await mongoose.startSession();
       session.startTransaction();
       await story.save({session});
       existingUser.blogs.push(story);
       await existingUser.save({session});
       await session.commitTransaction();

    } catch (error) {
         console.log(error);
         return res.status(500).json({message:error})
    }

    return res.status(200).json({story})
}

module.exports = {
    getStory,
    CreateStory
}