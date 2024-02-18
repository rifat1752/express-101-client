/* eslint-disable react-hooks/rules-of-hooks */
import { useLoaderData } from "react-router-dom";
import UserCard from "./UserCard/UserCard";
import { useState } from "react";
import Swal from 'sweetalert2'

const displayUsers = () => {
    
    const users = useLoaderData();
    const [updatedUsers, setUpdatedUsers] = useState(users);
    const handleDelete=(_id)=>{
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);

            if(data.deletedCount>0){
                const filteredData = updatedUsers.filter(item=>item._id !== _id);
                setUpdatedUsers(filteredData);
                Swal.fire({
                    title: "Good job!",
                    text: "account delete!",
                    icon: "success"
                  });
            }
          

        })
    }
    return (
        <div>
             <h1 className="text-center text-5xl m-5 font-bold">User:{updatedUsers.length} </h1>
             <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    updatedUsers.map(updatedUser=> <UserCard key={updatedUser._id}  updatedUser={updatedUser} handleDelete={handleDelete}></UserCard>)
                }
             </div>
        </div>
    );
};

export default displayUsers;