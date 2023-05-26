# Google Bard AI Integration with Facebook Messenger
Welcome to the Google Bard AI - Facebook Messenger Integration repository! This repository provides a guide and code samples for connecting Google's Bard AI to Facebook Messenger. By integrating these two powerful platforms, you can enhance your Messenger chatbots with advanced natural language processing capabilities offered by Google Bard AI.

## Introduction
The goal of this project is to leverage Google Bard AI, a state-of-the-art natural language generation model developed by Google, and integrate it with Facebook Messenger. By doing so, you can provide your Messenger chatbot with the ability to generate human-like responses and engage in more meaningful conversations with users.

Installation
To get started, follow these steps to set up the integration:

1. Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/mashwishi/Mechi-Messenger.git 
```
2. Install the required dependencies by running the following command:
```bash
npm install
```
4. Rename to `.env.sample` to `.env` or `.env.local` then update it
```.env
#Bard Session
BARD_COOKIES=__Secure-1PSID=

#Proxy
PROXY_HOST=
PROXY_PORT=
PROXY_USERNAME=
PROXY_PASSWORD=

#Facebook
TOKEN=
VERIFY_TOKEN=
PAGE_ID=

#Required Port
PORT=5000
```

## Important Note
To allow other users to get access or respond from the bot make sure `pages_messaging` permision is approved by Facebook. It can be found at App Review > Permissions and Feature.
