const path = require('path');
const root = path.parse(process.mainModule.filename).dir;
const express = require('express');
const router = express.Router();
const linebot = require('linebot');
require('custom-env').env();

const handlers = {
    linewebhook: func_linewebhook
};

const bot = linebot({
    channelId: process.env.LINE_BOT_CHANNELID,
    channelSecret: process.env.LINE_BOT_CHANNEL_SECRET,
    channelAccessToken: process.env.LINE_BOT_CHANNEL_ACCESS_TOKEN
});

async function func_linewebhook(req, res) {
    bot.parse(req.body);
    return res.json({});
}

bot.on('message', function (event) {
    event.reply("你的訊息是:"+event.message.text).then(function (data) {
        console.log('Success', data);
    }).catch(function (error) {
        console.log('Error', error);
    });
});

module.exports = handlers;
