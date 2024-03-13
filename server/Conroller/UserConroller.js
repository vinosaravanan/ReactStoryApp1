const { hashpassword, comparepassword } = require("../Helpers/AuthHelper");
const User = require("../Model/UserModel");


const getUsers = async (req, res) => {
    let users;
    try {
        users = await User.find();
    } catch (error) {
        console.log(error);
    }
    if (!users) {
        return res.status(404).json({ message: "users not fount" })
    }
    return res.status(201).json({ users })

}

const SignupUsers = async (req, res) => {
     console.log(req);
    const {name, email,password } = req.body;

    let exiStinguser;

    try {
       
        exiStinguser = await User.findOne({ email })
    } catch (error) {
        return console.log(error);
    }
    if (exiStinguser) {
        return res.status(400).json({ message: "Alredy exists ! login insted" })
    }
    const hashedPassword =  await hashpassword(password)

    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs:[],
    });
    try {
        await user.save();

    } catch (error) {
        return console.log(error);
    }
    return res.status(201).json({ user })
}

const LoginUsers = async (req, res) => {

    const { email, password } = req.body;
    let exiStingUser;
    try {
        exiStingUser = await User.findOne({ email })
    } catch (error) {
        console.log(error);
    }
    if (!exiStingUser) {
        return res.status(404).json({ message: "cound't Fount User by This Email" })
    }
    const ispasswordcurret = await comparepassword(password, exiStingUser.password)
    if (!ispasswordcurret) {
        return res.status(400).json({ message: "InCorred password" })
    }
    return res.status(200).json({ message: "Login succssFull", user:exiStingUser })
}

module.exports = {
    getUsers,
    SignupUsers,
    LoginUsers
}