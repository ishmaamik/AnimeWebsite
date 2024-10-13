import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { postReview } from "../service/api";

const Review = ({ animename, username }) => {
    const [review, setReview] = useState("");

    const postingReview = async () => {
        const reviewData = {
            animename: animename,  // This needs to be consistent with the backend
            review: review,
            username: username
        };
        try {
            await postReview(reviewData);
            console.log(`Posting review successful`);
            setReview('');  // Clear the text field after posting
        } catch (error) {
            console.log('Error during posting review', error);
        }
    };

    return (
        <>
            <TextField
                value={review}
                onChange={(e) => setReview(e.target.value)}
                label="Write your review"
                fullWidth
                multiline
            />
            <Button onClick={postingReview} variant="contained">
                Post Review
            </Button>
        </>
    );
};

export default Review;
