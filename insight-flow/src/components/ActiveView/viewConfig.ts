export interface SummaryItem {
    label: string;
    value: string;
}

export interface ViewConfig {
    title: string;
    subtitle: string;
    summary: SummaryItem[];
}

export const viewConfigs: Record<string, ViewConfig> = {
    Dashboard: {
        title: 'Dashboard',
        subtitle: 'Overview of balance, income, transactions, and analytics.',
        summary: [
            { label: 'Primary Focus', value: 'Financial overview' },
            { label: 'Default Layout', value: 'Full dashboard canvas' },
            { label: 'Data Mode', value: 'Static UI placeholders' }
        ]
    },
    Analytics: {
        title: 'Analytics',
        subtitle: 'Reserved for charts, trend filters, and KPI breakdowns.',
        summary: [
            { label: 'Suggested Blocks', value: 'Performance trends and comparisons' },
            { label: 'Status', value: 'Ready for future wiring' },
            { label: 'Data Mode', value: 'Static placeholders only' }
        ]
    },
    Performance: {
        title: 'Performance',
        subtitle: 'Reserved for team, project, or product performance indicators.',
        summary: [
            { label: 'Suggested Blocks', value: 'Benchmarks, growth, and scorecards' },
            { label: 'Status', value: 'Ready for future wiring' },
            { label: 'Data Mode', value: 'Static placeholders only' }
        ]
    },
    Notifications: {
        title: 'Notifications',
        subtitle: 'Reserved for recent alerts, updates, and message activity.',
        summary: [
            { label: 'Suggested Blocks', value: 'Unread alerts and categorized updates' },
            { label: 'Status', value: 'Ready for future wiring' },
            { label: 'Data Mode', value: 'Static placeholders only' }
        ]
    },
    Settings: {
        title: 'Settings',
        subtitle: 'Reserved for profile, workspace, and application settings.',
        summary: [
            { label: 'Suggested Blocks', value: 'Preferences, profile, and controls' },
            { label: 'Status', value: 'Ready for future wiring' },
            { label: 'Data Mode', value: 'Static placeholders only' }
        ]
    },
    Theme: {
        title: 'Theme',
        subtitle: 'Reserved for theme options, appearance presets, and UI controls.',
        summary: [
            { label: 'Suggested Blocks', value: 'Dark mode, accents, and density' },
            { label: 'Status', value: 'Toggle remains in sidebar' },
            { label: 'Data Mode', value: 'Static placeholders only' }
        ]
    },
    Security: {
        title: 'Security',
        subtitle: 'Reserved for login history, permissions, and protection settings.',
        summary: [
            { label: 'Suggested Blocks', value: 'Sessions, devices, and policies' },
            { label: 'Status', value: 'Ready for future wiring' },
            { label: 'Data Mode', value: 'Static placeholders only' }
        ]
    },
    Logout: {
        title: 'Logout',
        subtitle: 'Reserved for confirmation, session summary, and exit actions.',
        summary: [
            { label: 'Suggested Blocks', value: 'Confirmation and session details' },
            { label: 'Status', value: 'No action added yet' },
            { label: 'Data Mode', value: 'Static placeholders only' }
        ]
    }
};
