var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _this = this;
var chalk = require('chalk');
var moment = require('moment');
exports.log = function (content, type) {
    if (type === void 0) { type = 'log'; }
    var timestamp = "[" + moment().format('YYYY-MM-DD HH:mm:ss') + "]";
    var format = timestamp + " [" + type.toUpperCase() + "]: " + content;
    switch (type) {
        case 'log': return console.log(chalk.white(format));
        case 'warn': return console.log(chalk.rgb(255, 150, 150)(format));
        case 'error': return console.log(chalk.redBright(format));
        case 'cmd': return console.log(chalk.white(format));
        case 'ready': return console.log(chalk.rgb(150, 255, 150)(format));
    }
};
exports.error = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _this.log.apply(_this, __spreadArrays(args, ['error']));
};
exports.warn = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _this.log.apply(_this, __spreadArrays(args, ['warn']));
};
exports.cmd = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _this.log.apply(_this, __spreadArrays(args, ['cmd']));
};
exports.ready = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _this.log.apply(_this, __spreadArrays(args, ['ready']));
};
