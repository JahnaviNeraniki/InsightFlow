import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface SidebarItemProps {
  active: boolean;
  label: string;
  icon: SvgIconComponent;
  isDark?: boolean;
  onThemeChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onItemChanged: (item: string) => void;
}

const SidebarItem = ({ active, label, icon: Icon, isDark, onThemeChanged, onItemChanged }: SidebarItemProps) => {
  return (
    <ListItemButton
      className={`sidebar-item ${active ? 'sidebar-item--active' : ''} ${isDark ? 'sidebar-item--dark' : 'sidebar-item--light'}`.trim()}
      onClick={() => onItemChanged(label)}
    >
      <ListItemIcon className='sidebar-item__icon-wrap'>
        <Icon className='icon' />
      </ListItemIcon>
      <ListItemText primary={label} />
      {label === 'Theme' && (
        <Switch checked={isDark} onChange={onThemeChanged} />
      )}

    </ListItemButton>

  );
};

export default SidebarItem;
