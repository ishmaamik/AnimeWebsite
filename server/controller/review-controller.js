import Review from "../model/Review.js";

export const postReview=async(req, res)=>{
    try{
        const {review, userid, anime}= req.body;

        if(!userid || !anime){
            res.status(400).json({message:"user id and anime must required"});
        }

        const newReview= new Review({
            review,
            userid,
            anime
        });
        await newReview.save();

        return res.status(201).json({ message: "Review posted successfully!", review: newReview });
    }
    catch(error){
        return res.status(500).json({ message: "Error posting review", error: error.message });
    }
}

export const getReview= async(req, res)=>{
    try{
        const {anime}= req.params;

        if (!anime) {
            return res.status(400).json({ message: "Anime is required to get reviews" });
        }


        const reviews= await Review.find({anime});

        if(reviews.length===0){
            res.status(404).json({message: "No reviews yet"});
        }

        return res.status(200).json(reviews);  
    }
    catch(error){
        return res.status(500).json({message:"server error",error: error.message});
    }
}