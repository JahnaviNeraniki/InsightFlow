import React from 'react';
import { List, ListItemButton, ListItemText, ListItemIcon, ListSubheader, Switch } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
interface SidebarItemProps {
  active: boolean;
  label: string;
  icon: SvgIconComponent;

}


const SidebarItem = ({ active, label, icon: Icon }: SidebarItemProps) => {
  const [isDark, setIsDark] = React.useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );


  const handleThemeChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    setIsDark(checked);

    document.documentElement.setAttribute(
      "data-theme",
      checked ? "dark" : "light"
    );
  };
  return (
    <ListItemButton>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} />
      {label === "Theme" && (
        <Switch checked={isDark} onChange={handleThemeChanged} />
      )}

    </ListItemButton>

  )
}

export default SidebarItem
