import React from 'react'
interface SidebarItemProps{
    active: boolean;
    label: string;
    icon: string;
}

const SidebarItem = ({ active, label, icon }: SidebarItemProps) => {
  return (
    <div className={`sidebar-item ${active ? "active" : ""}`}>
      <span className='icon'>{icon}</span>
      <span>{label}</span>
    </div>
  )
}

export default SidebarItem
