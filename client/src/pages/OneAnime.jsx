import { useEffect, useState, useContext } from "react";
import { getAnimeName, getReviews } from "../service/api";
import { useParams } from "react-router-dom";
import Review from "./Review";
import { UserContext } from "./UserContext";
import { Typography, Box } from "@mui/material";


const OneAnime = () => {
    const { animename } = useParams();  // Correctly extract animeName from the URL
    const {username}= useContext(UserContext);
    const [anime, setAnime] = useState(null);  // The state variable should be 'anime'
    const [reviews, setReviews]= useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const fetchedAnime = await getAnimeName(animename);  // Fetch anime by name
                setAnime(fetchedAnime);  // Set the fetched anime object
            } catch (error) {
                console.log('Error fetching anime:', error);
            } finally {
                setLoading(false);  // Set loading to false
            }
        };

        const fetchReviews=async()=>{
            try{
                const fetchedReviews= await getReviews(animename);
                setReviews(fetchedReviews);

            }
            catch(error){{
                console.log('Error fetching anime:', error);
            }}
        }

        fetchAnime();  // Call the function
        fetchReviews();
    }, [animename]);  // Correct dependency, should be animeName

    const addNewReview = (newReview) => {
        setReviews((prevReviews) => [...prevReviews, newReview]);  // Add the new review to the existing reviews
    };

    if (loading) return <p>Loading...</p>;
    if (!anime) return <p>No anime found</p>;

    return (
        <div>
            <Box display={"flex"}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="10vh"
            overflow={"hidden"}>
                
                <Box display={"flex"} >
                <Box>
            <h1>{anime.name}</h1>
            <img height="350px" width="230px" src={anime.imageUrl} alt={anime.name} />
            <p style={{maxWidth:"430px", maxHeight:"100px"}}>{anime.description}</p>
            </Box>
            <Box pl={20} pt={12}>
                <Typography>Reviews:</Typography>
            {reviews.length > 0 ? 
            ( reviews.map((review) => (
                    <div key={review._id}>
                    <Box paddingLeft={2} display={"flex"}>
                    
                        <Typography variant="body1" sx={{  whiteSpace: 'normal'}}>{review.username}:</Typography>
                        <Typography>{review.review}</Typography>

                    </Box>
                    </div>
                ))
            )
            : (
                <p>No reviews found</p>  // Display a fallback if no animes are found
            )}
                </Box>
                </Box>
                </Box>
                <Box display="flex" justifyContent="center" mt={2} >
            <Review animename={anime.name} username={username} addNewReview={addNewReview} />
            </Box>
        </div>
    );
};

export default OneAnime;
