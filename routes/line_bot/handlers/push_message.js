const path = require('path');
const root = path.parse(process.mainModule.filename).dir;
const express = require('express');
const router = express.Router();
const linebot = require('linebot');

const handlers = {
    push_message: push_message
};

const bot = linebot({
    channelId: 1571022185,
    channelSecret: "5fd4598db79ad8103d8cf73f1a1d2b52",
    channelAccessToken: "NVvrrnrM+16RNsA0elsdzAlQ8UMFX+YFENYa5PsnCgpxWiq/0xDKEsoZHGXn367OfsDNs0YIvRICuI/O7sG0VROoJ6PzSclbqXoPLxvOsStpKjDi/QVuHpNeARHm0y8l5tald+Wz9kAybOsksEOqjwdB04t89/1O/w1cDnyilFU="
});

async function push_message(req, res) {
    console.log(req.body.userID)
    bot.push(req.body.userID, [req.body.message]);
    res.send({status:true})
}

module.exports = handlers;
