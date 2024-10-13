import Anime from '../model/Anime.js';  // Import your Anime model

// Fetch animes by tag
export const getAnimesByTag = async (req, res) => {
    try {
        const { tagname } = req.params;  // Extract the tag from the URL
        
        // Find animes that have the specified tag in their tags array
        const animes = await Anime.find({ tags: tagname });

        if (animes.length === 0) {
            return res.status(404).json({ message: 'No animes found for this tag' });
        }

        return res.status(200).json(animes);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching animes by tag', error: error.message });
    }
};
