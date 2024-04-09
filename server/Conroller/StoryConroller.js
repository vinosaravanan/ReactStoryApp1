const StoryModel = require("../Model/StoryModel");
const User = require("../Model/UserModel");
const mongoose = require('mongoose') 

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

const UpdateStory = async (req, res) => {
    
    const{title, description} = req.body;
    const storyId = req.params.id;
    console.log(storyId);
    let story;
    try {
        story = await StoryModel.findByIdAndUpdate(storyId, {
            title,
            description
        })
    } catch (error) {
        console.log(error);
    }
    if(!story){
        return res.status(500).json({message:"unable to the blog"})
    }
   return res.status(200).json({story})

}

const getStoryById = async (req, res) => {
    const id = req.params.id;
    let story;
    try {
        story = await StoryModel.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!story){
        return res.status(404).json({message:"No Blog Found"})
    }
    return res.status(200).json({story})
}

const deleteStory = async (req, res) => {
    const id = req.params.id;
    let story;
    try {
        story = await StoryModel.findByIdAndDelete(id).populate("user");
        await blog.user.blogs.pull(blog);
        await blog.user.save()
    } catch (error) {
        console.log(error);
    }
    if(!story){
        return res.status(404).json({Message: "Unable to Delete"})
    }
    return res.status(200).json({message: "succssFully delete"})
}

const getUsersAllStory = async (req, res) => {
    const userId = req.params.id;
    let userStory;
    try {
       userStory = await User.findById(userId).populate("blogs")

    } catch (error) {
        console.log(error);
    }
    if(!userStory){
        return res.status(404).json({message:"No Blog Fount"})
    }
    return res.status(200).json({user:userStory})
}

module.exports = {
    getStory,
    CreateStory,
    UpdateStory,
    getStoryById,
    deleteStory,
    getUsersAllStory
}