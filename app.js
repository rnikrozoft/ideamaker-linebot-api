'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
const app = express();
const func = require('./func.js');

//----------------------------------------------------------------------------------------------------------------------------------------------------
const bot1_conf = {
    channelAccessToken: "", //get in line OA or line dev
    channelSecret: "" //get in line OA or line dev
};
const bot1 = new line.Client(bot1_conf);
app.post('/ideamaker', line.middleware(bot1_conf), (req, res) => {
    Promise
        .all(req.body.events.map((event) => func.handleEvent(event, bot1)))
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
});


// listen on port-------------------------------------------------------------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});