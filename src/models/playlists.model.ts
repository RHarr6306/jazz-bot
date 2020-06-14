import * as mongoose from 'mongoose'

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

export default mongoose.model('Playlists', playlistSchema)
