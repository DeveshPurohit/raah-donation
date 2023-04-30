import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Donation = () => {
  const router = useRouter()
  const data = router.query;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pan, setPan] = useState();
  const [amount, setAmount] = useState();
  const [cause, setCause] = useState(data.title)

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
      setAmount(parseInt(e.target.value));
    }
  };

  // const initializeRazorpay = () => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/checkout.js";

  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };

  //     document.body.appendChild(script);
  //   });
  // };

  // const makePayment = async () => {
  //       const res = await initializeRazorpay();
  //   console.log("in function")
  //       if (!res) {
  //         alert("Razorpay SDK Failed to load");
  //         return;
  //       }
    
  //       // Make API call to the serverless API
  //       const data = await fetch("/api/razorpay", { method: "POST", amount }).then((t) =>
  //         t.json()
  //       );
  //       console.log(data);
  //       var options = {
  //         key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
  //         name: "Devesh Pvt Ltd",
  //         currency: data.currency,
  //         amount: amount,
  //         order_id: data.id,
  //         description: "Thankyou for your precious donation",
  //         image: "/raah.jpeg",
  //         handler: function (response) {
  //           // Validate payment at server - using webhooks is a better idea.
  //           console.log(response.razorpay_payment_id);
  //           console.log(response.razorpay_order_id);
  //           console.log(response.razorpay_signature);
  //         },
  //         prefill: {
  //           name: "Devesh Purohit",
  //           email: "purohitdev@gmail.com",
  //           contact: "9876549999",
  //         },
  //       };
    
  //       const paymentObject = new window.Razorpay(options);
  //       paymentObject.open();
  //       // e.preventDefault();
  //       // const info = { name, email, pan, cause, amount };
  //       // let ress = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/donater`, {
  //       //   method: "POST", // or 'PUT'
  //       //   headers: {
  //       //     "Content-Type": "application/json",
  //       //   },
  //       //   body: JSON.stringify(data),
  //       // });
  //       // let response = await ress.json();
  //       // setEmail("");
  //       // setName("");
  //       // setPan("");
  //       // setAmount("");
  //       // toast.success("Thanks for the Donation", {
  //       //   position: "top-center",
  //       //   autoClose: 1000,
  //       //   hideProgressBar: false,
  //       //   closeOnClick: true,
  //       //   pauseOnHover: true,
  //       //   draggable: true,
  //       //   progress: undefined,
  //       // });
    
  //     };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, pan, cause, amount };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/donater`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
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
      <div className="min-h-full flex flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <div>
            <img
              className="mx-auto h-10 w-auto"
              src={"/raah.jpeg"}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add Donation
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/dashboard"}>
                <a
                  href="#"
                  className="font-medium text-pink-600 hover:text-pink-500"
                >
                  {" "}
                  view your donation{" "}
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
              <div >
                <label htmlFor="cause" className="">
                  Cause
                </label>
                <input
                disabled
                  value={cause}
                  id="cause"
                  name="cause"
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
