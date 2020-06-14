var devMode = require('../config/config').devMode;
module.exports = function (client) {
    setTimeout(client.refreshActivity = function () {
        var users = client.users;
        client.user.setPresence({
            activity: {
                name: devMode ? 'In Development' : "Jazz for " + users.cache.size + " users",
                type: 'PLAYING'
            },
            status: devMode ? 'dnd' : 'online'
        });
    }, 60 * 60 * 1000);
};
