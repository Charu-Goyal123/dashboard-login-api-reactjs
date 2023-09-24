import React, {Fragment} from 'react'
import {HiOutlineBell, HiOutlineChartSquareBar, HiOutlineChatAlt, HiOutlineSearch} from 'react-icons/hi';
import { Popover, Transition, Menu } from '@headlessui/react';
//import { useNavigate } from 'react-router-dom';
 
const Header = () => {

  //const navigate = useNavigate()
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
      <div className='relative'>
        <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'></HiOutlineSearch>
        <input type='text' placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4'></input>
      </div>
      <div className='flex items-center gap-2 mr-2'> 
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className="p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
            >
              <HiOutlineChatAlt fontSize={24}></HiOutlineChatAlt>
            </Popover.Button>
             <Transition
              as= "Fragment"
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            ></Transition>
            <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
              <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                <strong className='text-gray-700 font-medium'>Messages</strong>
              <div className='mt-2 py-1 text-sm'>
                This is message panel.
              </div>
              </div>
              </Popover.Panel>
      </>)}
      </Popover>

        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className='p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
            >
             
               <HiOutlineBell fontSize={24}></HiOutlineBell>
            </Popover.Button>
             <Transition
              as= "Fragment"
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            ></Transition>
            <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
              <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                <strong className='text-gray-700 font-medium'>Notifications</strong>
              <div className='mt-2 py-1 text-sm'>
                This is notification panel.
              </div>
              </div>
              </Popover.Panel>
      </>)}
      </Popover>

       {/* <div className="fixed top-16 w-56 text-right"> */}
      <Menu as="div" className="relative inline-block text-left">
        <div>
         
         <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <span className='sr-only'>Open user menu</span>
            
            <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center' style={{backgroundImage:'url()'}}>
              <span className='sr-only'>Jackson</span>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            
              <Menu.Item>
                {({ active }) => (
                  <div className='text-gray-700 focus:bg-gray-200 block rounded-sm px-4 py-2'>
                      Your profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className='text-gray-700 focus:bg-gray-200 block rounded-sm px-4 py-2'>
                      Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className='text-gray-700 focus:bg-gray-200 block rounded-sm px-4 py-2'>
                      Logout
                  </div>
                )}
              </Menu.Item>
              {/* <Menu.Item>
                {({ active }) => (
                  <button>
                      Settings
                  </button>
                )}
              </Menu.Item> */}
              
              </Menu.Items>
              </Transition>
        {/* <HiOutlineChartSquareBar></HiOutlineChartSquareBar> */}
        
       </Menu>
      </div>
    </div>
  )
}

export default Header;
