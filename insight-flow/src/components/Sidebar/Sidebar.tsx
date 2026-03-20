import React from 'react'
import SidebarItem from './SidebarItem'
import { menuItems, preferences } from './menu';
import 'components/Sidebar/Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h2 className="logo">InsightFlow</h2>
        <div className='menu'>
            <h2>Manage</h2>
            {menuItems.map((item, index) => {
                return(
                    <SidebarItem
                        key={item.id}
                        active={index === 1}
                        label={item.label}
                        icon={item.icon}
                    />

                )
            })}
        </div>

        <div className='menu'>
            <h2>preferences</h2>
            {preferences.map((item, index) => {
                return(
                    <SidebarItem
                        key={item.id}
                        active={index === 1}
                        label={item.label}
                        icon={item.icon}
                    />

                )
            })}
        </div>
      
    </div>
  )
}

export default Sidebar
