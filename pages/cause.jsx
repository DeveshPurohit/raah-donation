import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Cause = () => {
  const router = useRouter()
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [amount, setAmount] = useState();

  const handleChange = (e) => {
    if (e.target.name == "title") {
      setTitle(e.target.value);
    } 
    else if (e.target.name == "description") {
      setDescription(e.target.value);
    } 
    else if (e.target.name == "image") {
      setImage(e.target.value);
    }
    else if (e.target.name == "amount") {
      setAmount(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, description, image, amount };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/cause`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    setTitle("");
    setDescription("");
    setImage("");
    setAmount("");
    toast.success("Cause submitted succesfully", {
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
      <div className="min-h-full flex flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <div>
            <img
              className="mx-auto h-10 w-auto"
              src={"/raah.jpeg"}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add Cause
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/causes"}>
                <a
                  href="#"
                  className="font-medium text-pink-600 hover:text-pink-500"
                >
                  {" "}
                  view all causes{" "}
                </a>
              </Link>
            </p>
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
                  Title
                </label>
                <input
                  value={title}
                  onChange={handleChange}
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  
                />
              </div>
              <div>
                <label htmlFor="description" className="">
                Description
                </label>
                <input
                  value={description}
                  onChange={handleChange}
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  
                />
              </div>
              <div >
                <label htmlFor="image" className="">
                  Image Link
                </label>
                <input
                  value={image}
                  onChange={handleChange}
                  id="image"
                  name="image"
                  type="text"
                  autoComplete="image"
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
                
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cause;
