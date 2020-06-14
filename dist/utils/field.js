var replaceCommas = function (str) { return ("" + str).replace(/,/g, '\n'); };
module.exports = {
    addTitle: function (info) {
        var description = Object.entries(info).map(function (desc) {
            return "**" + desc[0] + "** - " + desc[1];
        });
        return replaceCommas(description);
    },
    addDescription: function (info) {
        var description = Object.entries(info).map(function (desc) {
            return "" + desc[1];
        });
        return replaceCommas(description);
    },
    addCommand: function (info) {
        var description = Object.entries(info).map(function (desc) {
            return "`$" + desc[0] + "` " + desc[1];
        });
        return replaceCommas(description);
    }
};
