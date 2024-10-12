import Anime from '../model/Anime.js';

// Fetch all animes
export const getAnimes = async (req, res) => {
    try {
        const animes = await Anime.find();  // Fetch all animes
        res.status(200).json(animes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
