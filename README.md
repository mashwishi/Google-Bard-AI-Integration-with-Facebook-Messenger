<br />
<div align="center">
<br />
  <a href="https://github.com/mashwishi">
    <img src="https://i.imgur.com/ajKhoi4.png" alt="Logo" width="300">
  </a>
<br /><br />
  <h3 align="center">Google Bard AI Integration with Facebook Messenger</h3>
  <p align="center">
This repository provides a guide and code samples for connecting Google's Bard AI to Facebook Messenger. By integrating these two powerful platforms, you can enhance your Messenger chatbots with advanced natural language processing capabilities offered by Google Bard AI.
   <br/><br/>
   Project Visitor Count<br>
   <img src="https://profile-counter.glitch.me/Google-Bard-AI-Integration-with-Facebook-Messenger/count.svg" />
   <br/><br/>
  </p>
</div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

## Introduction
The goal of this project is to leverage Google Bard AI, a state-of-the-art natural language generation model developed by Google, and integrate it with Facebook Messenger. By doing so, you can provide your Messenger chatbot with the ability to generate human-like responses and engage in more meaningful conversations with users.

## Installation
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
VERIFY_TOKEN=<create-your-own-token-this-is-for-webhook-verification>
PAGE_ID=

#Required Port
PORT=5000
```

## Google Setup
1. Login to [bard.google.com](https://bard.google.com/) and get access
2. Get __Secure-1PSID= using this Extension: [Cookie Editor](https://cookie-editor.cgagnier.ca/)

## Facebook Setup
1. Login to [Facebook Developer](https://developers.facebook.com/apps/)
2. Create an app and select "Other"
3. Select an app type to "Business" since you need Graph API and Messenger
4. Fill out the app name, support email and makesure you have Business Account
5. Now go to app settings then basic, Fill up: Privacy Policy URL, Icon, and Category to "Messaging"
6. Now click "add product" select "Webhooks" and "Messenger"
7. Go to "Messenger" > "Settings" then add your page where you want to use the chat bot 
8. Once page is created or added, click generate token copy it and paste it on enviroment file under "TOKEN="
9. Create/Add a "Callback URL", Now you have to add your domain where the node project is hosted then add "/facebook"
```.env
#Example, Please make sure to add /facebook. This is a webhook
https://yourdomain.com/facebook
```
10. Under Verify token, paste your created token make sure the "VERIFY_TOKEN" under your enviroment file is same.
11. After successfully adding the webhook you will see a page ID under your page name copy it and paste it to "PAGE_ID="
12. In "Webhooks" press edit > Subscription Fields, Select: messages, messaging_postbacks (You don't have to select version the api graph api do the work in the project)
13. You're done!

## Important Note
To allow other users to get access or respond from the bot make sure `pages_messaging` permision is approved by Facebook. It can be found at App Review > Permissions and Feature.


### Built With

This section list of major things that we used to this project.

[![Javascript][javascript]][javascript-url]

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

[contributors-shield]: https://img.shields.io/github/contributors/mashwishi/Mechi-Messenger.svg?style=for-the-badge
[contributors-url]: https://github.com/mashwishi/Mechi-Messenger/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mashwishi/Mechi-Messenger.svg?style=for-the-badge
[forks-url]: https://github.com/mashwishi/Mechi-Messenger/network/members
[stars-shield]: https://img.shields.io/github/stars/mashwishi/Mechi-Messenger.svg?style=for-the-badge
[stars-url]: https://github.com/mashwishi/Mechi-Messenger/stargazers
[issues-shield]: https://img.shields.io/github/issues/mashwishi/Mechi-Messenger.svg?style=for-the-badge
[issues-url]: https://github.com/mashwishi/Mechi-Messenger/issues
[license-shield]: https://img.shields.io/github/license/mashwishi/Mechi-Messenger.svg?style=for-the-badge
[license-url]: https://github.com/mashwishi/Mechi-Messenger/blob/main/LICENSE

[javascript]: https://img.shields.io/badge/Javascript-EAD51C?style=for-the-badge&logo=Javascript&logoColor=01001F
[javascript-url]: https://youtu.be/dQw4w9WgXcQ
