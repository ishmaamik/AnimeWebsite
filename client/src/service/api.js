import axios from "axios";
const url='http://localhost:3000';

export const addUser= async(data)=>
{
    try{
       await axios.post(`${url}/add`, data);
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