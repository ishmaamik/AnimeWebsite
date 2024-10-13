import React, { useState, useEffect } from 'react';
import { getAnimes } from '../service/api';
import { Box, Typography} from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

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
        <div>
            <h1>Anime List</h1>
            <Box display={'flex'}>
            {animes.length > 0 ? (
                animes.map((anime) => (
                    <div key={anime._id}>
                    <Box padding={2}>
                    
                        <Typography variant="body1" sx={{  whiteSpace: 'normal'}}>{anime.name}</Typography>
                        <Link to={`/animes/${anime.name}`}>
                        <img  height={"350px"} width={"230px"} src={anime.imageUrl} alt={anime.name} />
                        </Link>
                    </Box>
                    </div>
                ))
            ) : (
                <p>No animes found</p>  // Display a fallback if no animes are found
            )}
            </Box>
        </div>
    );
};

export default Home;
