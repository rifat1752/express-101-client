import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdatedData = () => {
  const user = useLoaderData();
console.log("user",user);
  const handleUpdate= e =>{
    e.preventDefault ();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const updateUser = {name, email,password};
    console.log(updateUser);

    fetch(`http://localhost:5000/users/${user._id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
        })

  }
  return (
    <div>
      <h1 className="text-center text-5xl m-5 font-bold">Update User: </h1>
      <form onSubmit={handleUpdate}  className="w-1/2    bg-slate-700 h-64 mx-auto flex flex-col items-center" action="">
                <div  className="mt-5">
                <label> Name:</label>
                <input className="text-black  ml-14 w-52 h-10 rounded bg-slate-300" defaultValue={user?.name} type="text" name="name" placeholder="Enter name" /> 
                </div >
                <div className="mt-5">
                <label >Email:</label>
                <input className="text-black  ml-14 w-52 h-10 rounded bg-slate-300" defaultValue={user?.email} type="email" name="email" placeholder="Enter Email" /> <br />
                </div>
                <div className="mt-5">
                <label >password:</label>
                <input className="text-black  ml-6 w-52 h-10 rounded bg-slate-300" type="password" defaultValue={user?.password} name="password" placeholder="Enter password" /> <br />
                </div>
                <input className="btn mt-3 bg-green-500 text-black" type="submit" name="update" />
            </form>
    </div>
  );
};

export default UpdatedData;
