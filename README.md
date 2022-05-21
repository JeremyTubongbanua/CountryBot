# CountryBot

GryphHacks2022 submission - CountryBot is a discord bot that offers easy user-to-country management with some fun games and quizzes.

## Developer Notes

`discord.js`
1. Run `npm i discord.js` to install the discord.js npm library. (See https://discord.js.org/#/docs)
2. For slash commands, do `npm install @discordjs/builders @discordjs/rest discord-api-types` (See https://discordjs.guide/creating-your-bot/creating-commands.html#registering-commands)

`package.json`

```json
  "main": "index.js", // add this line so `node .` will work
```

`discordapp.com/developers`
Setup for bot:
1. Create an application (Eg: GryphHacks2022)
2. Create a bot (Eg: CountryBot)
3. Reset Token (might need 2FA from Google Authenticator)
4. OAuth2 URL Generator -> scopes: bot and applications.commands -> bot permissions: administrator
5. Paste the generated URL into a browser and invite it to your server

`.env`
```
1. Add .env file in root folder
2. Set TOKEN=abc123 // where abc123 is your token
3. npm i dotenv
4. Initialize with require('dotenv').config()
5. Use process.env.TOKEN == abc123
```
