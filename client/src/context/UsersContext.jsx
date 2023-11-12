import { createContext, useContext, useState } from "react";
import {getUsersRequest} from '../api/auth'

const UserContext = createContext();

export const useUsers = () => {
    const context = useContext(UserContext);

    if(!context){
        throw new Error('useUsers must be used within a UserProvider')
    }
    return context;
};

export function UserProvider({children}){
    
    const [users, setUsers] = useState([])

    const getUsers = async () =>{
        try {
            const res = await getUsersRequest();
            console.log(res)
            setUsers[res.data]
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UserContext.Provider
        value={{
            users,
            getUsers
        }}
        >
{children}
        </UserContext.Provider>
    );

}

