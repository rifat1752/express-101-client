import Swal from 'sweetalert2'
const PostUserData = () => {
    const  handlePostdata =async (e)=>{
        e.preventDefault ();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name, email,password};
        console.log(user);

        fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
        })
// async
        // try{
        //     const res = await fetch("http://localhost:5000/users",{
        //             method:"POST",
        //             headers:{
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify(user)
        //         })
        //         const data = await res.json();
        //         console.log(data)
        //         if(data.acknowledged){
        //             Swal.fire({
        //                             title: "Good job!",
        //                             text: "You clicked the button!",
        //                             icon: "success"
        //                           });
        //         }
        // }
        // catch(error){
        //     console.log(error);
        // }
    }
    return (

        <div>
            <h1 className="text-center text-5xl m-5 font-bold">Create User: </h1>


            <form onSubmit={handlePostdata} className="w-1/2 bg-slate-700 h-64 mx-auto flex flex-col items-center" action="">
                <div  className="mt-5">
                <label> Name:</label>
                <input className="ml-14 w-52 h-10 rounded bg-slate-300" type="text" name="name" placeholder="Enter name" /> 
                </div >
                <div className="mt-5">
                <label >Email:</label>
                <input className="ml-14 w-52 h-10 rounded bg-slate-300" type="email" name="email" placeholder="Enter Email" /> <br />
                </div>
                <div className="mt-5">
                <label >password:</label>
                <input className="ml-6 w-52 h-10 rounded bg-slate-300" type="password" name="password" placeholder="Enter password" /> <br />
                </div>
                <input className="btn mt-3 bg-green-500 text-black" type="submit" name="add value" />
            </form>
        </div>
    );
};

export default PostUserData;