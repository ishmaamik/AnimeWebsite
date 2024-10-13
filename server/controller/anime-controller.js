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

export const getAnimeName= async(req, res)=>{
    try{
        const {animename}= req.params;
        const anime= await Anime.findOne({name: animename});
        if (!anime) {
            return res.status(404).json({ message: 'Anime not found' });
        }
        return res.status(200).json(anime);
    }
    catch(error){
        return res.status(500).json({ message: 'Error fetching anime', error: error.message});
    }
}

