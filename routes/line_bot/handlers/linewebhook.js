const path = require('path');
const root = path.parse(process.mainModule.filename).dir;
const express = require('express');
const router = express.Router();
const linebot = require('linebot');

const handlers = {
    linewebhook: func_linewebhook
};

const bot = linebot({
    channelId: 1571022185,
    channelSecret: "5fd4598db79ad8103d8cf73f1a1d2b52",
    channelAccessToken: "NVvrrnrM+16RNsA0elsdzAlQ8UMFX+YFENYa5PsnCgpxWiq/0xDKEsoZHGXn367OfsDNs0YIvRICuI/O7sG0VROoJ6PzSclbqXoPLxvOsStpKjDi/QVuHpNeARHm0y8l5tald+Wz9kAybOsksEOqjwdB04t89/1O/w1cDnyilFU="
});

async function func_linewebhook(req, res) {
    bot.parse(req.body);
    return res.json({});
}

bot.on('message', function (event) {
    console.log(event);
    event.reply("你的訊息是:"+event.message.text).then(function (data) {
        console.log('Success', data);
    }).catch(function (error) {
        console.log('Error', error);
    });
});

module.exports = handlers;
