import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Donation = () => {
  const router = useRouter()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pan, setPan] = useState();
  const [amount, setAmount] = useState();

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } 
    else if (e.target.name == "email") {
      setEmail(e.target.value);
    } 
    else if (e.target.name == "pan") {
      setPan(e.target.value);
    }
    else if (e.target.name == "amount") {
      setAmount(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, pan, amount };
    let res = await fetch("http://localhost:3000/api/donater", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setEmail("");
    setName("");
    setPan("");
    setAmount("");
    toast.success("Thanks for the Donation", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // setTimeout(() => {
    //   router.push("http://localhost:3000/login")  
    // }, 2000)
  };

  return (
    <div>
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
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-16 w-auto"
              src={"/raah.jpeg"}
              alt="Workflow"
            />
            <h1 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
              Enter Donation
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm space-y-6">
              <div>
                <label htmlFor="name" className="">
                  Name
                </label>
                <input
                  value={name}
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  
                />
              </div>
              <div>
                <label htmlFor="email" className="">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  
                />
              </div>
              <div >
                <label htmlFor="pan" className="">
                  Pan
                </label>
                <input
                  value={pan}
                  onChange={handleChange}
                  id="pan"
                  name="pan"
                  type="text"
                  autoComplete="current-pan"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-bl0ue-500 focus:z-10 sm:text-sm"
                  
                />
              </div>
              <div>
                <label htmlFor="amount" className="">
                  Amount
                </label>
                <input
                  value={amount}
                  onChange={handleChange}
                  id="amount"
                  name="amount"
                  type="number"
                  autoComplete="current-pan"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  
                />
              </div>
            </div>

            <div className="flex items-center justify-between"></div>

            <div>
              <button
                type="submit"
                className="text-lg group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                
                Donate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donation;
