import React from 'react';
//import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardGrid from './DashboardGrid';
import TransactionChart from './TransactionChart';
import BuyerProfileChart from './BuyerProfileChart';
import RecentOrders from './RecentOrders';
//import PopularProducts from './PopularProducts';
//import Layout from './Layout';

const Dashboard = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-scroll"> 
      <Sidebar></Sidebar>
      <div className='flex-1'>
      <Header></Header>
      <DashboardGrid></DashboardGrid>
      <div className='flex flex-row gap-4 w-full'>
      <TransactionChart></TransactionChart>
      <BuyerProfileChart></BuyerProfileChart>
      </div>
      <div className='flex flex-row gap-4 w-full h-screen'>
      <RecentOrders></RecentOrders>
      {/* <PopularProducts></PopularProducts> */}
      </div>
      </div>
      
      </div>
  )
}

export default Dashboard;
