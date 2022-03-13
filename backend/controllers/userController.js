const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to create the user");
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    const foundUser = await User.findOne({ email });

    if (foundUser && (await foundUser.matchPassword(password))) {
        res.json({
            _id: foundUser._id,
            name: foundUser.name,
            email: foundUser.email,
            pic: foundUser.pic,
            token: generateToken(foundUser._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    }
});

// /api/user?search=skpsashi
const allUsers = asyncHandler(async (req, res) => {
    const searchQueryParam = req.query.search
        ? {
              $or: [
                  { name: { $regex: req.query.search, $options: "i" } },
                  { email: { $regex: req.query.search, $options: "i" } },
              ],
          }
        : {};

    const users = await User.find(searchQueryParam).find({
        _id: { $ne: req.user._id },
    });
    res.send(users);
});

module.exports = { registerUser, authUser, allUsers };
