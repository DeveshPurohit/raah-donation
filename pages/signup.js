import { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function SignUpPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (e) => {
        e.preventDefault();
        const data = { name, email, password };
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        let response = await res.json();
        setEmail("");
        setName("");
        setPassword("");
        toast.success("Your Account has been created!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          router.push(`${process.env.NEXT_PUBLIC_HOST}/login`)  
        }, 2000)
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
              <h1 className="text-gray-600 font-semibold text-2xl">Sign up</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form className="py-8 text-base" onSubmit={handleSignUp}>
                <div className="space-y-4">
                  <div className="form-group">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="mt-1 p-1 focus:ring-pink-600 focus:border-pink-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
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
                      <div className="form-group">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 p-1 focus:ring-pink-600 focus:border-pink-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="pt-6 text-center">
              <button
                disabled={password!==confirmPassword}
                type="submit"
                className={password===confirmPassword?"w-full px-4 py-2 font-bold text-white bg-pink-600 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800":"w-full px-4 py-2 font-bold text-white bg-pink-300 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"}
              >
                Sign up
              </button>
             {password!==confirmPassword&&<p>password unmatched</p>}
            </div>
          </form>
          <div className="pt-6 text-center text-sm">
            Already have an account?{' '}
            <Link href="/login">
              <a className="text-pink-600 hover:text-green-700 font-semibold">
                Log in here
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}

export default SignUpPage;

