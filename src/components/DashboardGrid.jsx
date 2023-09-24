import React from 'react';
import {IoBagHandle, IoCartOutline, IoPeople, IoPieChart} from 'react-icons/io5';


const DashboardGrid = () => {
  return (
    <div className='flex gap-4 w-full'>
        
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                <IoBagHandle className='text-2xl text-white'></IoBagHandle>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total Sales</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>$34525.60</strong>
                    <span className='text-sm text-green-500 pl-2'>+234</span>
                </div>
            </div>
            </div>
        </div>
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-500'>
                <IoPieChart className='text-2xl text-white'></IoPieChart>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total Expenses</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>$2356.90</strong>
                    <span className='text-sm text-green-500 pl-2'>+179</span>
                </div>
            </div>
        </div>
        </div>
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500'>
                <IoPeople className='text-2xl text-white'></IoPeople>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total Customers</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>$3399.55</strong>
                    <span className='text-sm text-green-500 pl-2'>+350</span>
                </div>
            </div>
        </div>
        </div>
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
                <IoCartOutline className='text-2xl text-white'></IoCartOutline>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total Orders</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>$4675.88</strong>
                    <span className='text-sm text-green-500 pl-2'>+321</span>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DashboardGrid;

// function BoxWrapper({childern}){
//     return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{childern}</div>
// }