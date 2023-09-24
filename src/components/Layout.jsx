import React from 'react';
import DashboardGrid from './DashboardGrid';
//import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex gap-4'>

        <DashboardGrid></DashboardGrid>
      {/* <p>This is dashboard.</p>{''}
      <Link to="/products" className='underline'>go to products</Link> */}
    </div>
  )
}

export default Layout;
