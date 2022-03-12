const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        isGroupChat: { type: Boolean, default: false },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        chatName: { type: String, trim: true },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
    },
    { timestamps: true }
);
const Chat = mongoose.model("Chat", schema);

module.exports = Chat;
