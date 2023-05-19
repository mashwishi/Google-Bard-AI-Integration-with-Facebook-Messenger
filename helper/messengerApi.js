const axios = require('axios');
require('dotenv').config();

const TOKEN = process.env.TOKEN;
const PAGE_ID = process.env.PAGE_ID;

const sendTypingIndicator = async (senderId, senderAction) => {
  let options = {
    method: 'POST',
    url: `https://graph.facebook.com/v11.0/${PAGE_ID}/messages`,
    params: {
      access_token: TOKEN,
    },
    data: {
      recipient: {
        id: senderId
      },
      sender_action: senderAction
    }
  };

  await axios.request(options);
};

const sendMessage = async (senderId, message) => {
  await sendTypingIndicator(senderId, 'typing_on');

  let options = {
    method: 'POST',
    url: `https://graph.facebook.com/v11.0/${PAGE_ID}/messages`,
    params: {
      access_token: TOKEN,
    },
    data: {
      recipient: {
        id: senderId
      },
      messaging_type: 'RESPONSE',
      message: {
        text: message
      }
    }
  };

  let response = await axios.request(options);

  if (response['status'] == 200 && response['statusText'] === 'OK') {
    await sendTypingIndicator(senderId, 'typing_off');
    return 1;
  } else {
    return 0;
  }
};

module.exports = {
  sendMessage
};
