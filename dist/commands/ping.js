module.exports = function (msg, client, args) { return msg.reply("Pong! **" + Math.round(client.ws.ping) + "**ms"); };
