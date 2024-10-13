import { Button, TextField, Box } from "@mui/material";
import { useContext, useState } from "react";
import { postReview } from "../service/api";


const Review = ({ animename, username, addNewReview}) => {
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
            addNewReview(reviewData);  
            setReview("");  // Clear the text field after posting
        } catch (error) {
            console.log('Error during posting review', error);
        }
    };

    return (
        <>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} width="100%">
        <TextField
             style={{backgroundColor:"white", outlineColor:"white"}}
             value={review}
             onChange={(e) => setReview(e.target.value)}
             label="Write your review"
        />
        <Button onClick={postingReview} variant="contained" sx={{ mt: 1 }}>
            Post Review
        </Button>
    </Box>
        </>
    );
};

export default Review;
