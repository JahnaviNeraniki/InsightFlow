import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { ViewConfig } from './viewConfig';

interface PlaceholderViewProps {
    config: ViewConfig;
}

const placeholderCards = [
    { title: 'Primary Panel', description: 'Use this area for the main content block of the selected section.' },
    { title: 'Supporting Details', description: 'Reserve this block for filters, summaries, or settings related to this view.' },
    { title: 'Upcoming Actions', description: 'Keep quick actions, shortcuts, or helper information here later.' }
];

const PlaceholderView = ({ config }: PlaceholderViewProps) => {
    return (
        <Stack spacing={2.5}>
            <Box className='dashboard-card placeholder-hero'>
                <Typography className='placeholder-hero__subtitle'>{config.subtitle}</Typography>
                <Grid container spacing={2}>
                    {config.summary.map((item) => (
                        <Grid size={{ xs: 12, sm: 4 }} key={item.label}>
                            <Box className='placeholder-summary'>
                                <Typography className='placeholder-summary__label'>{item.label}</Typography>
                                <Typography className='placeholder-summary__value'>{item.value}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Grid container spacing={2.5}>
                {placeholderCards.map((item) => (
                    <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                        <Box className='dashboard-card placeholder-card'>
                            <Typography className='section-title section-title--spaced'>{item.title}</Typography>
                            <Typography className='placeholder-card__text'>{item.description}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default PlaceholderView;
