//import { Disclosure } from '@headlessui/react';
import React from 'react';

import {MdBarChart, MdComment, MdOutlineAnalytics, MdOutlineIntegrationInstructions, MdOutlineLogout, MdOutlineMoreHoriz, MdOutlineSettings, MdOutlineSpaceDashboard} from 'react-icons/md';

import {BsTable} from 'react-icons/bs';
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  // const navigate = useNavigate();
  // function tableHandler()
  // {
  //        navigate("/dashboard")
  // }
  return (

    <div className='p-6 w-1/2 h-screen bg-gray-100 z-20 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
      
    <div className='flex flex-col justify-start items-center'>
      <h1 className='text-base text-center font-bold text-blue-900 border-b border-gray-100 pb-4 w-full'> Virtual Dashboard</h1>
    <div className='my-4 border-b border-gray-100 pb-4'>
      <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
        <MdOutlineSpaceDashboard  className='text-2xl text-gray-600 group-hover:text-white'></MdOutlineSpaceDashboard>
        <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Dashboard</h3>

      </div>

      <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
        <BsTable className='text-2xl text-gray-600 group-hover:text-white'></BsTable>
       <Link to="/table"> <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Table</h3></Link>

      </div>
      <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
        <MdComment className='text-2xl text-gray-600 group-hover:text-white'></MdComment>
        <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Comments</h3>

      </div>
      <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
        <MdOutlineAnalytics  className='text-2xl text-gray-600 group-hover:text-white'></MdOutlineAnalytics>
       <Link to="/analytics"> <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Analytics</h3></Link>

      </div>
      <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
        <MdBarChart className='text-2xl text-gray-600 group-hover:text-white'></MdBarChart>
        <Link to="/chart"><h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Chart</h3></Link>

      </div>
      <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
        <MdOutlineIntegrationInstructions  className='text-2xl text-gray-600 group-hover:text-white'></MdOutlineIntegrationInstructions>
        <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Integration</h3>

      </div>
    </div>


    <div className='my-4 border-b border-gray-100 pb-4'>
      <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
        <MdOutlineSettings  className='text-2xl text-gray-600 group-hover:text-white'></MdOutlineSettings>
        <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Settings</h3>

      </div>

      <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
        <MdOutlineMoreHoriz className='text-2xl text-gray-600 group-hover:text-white'></MdOutlineMoreHoriz>
        <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>More</h3>

      </div>

      </div>

      <div className='my-4'>
      <div className='flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
        <MdOutlineLogout className='text-2xl text-gray-600 group-hover:text-white'></MdOutlineLogout>
        <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Logout</h3>

      </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar;
