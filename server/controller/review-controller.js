import Review from "../model/Review.js";

export const postReview = async (req, res) => {
    try {
        const { review, username, animename } = req.body;

        // Validate required fields
        if (!username || !animename || !review) {
            return res.status(400).json({ message: "Username, anime name, and review are required" });
        }

        // Create a new review
        const newReview = new Review({
            review,
            username,
            animename
        });

        // Save the review to the database
        await newReview.save();

        // Send response after review is successfully saved
        return res.status(201).json({ message: "Review posted successfully!", review: newReview });
    } catch (error) {
        return res.status(500).json({ message: "Error posting review", error: error.message });
    }
};


export const getReview = async (req, res) => {
    try {
        const { animename } = req.params;

        if (!animename) {
            return res.status(400).json({ message: "Anime name is required to get reviews" });
        }

        // Find reviews for the anime with the given animename
        const reviews = await Review.find({ animename });

        if (reviews.length === 0) {
            return res.status(404).json({ message: "No reviews yet" });  // Return after sending the response
        }

        return res.status(200).json(reviews);  // Return the reviews if found
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });  // Return after catching the error
    }
};