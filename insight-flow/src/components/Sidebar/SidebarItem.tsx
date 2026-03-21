import React from 'react';
import { List,ListItemButton , ListItemText , ListItemIcon , ListSubheader  } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
interface SidebarItemProps{
    active: boolean;
    label: string;
    icon: SvgIconComponent;

}

const SidebarItem = ({ active, label, icon: Icon }: SidebarItemProps) => {
  return (
    // <div className={`sidebar-item ${active ? "active" : ""}`}>
    //   <span className='icon'>{icon}</span>
    //   <span>{label}</span>
    // </div>

      <ListItemButton>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
     
  )
}

export default SidebarItem
