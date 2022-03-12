const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
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

schema.methods.matchPassword = async function (enteredpassword) {
    return await bcrypt.compare(enteredpassword, this.password);
};

schema.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    console.log(this.password);
});

const User = mongoose.model("User", schema);

module.exports = User;
