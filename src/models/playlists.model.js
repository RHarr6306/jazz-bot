const mongoose = require('mongoose')

/*
    Example:

    {
        username: "LeSirH",
        id: "296862365503193098",
        playlists: [
            {
                public: true,
                name: "my groovy toons",
                songs: ["link1", "link2"]
            }
        ]
    }

    +playlist create private "my groovy toons"
    +playlist add link
    +playlist my groovy toons

*/

const playlistSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    playlists: {
        type: Array,
        required: false,
        default: []
    }
})

module.exports = mongoose.model('Playlists', playlistSchema)
