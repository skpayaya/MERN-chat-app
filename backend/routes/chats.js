var express = require("express");
var chats = require("../data/data");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.send(chats);
});

router.get("/:id", function (req, res, next) {
    // console.log(req.params.id);
    const findId = req.params.id;
    const singleChat = chats.find((chat) => chat._id === findId);
    // console.log(singleChat);
    res.send(singleChat);
});

module.exports = router;
