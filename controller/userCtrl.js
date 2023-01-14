const user = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await user.findOne({ email });

    // Check an email address
    if (!findUser) {
        // Create a new user
        const newUser = await user.create(req.body);
        res.json(newUser);
    } else {
        // Send an error message
        throw new Error("User already exists");
    }
}

// Login
// Fetch email and password
const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // Check if user exists or not
    const findUser = await user.findOne({ email });

    if (findUser && await findUser.isPasswordMatched(password)) {
        res.json({
            _id: findUser?._id,
            name: findUser?.name,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id) 
        });
    } else {
        throw new Error("Invalid password")
    }
});


// Get all users' data
const getAllUsersData = asyncHandler(async (req, res) => {
    try {
        const getUsers = await user.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error);
    }
});


module.exports = { createUser, loginUserCtrl, getAllUsersData };