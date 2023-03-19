import React from 'react'
import mongoose from "mongoose";
import Cause from "../models/Cause";
import Image from 'next/image';
import Link from 'next/link';

const causes = ({causes}) => {
  return (<div>
    <div className="flex justify-center mt-3">
                                           <div className="flex flex-col max-w-7xl justify-center items-center">
                                            <h1 className='font-bold text-3xl m-5'><u>Causes</u></h1>
                                           {Object.keys(causes).map((item) => {
            return (
                <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center" key={causes[item]._id}>
                                                   <div className=" h-26 w-full overflow-hidden"> <img src={causes[item].image} alt="" /> </div>
                                                   <div className="grid m-2 p-2">
                                                       <div className="font-bold text-lg text-black m-2 "><u>{causes[item].title}
                                                       </u> </div>
                                                       <div className="font-semibold text-lg text-black m-2 ">Required amount - {causes[item].amount}
                                                       </div>
                                                       <div className="text-gray-500 m-2 text-sm"><a href="">{causes[item].description}</a></div>
                                                       <Link href="/donation"><div>
              <button
                className="text-lg group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                
                Donate
              </button>
            </div></Link>
                                                   </div>
                                               </div>
            );
          })}
                                               
                                              
                                           </div>
                                       </div>
                                       </div>
  )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI);
    }
  
    let causes = await Cause.find({ __v: "0" });
  
    return {
      props: { causes: JSON.parse(JSON.stringify(causes)) }, // will be passed to the page component as props
    };
  }

  
export default causes