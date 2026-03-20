import React from 'react'
import Sidebar from 'components/Sidebar/Sidebar';
import 'pages/Layout.css';

const Layout = () => {
  return (
    <div className='main-container'>
        <div className='left-container'>
            <Sidebar />
        </div>
        <div className='right-container'></div>
      
    </div>
  )
}

export default Layout
