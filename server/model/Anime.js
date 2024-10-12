import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true
    }  
});

const Anime = mongoose.model('anime', animeSchema);

export default Anime;