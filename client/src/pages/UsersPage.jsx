import { useEffect } from "react";
import { useUsers } from "../context/UsersContext";




function UsersPage() {
    const {getUsers, users} = useUsers();
    //console.log(users)

    useEffect(()=>{
        getUsers()
      },[])

    if(users.length === 0) return <h1> No Users</h1>


  return (
    <div>
        {users.map((user)=>(
            <div key={user._id}>
                <h1>{user.username}</h1>
            </div>
        ))}
    </div>
  )
}

export default UsersPage