import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const TagResults = () => {
    const location = useLocation();
    const { animes } = location.state;  // Retrieve the animes passed via state

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4">Anime List by Tag</Typography>
            {animes.length > 0 ? (
                animes.map((anime) => (
                    <Box key={anime._id} padding={2} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h6">{anime.name}</Typography>
                        <img height="350px" width="230px" src={anime.imageUrl} alt={anime.name} />
                    </Box>
                ))
            ) : (
                <Typography>No animes found for this tag</Typography>
            )}
        </Box>
    );
};

export default TagResults;
