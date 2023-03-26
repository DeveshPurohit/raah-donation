import React from 'react'
import mongoose from "mongoose";
import Donater from "../../models/Donater";
import moment from 'moment';

const Cause = ({donaters}) => {
  console.log(donaters)
  return (
    <div>
      <h1 className='text-center font-bold text-3xl m-5'>Total Collection</h1>
      

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
              Cause
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 "
            >
              Amount
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 "
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(donaters).map((item) => {
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
                  {donaters[item].cause}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  ₹{donaters[item].amount}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {moment(donaters[item].createdAt).format('LL')}
                </td>
              </tr>
            );}
          })}
        </tbody>
      </table>
      <h3 className='m-4 text-center font-semibold'>Remaining amount - </h3>

    </div>

  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let donaters = await Donater.find({ cause: context.query.slug });

  return {
    props: { donaters: JSON.parse(JSON.stringify(donaters)) }, // will be passed to the page component as props
  };
}

export default Cause