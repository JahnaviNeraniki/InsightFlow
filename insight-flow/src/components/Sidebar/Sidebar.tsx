import React from 'react'
import SidebarItem from './SidebarItem'
import { getPreferences, menuItems } from './menu';
import 'components/Sidebar/Sidebar.css';
import { ReactComponent as Darklogo } from 'assets/insightflow-logo-dark.svg';
import { ReactComponent as Lightlogo } from 'assets/insightflow-logo-light.svg';
import { List, ListSubheader } from '@mui/material';

interface sidebarprops {
    isDark: boolean;
    onThemeChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onItemChanged: (item:string) => void;
    activeItem: string;
}

const Sidebar = ({ isDark, onThemeChanged, onItemChanged, activeItem }: sidebarprops) => {
    const preferences = getPreferences(isDark);
    return (
        <>
            {isDark ? <Darklogo className='logo'/> : <Lightlogo className='logo'/> }
            <List
                className='list'
                subheader={
                    <ListSubheader component="div" sx={{
                        backgroundColor: 'var(--secondary-bg-color)',
                        color: 'var(--subheading-text-color)'
                    }}>
                        Manage
                    </ListSubheader>
                }
            >
                {menuItems.map((item) => {
                    return (
                        <SidebarItem
                            key={item.id}
                            active={activeItem === item.label}
                            label={item.label}
                            icon={item.icon}
                            isDark={isDark}
                            onItemChanged={onItemChanged}
                        />

                    )
                })}
            </List>
            <List
                className='list'
                subheader={
                    <ListSubheader component="div" sx={{
                        backgroundColor: 'var(--secondary-bg-color)',
                        color: 'var(--subheading-text-color)'
                    }}>
                        Preferences
                    </ListSubheader>
                }
            >
                {preferences.map((item) => {
                    return (
                        <SidebarItem
                            key={item.id}
                            active={activeItem === item.label}
                            label={item.label}
                            icon={item.icon}
                            isDark={isDark}
                            onThemeChanged={onThemeChanged}
                            onItemChanged={onItemChanged}
                        />

                    )
                })}
            </List>
        </>
    )
}

export default Sidebar
