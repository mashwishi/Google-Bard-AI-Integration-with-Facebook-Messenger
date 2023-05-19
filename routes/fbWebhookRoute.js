const express = require('express');
const router = express.Router();
require('dotenv').config();

const { chatCompletion } = require('../helper/bardApi');
const { sendMessage } = require('../helper/messengerApi');

router.get('/', (req, res) => {
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
  if (mode && token) {
    if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});

router.post('/', async (req, res) => {

  try {
    let body = req.body;
    console.log(req.body)
    let requestType = body.object;
    let senderId = body.entry[0].messaging[0].sender.id;
    let query = body.entry[0].messaging[0].message.text;
    let result = await chatCompletion(query, senderId);
    await sendMessage(senderId, result.response);
  } catch (error) {
    console.log(error);
  }
  res.status(200).send('OK');
});

module.exports = {
  router
};
