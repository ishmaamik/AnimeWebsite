import mongoose from "mongoose";


const reviewSchema= new mongoose.Schema({
    review:{
        type: String
    },
    username:{
        type: String,
        required: true
    },
    animename:{
        type: String,
        required: true
    }

});

const Review= mongoose.model('review', reviewSchema);

export default Review;