import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardView from './DashboardView';
import PlaceholderView from './PlaceholderView';
import { viewConfigs } from './viewConfig';
import './Activeview.css';

interface ActiveViewProps {
    activeView: string;
}

const ActiveView = ({ activeView }: ActiveViewProps) => {
    const config = viewConfigs[activeView] ?? viewConfigs.Dashboard;
    const isDashboard = config.title === 'Dashboard';

    return (
        <Box className='active-view'>
            <Box className='active-view__header'>
                <Box>
                    <Typography variant='h4' className='active-view__title'>
                        {config.title}
                    </Typography>
                    {!isDashboard && (
                        <Typography className='active-view__subtitle'>
                            {config.subtitle}
                        </Typography>
                    )}
                </Box>
                <Stack direction='row' spacing={1} className='active-view__actions'>
                    <IconButton className='active-view__icon-button'>
                        <SearchIcon fontSize='small' />
                    </IconButton>
                    <IconButton className='active-view__icon-button'>
                        <InfoOutlinedIcon fontSize='small' />
                    </IconButton>
                    <IconButton className='active-view__icon-button'>
                        <MoreHorizIcon fontSize='small' />
                    </IconButton>
                </Stack>
            </Box>

            {isDashboard ? <DashboardView /> : <PlaceholderView config={config} />}
        </Box>
    );
};

export default ActiveView;
