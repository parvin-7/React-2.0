import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({child}) =>{
    
    const [user,setUser]  = React.useState(null)

    return(
        <UserContext.Provider value={{user,setUser}}>
        {child}
        </UserContext.Provider>
    )
}

export default UserContextProvider