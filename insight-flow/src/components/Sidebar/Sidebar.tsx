import React from 'react'
import SidebarItem from './SidebarItem'
import { menuItems, preferences } from './menu';
import 'components/Sidebar/Sidebar.css';
import { ReactComponent as Darklogo } from 'assets/insightflow-logo-dark.svg';
import { ReactComponent as Lightlogo } from 'assets/insightflow-logo-light.svg';
import { List, ListSubheader } from '@mui/material';

const Sidebar = () => {
    return (
        <>
            <Darklogo />
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
                {menuItems.map((item, index) => {
                    return (
                        <SidebarItem
                            key={item.id}
                            active={index === 1}
                            label={item.label}
                            icon={item.icon}

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
                {preferences.map((item, index) => {
                    return (
                        <SidebarItem
                            key={item.id}
                            active={index === 1}
                            label={item.label}
                            icon={item.icon}
                        />

                    )
                })}
            </List>
        </>
    )
}

export default Sidebar
