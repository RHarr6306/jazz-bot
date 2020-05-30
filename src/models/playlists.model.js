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
                songs: [
                    {
                        name: 'Rick Astley - Never Gonna Give You Up',
                        length: '3:32',
                        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                    }
                ]
            }
        ]
    }

    +playlist create private "my groovy toons"
    +playlist add link
    +playlist view my groovy toons

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
