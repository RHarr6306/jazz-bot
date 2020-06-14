var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var MessageEmbed = require('discord.js').MessageEmbed;
var _a = require('../config/config'), colors = _a.colors, version = _a.version;
var description = 'Missing arguments: `+playlist <create|view|add>`';
var statusColor = colors.red;
var addSongDesc = function (songs) {
    songs.forEach(function (_a, i) {
        var name = _a.name, length = _a.length, link = _a.link;
        var songDesc = i + 1 + " - [**" + name + "**](" + link + ") - " + length + "\n";
        if (description.length + songDesc.length < 2000) {
            return description += songDesc;
        }
    });
};
var createPlaylist = function (msg, client, args) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        statusColor = colors.yellow;
        return [2, description = 'Coming soon.'];
    });
}); };
var updatePlaylist = function (msg, client, args) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        statusColor = colors.yellow;
        return [2, description = 'Coming soon.'];
    });
}); };
var fetchPlaylist = function (msg, client, args) { return __awaiter(_this, void 0, void 0, function () {
    var models, logger, playlistName, collection, playlists, songsList, songs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                args.shift();
                if (!args.length)
                    return [2, description = 'Not found: `+playlist view <name>`'];
                statusColor = colors.yellow;
                models = client.models, logger = client.logger;
                playlistName = args.join(' ');
                return [4, models.playlists.findOne({
                        id: msg.author.id
                    }, function (err) {
                        if (err) {
                            logger.log('Unable to fetch playlist.', 'error');
                        }
                    })];
            case 1:
                collection = _a.sent();
                if (!collection)
                    return [2, description = 'You have no playlists!'];
                playlists = collection.playlists;
                songsList = playlists.filter(function (playlist) { return playlist.name === playlistName; });
                if (!songsList.length) {
                    statusColor = colors.red;
                    return [2, description = 'Playlist not found.'];
                }
                songs = songsList[0].songs;
                if (songs) {
                    description = '';
                    statusColor = colors.green;
                    return [2, addSongDesc(songs)];
                }
                else
                    return [2, description = 'Songs not found.'];
                return [2];
        }
    });
}); };
module.exports = function (msg, client, args) { return __awaiter(_this, void 0, void 0, function () {
    var playlistEmbed, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                playlistEmbed = new MessageEmbed()
                    .setColor(colors.green)
                    .setAuthor('Playlist', msg.author.avatarURL())
                    .setTimestamp(new Date())
                    .setFooter("JazzBot v" + version);
                if (!args[0]) {
                    playlistEmbed
                        .setColor(colors.red)
                        .setDescription('Missing arguments: `+playlist <create|view|add>`');
                    description = '';
                    return [2, msg.channel.send(playlistEmbed)];
                }
                _a = args[0];
                switch (_a) {
                    case 'create': return [3, 1];
                    case 'add': return [3, 3];
                    case 'view': return [3, 5];
                }
                return [3, 7];
            case 1: return [4, createPlaylist(msg, client, args)];
            case 2:
                _b.sent();
                return [3, 7];
            case 3: return [4, updatePlaylist(msg, client, args)];
            case 4:
                _b.sent();
                return [3, 7];
            case 5: return [4, fetchPlaylist(msg, client, args)];
            case 6:
                _b.sent();
                return [3, 7];
            case 7:
                playlistEmbed
                    .setDescription(description)
                    .setColor(statusColor);
                description = '';
                statusColor = colors.red;
                return [2, msg.channel.send(playlistEmbed)];
        }
    });
}); };
