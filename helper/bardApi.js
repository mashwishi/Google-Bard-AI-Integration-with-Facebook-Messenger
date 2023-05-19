require('dotenv').config();

const chatCompletion = async (prompt) => {

    try {

        let cookies = process.env.BARD_COOKIES;

        let importDynamic = new Function('modulePath', 'return import(modulePath)')
        const { Bard } = await importDynamic("googlebard")
        
        let bot = new Bard(cookies, {
            //inMemory: false, 
            //savePath: "./conversations.json", 
            // proxy: {
            //     host: process.env.PROXY_HOST,
            //     port: process.env.PROXY_PORT,
            //     auth: {
            //         username: process.env.PROXY_USERNAME,
            //         password: process.env.PROXY_PASSWORD,
            //     },
            //     protocol: "http",
            // },
        });

        let content = await bot.ask(prompt);

        return {
            status: 1,
            response: content
        };
    } catch (error) {
        return {
            status: 0,
            response: ''
        };
    }
};

module.exports = {
  chatCompletion
};
