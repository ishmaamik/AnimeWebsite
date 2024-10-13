import { useEffect, useState } from "react";
import { getAnimeName } from "../service/api";
import { useParams } from "react-router-dom";

const OneAnime = () => {
    const { animename } = useParams();  // Correctly extract animeName from the URL
    const [anime, setAnime] = useState(null);  // The state variable should be 'anime'
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

        fetchAnime();  // Call the function
    }, [animename]);  // Correct dependency, should be animeName

    if (loading) return <p>Loading...</p>;
    if (!anime) return <p>No anime found</p>;

    return (
        <div>
            <h1>{anime.name}</h1>
            <img height="350px" width="230px" src={anime.imageUrl} alt={anime.name} />
            <p>{anime.description}</p>
        </div>
    );
};

export default OneAnime;
