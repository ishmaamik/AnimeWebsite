import { Button, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAnimeTags } from "../service/api";

const TagButtons = () => {
    const [selectedTag, setSelectedTag] = useState("");
    const navigate = useNavigate();

    const tags = ["Shonen", "Rom-com", "Isekai", "Sci-Fi", "SliceOfLife"];

    const handleTagClick = async (tagname) => {
        setSelectedTag(tagname);

        // Fetch animes based on the selected tag
        try {
            const animes = await getAnimeTags(tagname);
            // Navigate to the tag results page with the fetched animes (you can pass the results via state)
            navigate(`/animes/tag/${tagname}`, { state: { animes } });
        } catch (error) {
            console.log("Error fetching animes by tag:", error);
        }
    };

    return (
        <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
            {tags.map((tag) => (
                <Button 
                    key={tag} 
                    variant="contained" 
                    onClick={() => handleTagClick(tag)}
                >
                    {tag}
                </Button>
            ))}
        </Box>
    );
};

export default TagButtons;
