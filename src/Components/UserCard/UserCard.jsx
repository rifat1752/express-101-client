/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const UserCard = ({updatedUser, handleDelete}) => {

    
   
    return (
        <div className="mx-auto">
            <div className="w-80 bg-slate-300 text-black h-32 my-5 flex flex-col justify-evenly">
                <p className="pl-4">name: {updatedUser.name}</p>
                <p className="pl-4">email : {updatedUser.email}</p>
                <div className="flex justify-center">
                <button onClick={()=>handleDelete(updatedUser._id)} className="btn bg-red-500 w-20 text-black  mx-auto mt-2" type="submit">Delete</button>
                <Link  className="ml-5 btn bg-green-500 w-20 text-black  mx-auto mt-2" to={`/users/${updatedUser._id}`}><button  type="submit">Updete</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default UserCard;