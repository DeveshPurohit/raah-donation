import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     router.push("/");
  //   }
  // }, []);

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    const data = { email, password };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    setEmail("");
    setPassword("");
    if (response.success) {
      localStorage.setItem("token", response.token);
      toast.success("You are Succesfully logged in!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}/donation`);
      }, 1500);
    } else {
      toast.error(response.error, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <ToastContainer
     position="top-center"
     autoClose={1000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
   />
   <div className="relative py-3 sm:max-w-xl sm:mx-auto">
     <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
       <div className="max-w-md mx-auto">
         <div className="flex items-center space-x-5">
           
             <img
           className="h-14 w-14"
           src={"/raah.jpeg"}
           alt="Workflow"
         />
           <h1 className="text-gray-600 font-semibold text-2xl">Log in</h1>
         </div>
         <div className="divide-y divide-gray-200">
           <form className="py-8 text-base" onSubmit={handleLogIn}>
             <div className="space-y-4">
               <div className="form-group">
                 <label htmlFor="email" className="text-sm font-medium text-gray-700">
                   Email address
                 </label>
                 <input
                   id="email"
                   name="email"
                   type="email"
                   autoComplete="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                   className="mt-1 p-1 focus:ring-pink-600 focus:border-pink-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="password" className="text-sm font-medium text-gray-700">
                   Password
                 </label>
                 <input
                   id="password"
                   name="password"
                   type="password"
                   autoComplete="new-password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   required
                   className="mt-1 p-1 focus:ring-pink-600 focus:border-pink-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                   />
                   </div>
                  
         </div>

         <div className="pt-6 text-center">
           <button
             type="submit"
             className="w-full px-4 py-2 font-bold text-white bg-pink-600 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
           >
             Log in
           </button>
         </div>
       </form>
       <div className="pt-6 text-center text-sm">
         Dont have an account?{' '}
         <Link href="/signup">
           <a className="text-pink-600 hover:text-green-700 font-semibold">
             Sign up here
           </a>
         </Link>
       </div>
     </div>
   </div>
 </div>
</div>
</div>
  );
};

export default Login;
