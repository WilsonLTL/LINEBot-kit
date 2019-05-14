const path = require('path');
const root = path.parse(process.mainModule.filename).dir;
const express = require('express');
const router = express.Router();
const linebot = require('linebot');
require('custom-env').env();

const handlers = {
    push_message: push_message
};

const bot = linebot({
    channelId: process.env.LINE_BOT_CHANNELID,
    channelSecret: process.env.LINE_BOT_CHANNEL_SECRET,
    channelAccessToken: process.env.LINE_BOT_CHANNEL_ACCESS_TOKEN
});

async function push_message(req, res) {
    console.log("Send:",req.body.userID);
    bot.push(req.body.userID, [req.body.message]);
    res.send({status:true})
}

module.exports = handlers;
