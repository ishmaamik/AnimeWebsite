import { createContext, useState } from "react";

export const UserContext= createContext(null);

const UserProvider=({children})=>{
    const [username, setUsername]= useState('');
    const [reviews, setReviews]= useState('');
    return(
        <>
        <UserContext.Provider value={{
            username, setUsername, reviews, setReviews
        }}>
            {children}
        </UserContext.Provider>
        </>
    )
}

export default UserProvider;

