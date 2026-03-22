import React from 'react';
import { List, ListItemButton, ListItemText, ListItemIcon, ListSubheader, Switch } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
interface SidebarItemProps {
  active: boolean;
  label: string;
  icon: SvgIconComponent;
  isDark?: boolean;
  onThemeChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const SidebarItem = ({ active, label, icon: Icon, isDark, onThemeChanged }: SidebarItemProps) => {
 
  return (
    <ListItemButton>
      <ListItemIcon>
        <Icon className='icon'/>
      </ListItemIcon>
      <ListItemText primary={label} />
      {label === "Theme" && (
        <Switch checked={isDark} onChange={onThemeChanged} />
      )}

    </ListItemButton>

  )
}

export default SidebarItem
