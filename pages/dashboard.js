import React from "react";
import mongoose from "mongoose";
import Donater from "../models/Donater";
import Link from "next/link";
import { useState } from "react";

const Dashboard = ({ donaters }) => {
  console.log(donaters);
  const [nm, setNm] = useState('');
  const handleChange = (e) => {
    setNm(e.target.value)
  }
  return (
    <>
    <div className="sidebar flex flex-col  w-64 h-[100vh] overflow-y-scroll absolute top-0 left-0 bg-pink-300  px-8 py-10">
    <Link href={"/"}>
            <button className="text-white bg-pink-500 border-0 my-10 mx-4 py-2  focus:outline-none hover:bg-pink-600 rounded text-md">
              Home
            </button>
          </Link>
    <Link href={"/donation"}>
            <button className="text-white bg-pink-500 border-0 my-10 mx-4 py-2  focus:outline-none hover:bg-pink-600 rounded text-md">
              Add Donation
            </button>
          </Link>
    <Link href={"/signup"}>
            <button className="text-white bg-pink-500 border-0 my-10 mx-4 py-2  focus:outline-none hover:bg-pink-600 rounded text-md">
              Add New Donor
            </button>
          </Link>
    <Link href={"/"}>
            <button className="text-white bg-pink-500 border-0 my-10 mx-4 py-2  focus:outline-none hover:bg-pink-600 rounded text-md">
              Our Work
            </button>
          </Link>
    <Link href={"/"}>
            <button className="text-white bg-pink-500 border-0 my-10 mx-4 py-2  focus:outline-none hover:bg-pink-600 rounded text-md">
              Meet the Team
            </button>
          </Link>
    </div>
    <div className="container flex flex-col ">
      <h1 className=" m-6 text-center font-bold text-3xl">View your Donation</h1>
      <div className="m-10 flex justify-center">
        <input
          value={nm}
          onChange={handleChange}
          type="search"
          className=" form-control relative  min-w-0 block w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Search for the Donor name"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
       
       <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </span>
      </div>
      <table className="m-auto justify-center border-2 border-black">
        <thead className=" bg-gray font-semibold">
          <tr className="">
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-4 py-2  "
            >
              Name
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 "
            >
              Email
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 "
            >
              Pan
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 "
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(donaters).map((item) => {
            if(donaters[item].name == nm)
            {return (
              <tr
                key={donaters[item]._id}
                className="bg-white border-2 border-black transition duration-300 ease-in-out hover:bg-gray-100"
              >
               <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {donaters[item].name}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {donaters[item].email}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {donaters[item].pan}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  ₹{donaters[item].amount}
                </td>
              </tr>
            );}
          })}
        </tbody>
      </table>
    </div>
  </>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let donaters = await Donater.find({ __v: "0" });

  return {
    props: { donaters: JSON.parse(JSON.stringify(donaters)) }, // will be passed to the page component as props
  };
}

export default Dashboard;