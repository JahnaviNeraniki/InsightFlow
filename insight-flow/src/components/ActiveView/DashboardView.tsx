import React from 'react';
import {
    Avatar,
    Box,
    Chip,
    Grid,
    LinearProgress,
    Stack,
    Typography
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

const stats = [
    { label: 'Total Balance', value: '$ 19,750', change: '+ 18.6%', tone: 'success', className: 'violet' },
    { label: 'Total Expense', value: '$ 11,375', change: '+ 10.9%', tone: 'danger', className: 'pink' },
    { label: 'Total Savings', value: '$ 8,400', change: '+ 21.7%', tone: 'success', className: 'red' }
] as const;

const incomeBars = [
    { month: 'Jan', value: 78 },
    { month: 'Feb', value: 46 },
    { month: 'Mar', value: 62 },
    { month: 'Apr', value: 56 },
    { month: 'May', value: 60 },
    { month: 'Jun', value: 36 },
    { month: 'Jul', value: 68 },
    { month: 'Aug', value: 52 },
    { month: 'Sep', value: 74 },
    { month: 'Oct', value: 58 },
    { month: 'Nov', value: 65 },
    { month: 'Dec', value: 54 }
];

const transactions = [
    { title: 'Refueling gasoline', amount: '-$30.24', tone: 'danger' },
    { title: 'Purchase of furniture', amount: '-$230.11', tone: 'danger' },
    { title: 'Cash refund for tickets', amount: '+$480.18', tone: 'success' }
] as const;

const history = [
    {
        name: 'Samuil Reita',
        detail: 'BKJS Kesehatan',
        time: '10:45:16 AM',
        amount: '$ 245.00',
        status: 'Completed',
        statusClass: 'completed'
    },
    {
        name: 'Lucas Lenzi',
        detail: 'Online Payment',
        time: '12:46:45 PM',
        amount: '$ 348.40',
        status: 'Pending',
        statusClass: 'pending'
    }
] as const;

const analyticsRows = [
    { label: 'Stars', value: 82 },
    { label: 'Footings', value: 74 },
    { label: 'Electrical', value: 70 },
    { label: 'Framing Material', value: 66 },
    { label: 'Finish Labor', value: 61 },
    { label: 'Hardware', value: 52 },
    { label: 'Framing', value: 44 },
    { label: 'Tile Installation', value: 30 },
    { label: 'Roofing', value: 27 },
    { label: 'Appliances Install', value: 18 },
    { label: 'Insulation', value: 12 },
    { label: 'Interior Painting', value: 9 }
];

interface DashboardCardProps {
    children: React.ReactNode;
    className?: string;
}

const DashboardCard = ({ children, className = '' }: DashboardCardProps) => (
    <Box className={`dashboard-card ${className}`.trim()}>
        {children}
    </Box>
);

interface SectionHeaderProps {
    title: string;
    action?: React.ReactNode;
}

const SectionHeader = ({ title, action }: SectionHeaderProps) => (
    <Box className='card-header'>
        <Typography className='section-title'>{title}</Typography>
        {action}
    </Box>
);

const DashboardView = () => {
    return (
        <Grid container spacing={2.5}>
            <Grid size={{ xs: 12, xl: 9 }}>
                <Grid container spacing={2.5}>
                    {stats.map((item) => (
                        <Grid size={{ xs: 12, md: 4 }} key={item.label}>
                            <DashboardCard className={`metric-card metric-card--${item.className}`}>
                                <Box className='metric-card__top'>
                                    <Box>
                                        <Typography className='eyebrow-text'>{item.label}</Typography>
                                        <Typography className='metric-card__value'>{item.value}</Typography>
                                    </Box>
                                    <MoreHorizIcon className='muted-icon' fontSize='small' />
                                </Box>
                                <Typography className={`metric-card__change metric-card__change--${item.tone}`}>
                                    {item.change}
                                </Typography>
                                <Box className='metric-card__sparkline' />
                            </DashboardCard>
                        </Grid>
                    ))}

                    <Grid size={{ xs: 12 }}>
                        <DashboardCard className='outlay-card'>
                            <SectionHeader
                                title='Outlay'
                                action={(
                                    <Stack direction='row' spacing={1.5} className='outlay-card__legend'>
                                        <Typography className='legend-text'>
                                            <span className='legend-dot legend-dot--purple' />
                                            Previous month
                                        </Typography>
                                        <Typography className='legend-text'>
                                            <span className='legend-dot legend-dot--pink' />
                                            Selected month
                                        </Typography>
                                        <Chip
                                            className='outlay-card__chip'
                                            label='April 2023'
                                            size='small'
                                        />
                                    </Stack>
                                )}
                            />
                            <Box className='outlay-chart'>
                                <Box className='outlay-chart__overlay outlay-chart__overlay--purple' />
                                <Box className='outlay-chart__overlay outlay-chart__overlay--pink' />
                                <Box className='outlay-chart__marker'>
                                    <span className='outlay-chart__tooltip'>$2710</span>
                                </Box>
                                <Box className='outlay-chart__axis outlay-chart__axis--y'>
                                    {['$4000', '$3000', '$2000', '$1000', '$0'].map((value) => (
                                        <Typography key={value}>{value}</Typography>
                                    ))}
                                </Box>
                                <Box className='outlay-chart__axis outlay-chart__axis--x'>
                                    {['1', '5', '10', '15', '20', '25', '30'].map((value) => (
                                        <Typography key={value}>{value}</Typography>
                                    ))}
                                </Box>
                            </Box>
                        </DashboardCard>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <DashboardCard>
                            <SectionHeader
                                title='Income'
                                action={<Chip className='income-chip' label='Last Year' size='small' />}
                            />
                            <Box className='income-chart'>
                                <Box className='income-chart__axis'>
                                    {['$30,000', '$20,000', '$10,000', '$0'].map((value) => (
                                        <Typography key={value}>{value}</Typography>
                                    ))}
                                </Box>
                                <Box className='income-chart__bars'>
                                    {incomeBars.map((item) => (
                                        <Box className='income-bar-group' key={item.month}>
                                            <Box className='income-bar-track'>
                                                <Box className='income-bar-fill' sx={{ height: `${item.value}%` }} />
                                            </Box>
                                            <Typography className='income-bar-label'>{item.month}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </DashboardCard>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <DashboardCard>
                            <SectionHeader
                                title='Latest Transactions'
                                action={<MoreHorizIcon className='muted-icon' fontSize='small' />}
                            />
                            <Stack spacing={2.25} className='transaction-list'>
                                {transactions.map((item) => (
                                    <Box className='transaction-row' key={item.title}>
                                        <Typography className='transaction-row__title'>{item.title}</Typography>
                                        <Typography className={`transaction-row__amount transaction-row__amount--${item.tone}`}>
                                            {item.amount}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </DashboardCard>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <DashboardCard>
                            <Typography className='section-title section-title--spaced'>Transaction History</Typography>
                            <Stack spacing={1.5}>
                                {history.map((item) => (
                                    <Box className='history-row' key={item.name}>
                                        <Box className='history-row__identity'>
                                            <Avatar className='history-row__avatar'>{item.name.charAt(0)}</Avatar>
                                            <Box>
                                                <Typography className='history-row__name'>{item.name}</Typography>
                                                <Typography className='history-row__detail'>{item.detail}</Typography>
                                            </Box>
                                        </Box>
                                        <Typography className='history-row__time'>{item.time}</Typography>
                                        <Typography className='history-row__amount'>{item.amount}</Typography>
                                        <Box className={`history-row__status history-row__status--${item.statusClass}`}>
                                            <span className='history-row__status-dot' />
                                            <Typography>{item.status}</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                        </DashboardCard>
                    </Grid>
                </Grid>
            </Grid>

            <Grid size={{ xs: 12, xl: 3 }}>
                <Stack spacing={2.5}>
                    <DashboardCard className='side-card'>
                        <SectionHeader
                            title='My Card'
                            action={<MoreHorizIcon className='muted-icon' fontSize='small' />}
                        />
                        <Box className='bank-card'>
                            <Box className='bank-card__top'>
                                <Typography className='bank-card__label'>Current Balance</Typography>
                                <CreditCardOutlinedIcon fontSize='small' />
                            </Box>
                            <Typography className='bank-card__balance'>$19,750</Typography>
                            <Typography className='bank-card__number'>2357 1885 6251 0380</Typography>
                            <Box className='bank-card__footer'>
                                <Typography className='bank-card__expiry'>09 / 24</Typography>
                                <Typography className='bank-card__brand'>VISA</Typography>
                            </Box>
                        </Box>
                    </DashboardCard>

                    <DashboardCard className='side-card'>
                        <SectionHeader
                            title='Analytics'
                            action={<Chip className='income-chip' label='Last Month' size='small' />}
                        />
                        <Stack spacing={1.25} className='analytics-list'>
                            {analyticsRows.map((item) => (
                                <Box className='analytics-row' key={item.label}>
                                    <Typography className='analytics-row__label'>{item.label}</Typography>
                                    <Box className='analytics-row__progress'>
                                        <LinearProgress
                                            variant='determinate'
                                            value={item.value}
                                            className='analytics-row__bar'
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </Stack>
                        <Box className='analytics-total'>
                            <Typography>Total</Typography>
                            <Typography>$17,355</Typography>
                        </Box>
                    </DashboardCard>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default DashboardView;
