const mongoose = require("mongoose");
const default_profile_pic = require("mongoose");

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        picture: {
            type: String,
            required: true,
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
    { timestamps: true }
);
const User = mongoose.model("User", schema);

module.exports = User;
