import mongoose from "mongoose";


const reviewSchema= new mongoose.Schema({
    review:{
        type: String
    },
    userid:{
        type: String,
        required: true
    },
    anime:{
        type: String,
        required: true
    }

});

const Review= mongoose.model('review', reviewSchema);

export default Review;