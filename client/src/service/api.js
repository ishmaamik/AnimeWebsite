import axios from "axios";
const url='http://localhost:3000';

export const addUser= async(data)=>
{
    try{
       const response= await axios.post(`${url}/add`, data);
       console.log("user added");
       return response;
    }
    catch(error)
    {
        console.log("error while posting API", error.message);
    }
};

export const getAnimes = async () => {
    try {
        const response = await axios.get(`${url}/animes`);
        return response.data;  // Return the fetched anime data
    } catch (error) {
        console.log("Error while fetching animes", error.message);
        return [];  // Return an empty array if an error occurs
    }
};

export const getAnimeName= async(animeName)=>{
    try{
        const response= await axios.get(`${url}/animes/${animeName}`);
        return response.data;
    }
    catch(error){
        console.log("Error finding anime", error.message);
    }
}

export const postReview = async (reviewData) => {
    try {
        // Ensure that the data is passed as a body, not as parameters
        await axios.post(`${url}/reviews`, reviewData);
    } catch (error) {
        console.log("Error while posting review", error.message);
    }
};

export const getReviews = async (animename) => {
    try {
        const response = await axios.get(`${url}/reviews/${animename}`);
        return response.data;  // Return the reviews from the API
    } catch (error) {
        console.log("Error while getting reviews", error.message);
        return [];  // Return an empty array if an error occurs
    }
};


export const getAnimeTags= async(tagname)=> {
    try {
        console.log(`Requesting animes for tag: ${tagname}`);  // Debugging log
        const response = await axios.get(`${url}/animes/tag/${tagname}`);
        return response.data;
    } catch (error) {
        console.log("Error getting anime by tag", error.message);
        return [];
    }
}
