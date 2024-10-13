import React, { useState, useEffect } from 'react';
import { getAnimes } from '../service/api';
import { Box, Typography} from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import TagButtons from './TagButtons';

const Home = () => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const animeList = await getAnimes(); 
                setAnimes(animeList); 
            } catch (error) {
                console.log('Error fetching animes:', error);
            }
        };

        fetchAnimes();
    }, []);

    return (
        <Box 
            // display="flex" 
            // flexDirection="column" 
            // justifyContent="center" 
            // alignItems="center" 
            pt={4}
            maxHeight="100vh"  // Set a max height for the component (adjust as per your design)
            overflow="hidden"  // Enable vertical scrolling
            // width="100%"
            // padding={2}
        >
            <Typography variant="h4">Anime List</Typography>
            <TagButtons/>
            <Box display={'flex'} overflow={'auto'} pt={4} whiteSpace="nowrap">
            {animes.length > 0 ? (
                animes.map((anime) => (
                    <div key={anime._id}>
                    <Box padding={2}>
                    
                        <Typography variant="body1" sx={{  whiteSpace: 'normal'}}>{anime.name}</Typography>
                        <Link to={`/animes/${anime.name}`}>
                        <img  height={"330px"} width={"200px"} src={anime.imageUrl} alt={anime.name} />
                        </Link>
                    </Box>
                    </div>
                ))
            ) : (
                <p>No animes found</p>  // Display a fallback if no animes are found
            )}
            </Box>
        </Box>
    );
};

export default Home;
